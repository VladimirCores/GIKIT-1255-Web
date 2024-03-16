import Planet from './solar/Planet.js'
import PlanetComposable from './solar/composable/PlanetComposable.js'
import PlanetSettings from './solar/composable/PlanetSettings.js'
import PlaneCircularMoveAlgorithm from './solar/composable/algorithms/move/PlaneCircularMoveAlgorithm.js'
import PlanetSimpleRenderAlgorithm from './solar/composable/algorithms/render/PlanetSimpleRenderAlgorithm.js'
import PlanetSquareRenderAlgorithm from './solar/composable/algorithms/render/PlanetSquareRenderAlgorithm.js'
import Sun from './solar/Sun.js'

const ctx = InitiateCanvas();

const sun = new PlanetComposable(
  new PlanetSettings(
    'Sun', 
    window.innerWidth / 2,
    window.innerHeight / 2,
    0, 
    'yellow', 
    100, 
    0
  ),
  null,
  new PlanetSimpleRenderAlgorithm()
);

// const planets = InitiatePlanetsRelatedToSun(sun);
const planets = InitiatePlanetsComposablesRelatedToSun(sun);

Start();

function InitiateCanvas() {
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  return ctx;
}

function InitiatePlanetsRelatedToSun(sun) {
  return [
    new Planet('Earth', sun.offsetX, sun.offsetY, sun.size * 2 + 30, 'green', 15, 0.5, [
      new Planet('Moon', 0, 0, 25, '#ffcc00', 5, 1.2),
      new Planet('Moon2', 0, 0, 35, 'blue', 3, 1.4),
      new Planet('Moon2', 0, 0, 50, '#ff00cc', 3, 1.1)
    ]),
    new Planet('Mars', sun.offsetX, sun.offsetY, sun.size * 2 + 80, 'red', 10, 1.2),
  ];
}


function InitiatePlanetsComposablesRelatedToSun(sun) {
  return [
    new PlanetComposable(
      new PlanetSettings('Mars', sun.offsetX, sun.offsetY, sun.size * 2 + 80, 'red', 10, 1.2),
      new PlaneCircularMoveAlgorithm(),
      new PlanetSimpleRenderAlgorithm()
    ),
    new PlanetComposable(
      new PlanetSettings('Earth', sun.offsetX, sun.offsetY, sun.size * 2 + 30, 'green', 15, 0.5),
      new PlaneCircularMoveAlgorithm(),
      new PlanetSimpleRenderAlgorithm()
    )];
}

window.addEventListener('keyup', (event) => {
  if (event.code === 'Space') { // 32 = Space
    planets.forEach((planet) => {
      if (planet.renderAlgorithm instanceof PlanetSquareRenderAlgorithm) {
        planet.renderAlgorithm = new PlanetSimpleRenderAlgorithm();
      } else {
        planet.renderAlgorithm = new PlanetSquareRenderAlgorithm();
      }
    })
  }
})

function Start() {
  setInterval(() => {
    // console.log('render');
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    
    sun.render(ctx);
  
    planets.forEach(planet => {
      planet.render(ctx);
      planet.move();
      if (planet.followers) {
        planet.followers.forEach(follower => {
          follower.offsetX = planet.offsetX + planet.x;
          follower.offsetY = planet.offsetY + planet.y;
          follower.render(ctx);
          follower.move();
        });
      }
    });
  }, 1000 / 60);
}