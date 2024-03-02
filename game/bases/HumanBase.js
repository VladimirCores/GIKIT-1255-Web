import Base from "../Base.js";

class HumanBase extends Base {
  constructor(graphics, unit, map, onUnitCreation) {
    this.super('Human Base', 2, graphics, unit, map, onUnitCreation);
  }
  createAndAppendUnit() {
    const unitClone = this.unit.cloneNode();
    unitClone.style.position = 'absolute';
    unitClone.style.border = 'solid 1px red';
    this.onUnitCreation(unitClone, this);
  }
}

export default HumanBase;