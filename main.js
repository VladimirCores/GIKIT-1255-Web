const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const RADIUS = 100;
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
}

const sun = new Planet('Sun', canvas.width / 2, canvas.height / 2, 0, 'yellow', 100, 0);

const planets = [
  new Planet('Earth', sun.offsetX, sun.offsetY, sun.size * 2 + 30, 'green', 15, 0.5, [
    new Planet('Moon', 0, 0, 25, '#ffcc00', 5, 1.2),
    new Planet('Moon2', 0, 0, 35, 'blue', 3, 1.4),
    new Planet('Moon2', 0, 0, 50, '#ff00cc', 3, 1.4)
  ]),
  new Planet('Mars', sun.offsetX, sun.offsetY, sun.size * 2 + 80, 'red', 10, 1.2),
];

setInterval(() => {
  console.log('render');

  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // RenderPlanet(sun);

  planets.forEach(planet => {
    // RenderPlanet(planet);
    MovePlanet(planet);
    planet.followers.forEach(follower => {
      follower.offsetX = planet.offsetX + planet.x;
      follower.offsetY = planet.offsetY + planet.y;
      RenderPlanet(follower);
      MovePlanet(follower);
    });
  });
}, 1000 / 60);

function MovePlanet(planet) {
  planet.x = planet.radius * Math.sin(planet.angle);
  planet.y = planet.radius * Math.cos(planet.angle);
  planet.angle += RAD_DELTA * planet.speed;
  if (planet.angle >= RAD_IN_CIRCLE) {
    planet.angle = 0;
  }
}

function RenderPlanet(planet) {
  ctx.beginPath();
  ctx.fillStyle = planet.color;
  ctx.arc(
    planet.offsetX + planet.x,
    planet.offsetY + planet.y,
    planet.size, 
    0, 
    2 * Math.PI
  );
  ctx.fill();
  ctx.closePath();
}