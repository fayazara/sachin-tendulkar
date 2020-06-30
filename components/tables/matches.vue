<template>
  <div class="my-4">
    <p class="text-xl font-semibold mb-2">Sachins Entire Career</p>
    <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
      <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
        <table class="min-w-full leading-normal">
          <thead>
            <tr class="text-gray-600 bg-white">
              <th
                class="p-5 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider"
              >
                Scored
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider"
              >
                Wickets
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider"
              >
                Conceded
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider"
              >
                Catches
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider"
              >
                Stumps
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider"
              >
                Against
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider"
              >
                Ground
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider"
              >
                Date
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider"
              >
                Result
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider"
              >
                Margin
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider"
              >
                Toss
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider"
              >
                Innings
              </th>
            </tr>
          </thead>
          <tbody class="transition-all">
            <tr
              v-for="match in matches"
              :key="match.id"
              class="hover:bg-white"
              :class="
                match.match_result === 'won' ? 'bg-green-200' : 'bg-red-200'
              "
            >
              <td class="px-5 py-5 border-b border-gray-200 text-sm">
                <p>{{ match.batting_score }}</p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 text-sm">
                <p>{{ match.wickets }}</p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 text-sm">
                <p>{{ match.runs_conceded }}</p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 text-sm">
                <p>{{ match.catches }}</p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 text-sm">
                <p>{{ match.stumps }}</p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 text-sm">
                <p>{{ match.opposition.split("v ")[1] }}</p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 text-sm">
                <p>{{ match.ground }}</p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 text-sm">
                <p>{{ match.date }}</p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 text-sm">
                <p
                  :class="resultBg(match.match_result)"
                  class="text-white rounded-full text-center capitalize"
                >
                  {{ match.match_result }}
                </p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 text-sm">
                <p>{{ match.result_margin }}</p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 text-sm">
                <p
                  :class="resultBg(match.toss)"
                  class="text-white rounded-full text-center capitalize px-2"
                >
                  {{ match.toss }}
                </p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 text-sm">
                <p>{{ match.batting_innings }}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["matches"],
  methods: {
    resultBg(val) {
      return val === "won" ? "bg-green-500" : "bg-red-500";
    }
  }
};
</script>

<style></style>
