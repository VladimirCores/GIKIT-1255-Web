const RAD_IN_CIRCLE = 2 * Math.PI;
const RAD_DELTA = Math.PI / 180;

class PlaneCircularMoveAlgorithm {
  move(planetSettings) {
    planetSettings.x = planetSettings.radius * Math.sin(planetSettings.angle);
    planetSettings.y = planetSettings.radius * Math.cos(planetSettings.angle);
    planetSettings.angle += RAD_DELTA * planetSettings.speed;
    if (planetSettings.angle >= RAD_IN_CIRCLE) {
      planetSettings.angle = 0;
    }
  }
}

export default PlaneCircularMoveAlgorithm;