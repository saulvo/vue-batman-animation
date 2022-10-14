import { ImageFrame } from "./image-frame";

export class Spotlight extends ImageFrame {
  update(): void {
    const positionX =
      Math.floor(this.gameFrame / this.staggerFrames) % this.frameRows;
    const positionY =
      Math.floor(this.gameFrame / this.frameRows) % this.frameColumns;

    this.frameX = positionX * this.sWidth;
    this.frameY = positionY * this.sHeight;

    if (this.gameFrame < 50) {
      this.opacity = Math.floor(this.gameFrame / 5) % 2 === 0 ? 0 : 0.5;
    } else {
      this.opacity = 1;
    }

    this.gameFrame += 1;
  }
}
