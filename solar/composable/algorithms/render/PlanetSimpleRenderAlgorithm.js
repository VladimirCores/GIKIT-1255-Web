class PlanetSimpleRenderAlgorithm {
  constructor() {

  }
  render(ctx, settings) {
    ctx.beginPath();
    ctx.fillStyle = settings.color;
    ctx.arc(
      settings.offsetX + settings.x,
      settings.offsetY + settings.y,
      settings.size, 
      0, 
      2 * Math.PI
    );
    ctx.fill();
    ctx.closePath();
  }
}

export default PlanetSimpleRenderAlgorithm;