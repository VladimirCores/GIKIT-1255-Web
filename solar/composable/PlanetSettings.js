class PlanetSettings {
  constructor(
    name = "", 
    offsetX = 0, 
    offsetY = 0,
    radius = 0,
    color = "blue",
    size = 0,
    speed = 0
  ) {
    this.x = 0;
    this.y = 0;
    this.angle = 0;

    this.name = name;
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    this.radius = radius;
    this.color = color;
    this.size = size;
    this.speed = speed;
  }
}

export default PlanetSettings;