<template>
  <div class="my-6">
    <p class="text-xl font-semibold mb-4">Oter Details</p>
    <div
      class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 bg-white rounded-lg shadow p-4 divide-x"
    >
      <div id="tossPie" class="flex items-center justify-center">
        <div>
          <p class="text-center mb-4">Toss Data</p>
          <apexchart
            type="pie"
            height="250"
            :options="tossOptions"
            :series="tossSeries"
          ></apexchart>
        </div>
      </div>
      <div id="inningsPie" class="flex items-center justify-center">
        <div>
          <p class="text-center mb-4">Innings Data</p>
          <apexchart
            type="pie"
            height="250"
            :options="inningsOptions"
            :series="inningsSeries"
          ></apexchart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["tosses", "innings"],
  data() {
    return {
      tossSeries: this.tosses,
      tossOptions: {
        chart: {
          width: 380,
          type: "pie"
        },
        labels: ["Won", "Lost"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: "bottom"
              }
            }
          }
        ]
      },
      inningsSeries: this.innings,
      inningsOptions: {
        chart: {
          width: 380,
          type: "pie"
        },
        labels: ["1st", "2nd"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: "bottom"
              }
            }
          }
        ]
      }
    };
  }
};
</script>
