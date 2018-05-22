describe('ship with a crew', () => {
  let pilot, defender, gunner, aluminumFalcon;

  beforeEach(() => {
    pilot = new CrewMember('Pilot');
    defender = new CrewMember('Defender');
    gunner = new CrewMember('Gunner');
    aluminumFalcon = new Spaceship('Millenium Falcon', [pilot, defender, gunner], 5, 4);
  });

  describe('spaceship docked', () => {
    it('should return false for a ship with a crew', () => {
      expect(aluminumFalcon.docked).to.eq(false);
    });
  });

  describe('crew member with a currentShip', () => {
    it('a newly created spaceship should be an instance of a spaceship', () => {
      expect(pilot.currentShip).to.be.an('object');
      expect(pilot.currentShip).to.be.an.instanceOf(Spaceship);
      expect(pilot.currentShip.constructor).to.be.a('function');
    });

    it('should create the association between a crew member and ship', () => {
      expect(pilot.currentShip.shields).to.eq(4);
      expect(pilot.currentShip).to.have.own.property('name', 'Millenium Falcon');
      expect(pilot.currentShip.crew[0]).to.deep.eq(pilot);
      expect(pilot.currentShip.crew[1]).to.deep.eq(defender);
      expect(pilot.currentShip.crew[2]).to.deep.eq(gunner);
    });
  });

  describe('charge phasers', () => {
    it("it should set phasers to 'charged' when the gunner chargePhasers()", () => {
      pilot.chargePhasers();
      expect(aluminumFalcon.phasersCharge).to.match(/uncharged/i);

      gunner.chargePhasers();
      expect(aluminumFalcon.phasersCharge).to.match(/charged/i);
    });
  });

  describe('engage warp drive', () => {
    it("should set the spaceship's warp drive to 'engaged' when the pilot uses engageWarpDrive()", () => {
      defender.engageWarpDrive();
      expect(aluminumFalcon.warpDrive).to.match(/disengaged/i);

      pilot.engageWarpDrive();
      expect(aluminumFalcon.warpDrive).to.match(/engaged/i);
    });
  });

  describe('cloak', () => {
    it('should cloak the ship when a defender uses setsInvisibility()', () => {
      gunner.setsInvisibility();
      expect(aluminumFalcon.cloaked).to.eq(false);

      defender.setsInvisibility();
      expect(aluminumFalcon.cloaked).to.eq(true);
    });
  });
});
