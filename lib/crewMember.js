// unique properties and methods go inside the constructor
function CrewMember (position) {
  this.position = position;
  this.currentShip = 'Looking for a Rig'; //the name of the ship
  this.spaceship; //we need a way to associate a spaceship with a crewmember
}

// shared properties (like constants) and shared methods go inside the prototype
CrewMember.prototype = {
  constructor: CrewMember,
  engageWarpDrive: function(){
    if (this.position === "Pilot" && this.spaceship !== undefined) {
      this.spaceship.warpDrive = "engaged!";
    }else{
      return "had no effect";
    }
  },
  setsInvisibility: function(){
    if (this.position === "Defender" && this.spaceship !== undefined) {
      this.spaceship.cloaked = true;
    }else{
      return "had no effect";
    }
  },
  chargePhasers: function(){
    if (this.position === "Gunner" && this.spaceship !== undefined) {
      this.spaceship.phasersCharge = "charged!";
    }else{
      return "had no effect";
    }
  }
};
