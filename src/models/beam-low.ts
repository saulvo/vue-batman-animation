import { ImageFrame } from "./image-frame";
import audio from "@/assets/audio/signal-and-storm.mp3";
export class BeamLow extends ImageFrame {
  audio: HTMLAudioElement;
  constructor(
    image: HTMLImageElement,
    sWidth: number,
    sHeight: number,
    dx: number,
    dy: number
  ) {
    super(image, sWidth, sHeight, dx, dy);
    this.audio = new Audio();
    this.audio.src = audio;
  }
  draw(ctx: CanvasRenderingContext2D): void {
    const scaleX =
      window.innerWidth > 1024 ? 1 : (window.innerWidth * 1.2) / 1024;
    const scaleY =
      window.innerWidth > 1024 ? 1 : (window.innerWidth * 2) / 1024;
    ctx.save();
    ctx.globalAlpha = this.opacity;
    ctx.scale(scaleX, scaleY);
    ctx.translate(
      this.dx * scaleX + this.sWidth / 2,
      this.dy * scaleY + this.sHeight / 2
    );
    ctx.rotate((165 * Math.PI) / 180);
    ctx.translate(
      -(this.dx * scaleX + this.sWidth / 2),
      -(this.dy * scaleY + this.sHeight / 2)
    );
    ctx.drawImage(this.image, this.dx * scaleX, this.dy * scaleY);
    ctx.restore();
  }
  update(): void {
    if (this.screenFrame === 0) this.audio.play();
    if (this.screenFrame < 100) {
      this.opacity = Math.floor(this.screenFrame / 5) % 2 === 0 ? 0 : 0.3;
      this.screenFrame += 1;
    } else {
      this.opacity = 0.5;
    }
  }
}
