const RAD_IN_CIRCLE = 2 * Math.PI;
const RAD_DELTA = Math.PI / 180;

class Planet {
  constructor(
    name = "", 
    offsetX = 0, 
    offsetY = 0,
    radius = 0,
    color = "blue",
    size = 0,
    speed = 0,
    followers = []
  ) {
    this.name = name;
    this.x = 0;
    this.y = 0;
    this.angle = 0;
    this.radius = radius;
    this.color = color;
    this.size = size;
    this.speed = speed;
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    this.followers = followers;
  }
  render(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(
      this.offsetX + this.x,
      this.offsetY + this.y,
      this.size, 
      0, 
      2 * Math.PI
    );
    ctx.fill();
    ctx.closePath();
  }
  move() {
    this.x = this.radius * Math.sin(this.angle);
    this.y = this.radius * Math.cos(this.angle);
    this.angle += RAD_DELTA * this.speed;
    if (this.angle >= RAD_IN_CIRCLE) {
      this.angle = 0;
    }
  }
}

export default Planet;