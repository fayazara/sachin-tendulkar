<template>
  <main
    class="max-w-2xl mx-auto text-gray-700 p-4 sm:px-4 md:px-0 lg:px-0 xl:px-0"
  >
    <section class="mb-4 pt-12 text-center">
      <div
        @mouseenter="hoverOn()"
        @mouseleave="hoverOff()"
        class="relative inline-block"
      >
        <img src="/sachin.svg" class="mx-auto" alt="" />
        <span v-if="hovered" class="text-6xl absolute inset-x-0 top-sachin"
          >👑</span
        >
        <img
          v-if="hovered"
          src="/thug_life.png"
          class="absolute inset-x-0 top-thuglife-y left-thuglife-x"
          alt=""
        />
        <p
          class="hidden lg:block xl:block text-xs text-center mt-4 text-gray-600"
        >
          {{ hoverMsg }}
        </p>
      </div>
      <h1 class="text-4xl font-semibold my-4">Sachin Tendulkar</h1>
      <p class="text-xl">Why he is the greatest cricketer of all time.</p>
    </section>
    <nuxt-child />
    <audio ref="thuglife" src="/audio/music.mp3"></audio>
  </main>
</template>

<script>
export default {
  transition: "fade",
  data() {
    return {
      hovered: false
    };
  },
  methods: {
    hoverOn() {
      this.hovered = true;
      this.$refs.thuglife.play();
    },
    hoverOff() {
      this.hovered = false;
      this.$refs.thuglife.pause();
    }
  },
  computed: {
    hoverMsg() {
      return this.hovered
        ? "M sorry 😅"
        : "Hover on the image for something special";
    }
  },
  mounted() {
    this.$refs.thuglife.volume = 0.3;
  }
};
</script>
