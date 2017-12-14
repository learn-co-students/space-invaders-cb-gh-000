class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name;
    this.crew = crew;
    this.phasers = phasers;
    this.shields = shields;
    //default properties for new ship instances
    this.cloaked = false;
    this.warpDrive = "disengaged";
    this.phasersCharge = "uncharged";
    // 0 is a `falsey` value in JS
    crew.length ? (this.docked = false) : (this.docked = true);
    // we need each CrewMember instance to know about its current ship
    this.notifyCrew();
  }

  notifyCrew() {
    //`this` refers to the newly instantiated spaceship; using an arrow fn binds `this` inside the callback passed to forEach
    this.crew.forEach(crewMember => (crewMember.currentShip = this));
  }
}
