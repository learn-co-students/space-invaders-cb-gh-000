// unique properties and methods go inside the constructor
class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name;
    this.crew = crew;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = 'disengaged';
    if (crew.length === 0) {
      this.docked = true;
    }else{
      this.docked = false;
    }
    this.phasersCharge = 'uncharged';
    this.notifyCrew();
  }

  notifyCrew(){
    // using an arrow function lexically
    // binds `this` to the context of this
    // instance of Spaceship, rather than
    // the context of the callback
    this.crew.forEach(crewMember => {
      crewMember.currentShip = this;
    });
  }
}
