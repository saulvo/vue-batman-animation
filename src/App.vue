<script setup lang="ts">
import AnimatedFrame from "@/components/AnimatedFrame.vue";
import BatButton from "@/components/BatButton.vue";
</script>
<template>
  <div
    class="overflow-hidden relative w-screen h-screen bg-[image:url(/src/assets/images/gotham-city.webp)] bg-cover bg-center after:absolute after:w-full after:h-full after:bg-black/75"
  >
    <AnimatedFrame />
    <BatButton />
    <p
      class="absolute z-50 left-0 bottom-0 w-full py-4 text-gray-200 font-medium text-center text-sm sm:text-[1rem]"
    >
      --&nbsp;Created by&nbsp;
      <a
        href="https://github.com/sonvt-fe"
        target="_blank"
        rel="noopener noreferrer"
        class="text-red-600 font-bold hover:underline"
      >
        Saul Vo
      </a>
      &nbsp;😍&nbsp;--
    </p>
  </div>
</template>
