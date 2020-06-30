<template>
  <div
    class="text-center h-map bg-white shadow rounded-lg p-6 flex items-center justify-center relative"
  >
    <div>
      <p class="text-4xl">#{{ count + 1 }}</p>
      <p class="text-xl">{{ facts[count] }}</p>
      <img
        v-if="count == facts.length"
        class="h-56 w-auto"
        src="meme.jpg"
        alt=""
      />
      <div
        class="flex items-center justify-between p-4 w-full absolute bottom-0 left-0"
      >
        <button @click="count--" :disabled="count == 0">
          <svg
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="h-8 w-8"
          >
            <path d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        <nuxt-link to="/stats" class="underline text-indigo-600"
          >Stats</nuxt-link
        >
        <button @click="count++" :disabled="count >= facts.length">
          <svg
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="h-8 w-8"
          >
            <path d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  transition: "fade",
  data() {
    return {
      count: 0,
      facts: [
        "He's a Bharat Ratna (The Highest Indian civilian award) & Padma Vibhushan, Padma Shri award and several other awards winner, to name a few",
        "He has scored the most number of runs (18,426) in the entire Cricket history. True Story",
        "In 1992, he became the youngest cricketer to reach 1000 runs in Test cricket.",
        "He holds the record for most centuries in International cricket history. Though he retired in 2013.",
        "He is the first cricketer to hit a double century in ODIs"
      ]
    };
  }
};
</script>
