<template>
  <section class="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <nuxt-link
      to="/here-is-why"
      class="bg-indigo-500 rounded-lg shadow flex justify-center items-center h-64 text-center transition-transform ease-in-out duration-300 transform hover:-translate-y-1"
    >
      <div class="text-white">
        <svg
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="h-16 w-16 mx-auto"
        >
          <path
            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
          ></path>
          <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <p class="pt-4 text-xl font-semibold">Know Why</p>
        <p class="text-gray-200 text-xs">A montage</p>
      </div>
    </nuxt-link>
    <nuxt-link
      to="/stats"
      class="bg-indigo-500 rounded-lg shadow flex justify-center items-center h-64 text-center transition-transform ease-in-out duration-300 transform hover:-translate-y-1"
    >
      <div class="text-white">
        <svg
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="h-16 w-16 mx-auto"
        >
          <path
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          ></path>
        </svg>
        <p class="pt-4 text-xl font-semibold">Career stats</p>
        <p class="text-gray-200 text-xs">The actual assignment</p>
      </div>
    </nuxt-link>
  </section>
</template>

<script>
export default {
  transition: "fade"
};
</script>

<style></style>
