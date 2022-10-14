<script setup lang="ts">
import kpDarkImage from "../assets/images/kp-dark.gif";

defineProps<{
  active: boolean;
  onClick: () => void;
}>();
</script>
<template>
  <button
    type="button"
    class="absolute right-5 bottom-5 sm:right-10 sm:bottom-10 z-50 text-white transition-all"
    :class="{ 'scale-0': active }"
    @click="onClick"
  >
    <img :src="kpDarkImage" width="80" height="80" />
  </button>
</template>
