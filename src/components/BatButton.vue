<script setup lang="ts">
import { ref } from "vue";
import kpDarkImage from "../assets/images/kp-dark.gif";

const isHidden = ref(false);
const toggleClick = () => {
  isHidden.value = !isHidden.value;
};
</script>
<template>
  <button
    type="button"
    class="absolute right-5 bottom-5 sm:right-10 sm:bottom-10 z-50 text-white transition-all"
    :class="{ 'scale-0': isHidden }"
    @click="toggleClick"
  >
    <img :src="kpDarkImage" width="80" height="80" />
  </button>
</template>
