<script setup lang="ts">
import {
  beamLowConfig,
  cloudConfig,
  spotlightConfig,
} from "@/constants/config";
import { BeamLow } from "@/models/beam-low";
import { Cloud } from "@/models/cloud";
import { Spotlight } from "@/models/spotlight";
import { onMounted, ref } from "vue";
import BeamLowImg from "../assets/images/beam-low.png";
import CloudImg from "../assets/images/cloud.png";
import SpotlightImg from "../assets/images/spotlight.png";

const canvasRef = ref();
onMounted(() => {
  const canvas: HTMLCanvasElement = canvasRef.value;
  if (canvas) {
    const context = canvas.getContext("2d");

    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;

    // render spotlight
    const spotlightImage = new Image(
      spotlightConfig.width,
      spotlightConfig.height
    );
    spotlightImage.src = SpotlightImg;
    const spotlight = new Spotlight(
      spotlightImage,
      spotlightConfig.width / spotlightConfig.framesX,
      spotlightConfig.height / spotlightConfig.framesY,
      spotlightConfig.left,
      spotlightConfig.top,
      spotlightConfig.framesX,
      spotlightConfig.framesY
    );

    // render cloud
    const cloudImage = new Image(cloudConfig.width, cloudConfig.height);
    cloudImage.src = CloudImg;
    const cloud = new Cloud(
      cloudImage,
      cloudConfig.width,
      cloudConfig.height,
      cloudConfig.framesX,
      cloudConfig.framesY
    );

    // render beam low
    const beamLowImage = new Image();
    beamLowImage.src = BeamLowImg;
    const beamLow = new BeamLow(
      beamLowImage,
      beamLowConfig.width,
      beamLowConfig.height,
      spotlight.dx + spotlight.sWidth/2,
      spotlight.dy
    );

    const animate = (ctx: CanvasRenderingContext2D): void => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      cloud.draw(ctx);
      cloud.update(0.5);

      spotlight.draw(ctx);
      spotlight.update();

      beamLow.init(ctx);
      beamLow.update();

      window.requestAnimationFrame(() => animate(ctx));
    };

    if (context) {
      animate(context);
    }
  }
});
</script>

<template>
  <canvas
    ref="canvasRef"
    class="fixed inset-0 z-50 w-screen h-screen bg-black/50"
  ></canvas>
</template>
