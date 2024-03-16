import Planet from "./Planet";

class Sun extends Planet {
  constructor(posX, posY) {
    super(
      'Sun', 
      posX, 
      posY, 
      0, 
      'yellow', 
      100, 
      0
    )
  }
  render(ctx) {
    super.render(ctx);

    ctx.lineWidth = 2;
    ctx.strokeStyle = "red";
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.arc(
      this.offsetX + this.x + 10,
      this.offsetY + this.y + 10,
      5, 
      0, 
      2 * Math.PI
    );
    ctx.fill();
    ctx.closePath();
  }
}

export default Sun;