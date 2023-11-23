let name = 'Vladimir';
const age = 36;
let logic = true; // false
logic = false;
console.log('-> start =', { name, age, logic });

let apple = {
  color: "Red",
  size: "Large",
  type: "Macintoch",
  year: 1998,
}

let apple2 = apple;
let appleSize = apple.size;
apple2.size = "Small";

console.log('-> apple =', appleSize, apple.size);

const fruits = ['apple', 'orange', 'pear', 'grape', 'kiwi'];

console.log('-> fruits =', fruits);
console.log('-> fruits 1 =', fruits[0]);
console.log('-> fruits.length =', fruits.length);

for (let index = 0; index < fruits.length; index++) {
  outputFruitsInDocument("You have fruit: ", index);
}

function outputFruitsInDocument(prefix, position) {
  const fruit = fruits[position];
  const text = prefix + fruit;
  console.log(text);
  const node = document.createElement('div');
  node.innerText = text;
  document.body.appendChild(node);
}