const app = document.getElementById('app');

const AMOUNT = 120;
const BLOCK_SIZE = 13;
const DIMENSION = 4;
const ROWS = DIMENSION * 2;

setInterval(() => GenerateMonsters(AMOUNT), 3000);
GenerateMonsters(AMOUNT);

function GenerateMonsters(amount) {
  app.innerHTML = '';
  // const variation = Math.random();
  for (let index = 0; index < amount; index++) {
    const monster = CreatePixelMonster(
      Math.random(),
      getRandomColor(),
      getRandomColor()
    );
    app.appendChild(monster);
  }
}

function getRandomColor() {
  return Math.floor(Math.random()*16777215).toString(16)
}

function CreatePixelMonster(variation = 0.5, color1 = 'black', color2 = 'white') {
  const container = document.createElement('div');
  container.style.display = 'inline-block';
  container.style.margin = '4px 4px';

  for (let i = 0; i < ROWS; i++) {
    const row = document.createElement('div');
    row.style.height = BLOCK_SIZE + 'px';

    const chances = [];

    for (let j = 0; j < DIMENSION; j++) {
      const chance = Math.random() > variation;
      const box = CreateBoxWithChance(chance, color1, color2);
      row.appendChild(box);
      chances.push(chance);
    }

    for (let j = DIMENSION; j > 0; j--) {
      const chance = chances[j - 1];
      const box = CreateBoxWithChance(chance, color1, color2);
      row.appendChild(box);
    }

    container.appendChild(row);
  }
  return container;
}

function CreateBoxWithChance(chance, color1, color2) {
  const box = document.createElement('div');
  box.style.width = box.style.height = BLOCK_SIZE + 'px';
  box.style.backgroundColor = chance ? color1 : color2;
  box.style.display = 'inline-block';
  return box;
}

