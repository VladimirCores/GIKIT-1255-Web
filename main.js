import Base from "./game/Base.js";
import HumanBase from "./game/bases/HumanBase.js";
import Utils from "./game/Utils.js";

const baseZealot = document.getElementById('base-zealot');
const baseHumans = document.getElementById('base-humans');
const unitZealot = document.getElementById('unit-zealot');
const unitMarine = document.getElementById('unit-marine');

const map = document.getElementById('map');

unitZealot.remove();
unitMarine.remove();

let selectUnit = null;
const units = [];

const zealotBase = new Base('Zealots Base', 10, baseZealot, unitZealot, map, onUnitCreation);
const humanBase = new HumanBase(baseHumans, unitMarine, map, onUnitCreation);

console.log('> zealotBase:', zealotBase.name);

document.onclick = (event) => {
  console.log('> document.onclick -> event:', event);
  if ([
    humanBase.graphics, 
    zealotBase.graphics
  ].includes(event.target)) return;
  if (selectUnit !== null) {
    selectUnit.style.left = event.clientX + 'px';
    selectUnit.style.top = event.clientY + 'px';
  }
}

function onUnitCreation(unit, base) {
  console.log('> onUnitCreation -> unit:', unit, base);
  unit.style.left = Utils.getCssPositionProperty(base.graphics, "left") + 'px';
  unit.style.top = Utils.getCssPositionProperty(base.graphics, "top") + Utils.getCssPositionProperty(base.graphics, "height") + 'px';
  this.map.appendChild(unit);
  unit.onclick = onSelectUnit;
  units.push(unit);
}

function onSelectUnit(event) {
  if (selectUnit !== null) {
    selectUnit.style.backgroundColor = '';
  }
  selectUnit = event.currentTarget;
  selectUnit.style.backgroundColor = 'green';
  event.stopPropagation();
}

