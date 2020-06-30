<template>
  <div class="my-6">
    <div class="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 text-white">
      <div class="bg-indigo-500 rounded-lg  h-40 p-6 flex items-center">
        <div>
          <p class="text-4xl font-bold">{{ totalMatches }}</p>
          <p class="text-sm">Matches Played</p>
        </div>
      </div>
      <div class="bg-indigo-500 rounded-lg shadow h-40 p-6 flex items-center">
        <div>
          <p class="text-4xl font-bold">{{ lifetimeRuns }}</p>
          <p class="text-sm">Lifetime Runs</p>
        </div>
      </div>
      <div class="bg-indigo-500 rounded-lg shadow h-40 p-6 flex items-center">
        <div>
          <div>
            <span class="text-4xl font-bold">{{ winCount }}/</span>
            <span class="text-sm">{{ totalMatches }}</span>
          </div>
          <p class="text-sm">Matches Won</p>
        </div>
      </div>
      <div class="bg-indigo-500 rounded-lg shadow h-40 p-6 flex items-center">
        <div>
          <p class="text-4xl font-bold">{{ careerSpan }}</p>
          <p class="text-sm">Career Span</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["lifetimeRuns", "careerSpan", "totalMatches", "winCount"]
};
</script>

<style></style>
