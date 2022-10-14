import { ImageFrame } from "./image-frame";

export class Cloud extends ImageFrame {
  update(speed: number): void {
    const scale = window.innerWidth > 1024 ? 1 : window.innerWidth / 1024;
    this.opacity =  0.5;
    if (this.dx < window.innerWidth) {
      this.dx += speed;
    } else {
      this.dx = -this.sWidth * scale;
    }
  }
}
