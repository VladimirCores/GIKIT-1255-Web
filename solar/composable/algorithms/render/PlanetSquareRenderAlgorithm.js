class PlanetSimpleRenderAlgorithm {
  constructor() {

  }
  render(ctx, settings) {
    ctx.beginPath();
    ctx.fillStyle = settings.color;
    ctx.rect(
      settings.offsetX + settings.x, 
      settings.offsetY + settings.y, 
      settings.size, settings.size);
    ctx.fill();
    ctx.closePath();
  }
}

export default PlanetSimpleRenderAlgorithm;