<template>
  <main class="container mx-auto py-12 px-4 text-gray-700">
    <h1>Stats</h1>
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
    </section>
  </main>
</template>

<script>

import cards from "~/components/stats/cards";
import countrymap from "~/components/stats/countrymap";
export default {
  data() {
    return {
      matches: null
    };
  },
  async fetch() {
    //https://api.jsonbin.io/b/5efb101d7f16b71d48a88aea
    //https://gson.fayazara.now.sh/?url=https://docs.google.com/spreadsheets/d/e/2PACX-1vTD4h0ksxxfIeV91uOVRwdk0JknCelzwaIyQYOMsmQSG8jX4qtIvZsUPLK0VI8gONEWl5JCAYm44fCD/pub?output=csv
    const { data } = await this.$axios.get("https://gson.fayazara.now.sh/?url=https://docs.google.com/spreadsheets/d/e/2PACX-1vTD4h0ksxxfIeV91uOVRwdk0JknCelzwaIyQYOMsmQSG8jX4qtIvZsUPLK0VI8gONEWl5JCAYm44fCD/pub?output=csv");
    this.matches = data;
  },
  computed: {
    lifetimeRuns() {
      let score = null;
      const runs = this.matches.reduce((a, match) => {
        if (match.batting_score == "DNB" || match.batting_score == "TDNB") {
          score = 0;
        } else {
          if (typeof match.batting_score == "string") {
            if (match.batting_score.includes("*")) {
              score = parseInt(match.batting_score.split("*")[0]);
            }
          } else score = match.batting_score;
        }
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
    }
  },
  components: {
    cards,
    countrymap
  }
};
</script>

<style></style>
