<template>
  <div class="my-6">
    <p class="text-xl font-semibold mb-4">Runs Timeline</p>
    <div id="runs" class="bg-white rounded-lg p-4 shadow">
      <apexchart
      class="overflow-x-hidden"
        type="area"
        height="350"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>
  </div>
</template>

<script>
export default {
  props: ["runsTimeline"],
  data() {
    return {
      series: [
        {
          name: "Runs Scored",
          data: this.runsTimeline.map(x => x.runsScored)
        },
        {
          name: "Runs Conceded",
          data: this.runsTimeline.map(x => x.runsConceded)
        }
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: "area"
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "smooth"
        },
        xaxis: {
          type: "datetime",
          categories: this.runsTimeline.map(x => x.date)
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm"
          }
        }
      }
    };
  }
};
</script>
