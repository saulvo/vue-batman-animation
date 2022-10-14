import grappleShootAudio from "@/assets/audio/grapple-shoot.mp3";
import grappleLandAudio from "@/assets/audio/grapple-land.mp3";
import ropeImg from "@/assets/images/rope.png";

export class Grapple {
  ropeImage: HTMLImageElement;
  dx: number;
  dy: number;
  screenFrame: number;
  scaleY: number;
  ropeAudio: HTMLAudioElement;
  hookAudio: HTMLAudioElement;
  constructor() {
    this.ropeImage = new Image();
    this.ropeImage.src = ropeImg;
    this.dx = 0;
    this.dy = (window.innerHeight * 2) / 3 - this.ropeImage.height / 2;
    this.scaleY = 0;
    this.screenFrame = 0;
    this.ropeAudio = new Audio();
    this.ropeAudio.src = grappleShootAudio;
    this.hookAudio = new Audio();
    this.hookAudio.src = grappleLandAudio;
  }

  init(ctx: CanvasRenderingContext2D): void {
    ctx.save();

    ctx.translate(
      this.dx + this.ropeImage.width / 2,
      this.dy + this.ropeImage.height / 2
    );

    ctx.rotate((75 * Math.PI) / 180);
    ctx.scale(0.15, this.scaleY);

    ctx.translate(
      -(this.dx + this.ropeImage.width / 2),
      -(this.dy + this.ropeImage.height / 2)
    );
    ctx.drawImage(this.ropeImage, this.dx, this.dy);
    ctx.restore();
  }
  update(): void {
    if (this.screenFrame === 250) this.ropeAudio.play();
    if (this.screenFrame > 250) {
      if (this.scaleY < 12) {
        this.scaleY += this.screenFrame / 2000;
      }

      if (this.screenFrame === 322) {
        this.hookAudio.play();
      }
    }
    this.screenFrame += 1;
  }
}
