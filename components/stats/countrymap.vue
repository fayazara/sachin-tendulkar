<template>
  <div class="my-6">
    <p>Map</p>
    <div
      class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 bg-white rounded-lg shadow-lg"
    >
      <ul style="height:400px" class="w-full divide-y overflow-y-auto">
        <li
          @click="selectCountry(item.country)"
          v-for="(item, j) in countries"
          :key="j"
          class="px-4 py-2 cursor-pointer"
        >
          <p>
            {{ item.count }} matches in
            <span class="font-semibold">{{ item.country }}</span>
          </p>
        </li>
      </ul>
      <div style="height:400px">
        <client-only>
          <l-map class="rounded-r-lg" :zoom="zoom" :center="center">
            <l-tile-layer
              url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            ></l-tile-layer>
            <l-marker
              v-for="(item, i) in countries"
              :key="i"
              :lat-lng="getCoordinates(item.country)"
            >
              <l-tooltip :options="{ permanent: true, interactive: true }">
                <div>{{ item.count }} in {{ item.country }}</div>
              </l-tooltip>
            </l-marker>
          </l-map>
        </client-only>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["countries"],
  data() {
    return {
      allCountries: [],
      center: [25.947336, 27.740653],
      zoom: 2
    };
  },
  async fetch() {
    const { data } = await this.$axios.get(
      "https://restcountries.eu/rest/v2/all?fullText=true&fields=latlng;name"
    );
    this.allCountries = data;
  },
  methods: {
    getCoordinates(country) {
      if (this.allCountries) {
        var countryCleaned = country;
        if (country === "U.A.E.") countryCleaned = "United Arab Emirates";
        if (country === "West Indies") countryCleaned = "Jamaica";
        if (country === "England")
          countryCleaned =
            "United Kingdom of Great Britain and Northern Ireland";

        var cd = this.allCountries.find(item => item.name === countryCleaned);
        if (cd) return cd.latlng;
        else return [20, 77];
      } else return null;
    },
    selectCountry(country) {
      var countryCleaned = country;
      if (country === "U.A.E.") countryCleaned = "United Arab Emirates";
      if (country === "West Indies") countryCleaned = "Jamaica";
      if (country === "England")
        countryCleaned = "United Kingdom of Great Britain and Northern Ireland";
      let x = this.allCountries.find(item => item.name === countryCleaned);
      this.center = x.latlng;
      this.zoom = 4;
    }
  }
};
</script>

<style></style>
