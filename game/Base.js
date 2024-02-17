class Base {
  constructor(name, unitCreationDelaySec, graphics, unit, map, onUnitCreation) {
    this.name = name;
    this.unitCreationDelaySec = unitCreationDelaySec;
    this.graphics = graphics;
    this.unit = unit;
    this.map = map;
    this.canCreateUnit = true;
    this.onUnitCreation = onUnitCreation;
    const that = this;
    graphics.querySelector('.name').innerText = name;
    graphics.onclick = () => { 
      that.createUnitWhenPossibleWithDelay();
    };
    console.log('> Base -> constructor');
  }

  delayUnitCreation(timer, createUnitCallback) {
    this.canCreateUnit = false;
    const countdown = 100;
    setTimeout(() => { 
      this.canCreateUnit = true;
      createUnitCallback();
    }, timer);
    const intervalId = setInterval(() => {
      timer = timer - countdown;
      this.renderCoundDown(timer);
      if (timer <= 0) {
        clearInterval(intervalId);
        this.renderCoundDown(0);
      }
    }, countdown);
    this.renderCoundDown(timer);
  }

  renderCoundDown(timer) {
    this.graphics.querySelector('#countdown').innerText = timer;
  }

  createUnitWhenPossibleWithDelay() {
    console.log("> Base -> createUnitWhenPossibleWithDelay =", this.canCreateUnit);
    if (this.canCreateUnit) {
      this.delayUnitCreation(this.unitCreationDelaySec * 1000, () => {
        console.log('> Base -> delayUnitCreation -> callback');
        this.createAndAppendUnit();
      });
    } else {
      alert('Cant create unit - blocked!');
    }
  }

  createAndAppendUnit() {
    const unitClone = this.unit.cloneNode();
    unitClone.style.position = 'absolute';
    this.onUnitCreation(unitClone, this);
  }
}

export default Base;