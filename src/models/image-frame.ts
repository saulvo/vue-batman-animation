export class ImageFrame {
  image: HTMLImageElement;
  sWidth: number;
  sHeight: number;
  dx: number;
  dy: number;
  frameRows: number;
  frameColumns: number;

  frameX: number;
  frameY: number;
  screenFrame: number;
  staggerFrames: number;
  opacity: number;

  constructor(
    image: HTMLImageElement,
    sWidth: number,
    sHeight: number,
    dx: number,
    dy: number,
    frameRows: number = 1,
    frameColumns: number = 1,
    staggerFrames: number = 1
  ) {
    this.image = image;
    this.sWidth = sWidth;
    this.sHeight = sHeight;
    this.dx = dx;
    this.dy = dy;
    this.frameRows = frameRows;
    this.frameColumns = frameColumns;
    this.staggerFrames = staggerFrames;

    this.frameX = 0;
    this.frameY = 0;
    this.screenFrame = 0;
    this.opacity = 1;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    const scale = window.innerWidth > 1024 ? 1 : window.innerWidth / 1024;
    ctx.save();
    ctx.globalAlpha = this.opacity;
    ctx.scale(scale, scale);
    ctx.drawImage(
      this.image,
      this.frameX,
      this.frameY,
      this.sWidth,
      this.sHeight,
      this.dx * scale,
      this.dy * scale,
      this.sWidth,
      this.sHeight
    );
    ctx.restore();
  }
}
