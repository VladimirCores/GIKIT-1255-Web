class PlanetComposable {
  constructor(planeSettings, moveAlgorithm, renderAlgorithm) {
    this.settings = planeSettings;
    this.moveAlgorithm = moveAlgorithm;
    this.renderAlgorithm = renderAlgorithm;
  }
  get offsetX() {
    return this.settings.offsetX;
  }
  get offsetY() {
    return this.settings.offsetY;
  }
  get size() {
    return this.settings.size;
  }
  render(ctx) {
    this.renderAlgorithm.render(ctx, this.settings);
  }
  move() {
    if (this.moveAlgorithm) {
      this.moveAlgorithm.move(this.settings);
    }
  }
}

export default PlanetComposable;