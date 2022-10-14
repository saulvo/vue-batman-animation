import { ImageFrame } from "./image-frame";

export class Spotlight extends ImageFrame {
  update(): void {
    if (this.screenFrame > 200) {
      const positionX =
        Math.floor(this.screenFrame / this.staggerFrames) % this.frameRows;
      const positionY =
        Math.floor(this.screenFrame / this.frameRows) % this.frameColumns;

      this.frameX = positionX * this.sWidth;
      this.frameY = positionY * this.sHeight;
    }

    if (this.screenFrame < 140) {
      this.opacity = 0;
    } else {
      this.opacity = 1;
    }

    this.screenFrame += 1;
  }
}
