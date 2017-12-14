class CrewMember {
  constructor(position) {
    this.position = position;
    //default current ship
    this.currentShip = "Looking for a Rig";
  }

  engageWarpDrive() {
    return this.position === "Pilot" && this.currentShip !== "Looking for a Rig"
      ? (this.currentShip.warpDrive = "engaged")
      : "had no effect";
  }

  setsInvisibility() {
    return this.position === "Defender" &&
      this.currentShip !== "Looking for a Rig"
      ? (this.currentShip.cloaked = true)
      : "had no effect";
  }

  chargePhasers() {
    return this.position === "Gunner" &&
      this.currentShip !== "Looking for a Rig"
      ? (this.currentShip.phasersCharge = "charged")
      : "had no effect";
  }
}
