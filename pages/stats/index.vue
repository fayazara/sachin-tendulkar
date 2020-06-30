<template>
  <main class="container mx-auto py-12 px-4 text-gray-700">
    <h1 class="text-4xl font-semibold">Sachins Career Visualisation</h1>
    <p v-if="$fetchState.pending">Fetching stats...</p>
    <p v-else-if="$fetchState.error">
      Error while fetching stats: {{ $fetchState.error.message }}
    </p>
    <section v-else>
      <cards
        :lifetimeRuns="lifetimeRuns"
        :winCount="winCount"
        :totalMatches="matches.length"
        :careerSpan="careerSpan"
      />
      <countrymap :countries="countries" />
      <runs :runsTimeline="runsTimeline" />
      <toss :tosses="tosses" :innings="innings" />
      <matchestable :matches="matches" />
    </section>
  </main>
</template>

<script>
import cards from "~/components/stats/cards";
import countrymap from "~/components/maps/countrymap";
import runs from "~/components/charts/runs";
import toss from "~/components/charts/toss";
import matchestable from "~/components/tables/matches";
export default {
  data() {
    return {
      matches: null
    };
  },
  async fetch() {
    //https://api.jsonbin.io/b/5efb101d7f16b71d48a88aea
    //https://gson.fayazara.now.sh/?url=https://docs.google.com/spreadsheets/d/e/2PACX-1vTD4h0ksxxfIeV91uOVRwdk0JknCelzwaIyQYOMsmQSG8jX4qtIvZsUPLK0VI8gONEWl5JCAYm44fCD/pub?output=csv
    const { data } = await this.$axios.get("/sachin.json");
    this.matches = data;
  },
  methods: {
    getCleanedScore(val) {
      if (val == "DNB" || val == "TDNB") {
        return 0;
      } else {
        if (typeof val == "string") {
          if (val.includes("*")) {
            return parseInt(val.split("*")[0]);
          }
        } else return val;
      }
    }
  },
  computed: {
    lifetimeRuns() {
      let score = null;
      const runs = this.matches.reduce((a, match) => {
        score = this.getCleanedScore(match.batting_score);
        return a + score;
      }, 0);
      return runs;
    },
    winCount() {
      return this.matches.reduce((n, match) => {
        return n + (match.match_result === "won");
      }, 0);
    },
    careerSpan() {
      let dates = this.matches.map(match => {
        return match.date.split(" ")[2];
      });
      let max = dates.reduce(function(a, b) {
        return Math.max(a, b);
      });
      let min = dates.reduce(function(a, b) {
        return Math.min(a, b);
      });
      return `${min} - ${max}`;
    },
    countries() {
      let cleanedLocations = this.matches.map(match => {
        return {
          country: match.opposition.split("v ")[1],
          count: this.matches.filter(x => x.opposition === match.opposition)
            .length
        };
      });

      const uniqueLocations = cleanedLocations.reduce((acc, current) => {
        const x = acc.find(item => item.country === current.country);
        if (!x) {
          return acc.concat([current]);
        } else {
          return acc;
        }
      }, []);
      return uniqueLocations;
    },
    runsTimeline() {
      return this.matches.map(match => {
        return {
          runsScored: this.getCleanedScore(match.batting_score),
          runsConceded: match.runs_conceded === "-" ? 0 : match.runs_conceded,
          date: match.date
        };
      });
    },
    tosses() {
      return [
        this.matches.filter(x => x.toss === "won").length,
        this.matches.filter(x => x.toss === "lost").length
      ];
    },
    innings() {
      return [
        this.matches.filter(x => x.batting_innings === "1st").length,
        this.matches.filter(x => x.batting_innings === "2nd").length
      ];
    }
  },
  components: {
    cards,
    countrymap,
    runs,
    toss,
    matchestable
  }
};
</script>
