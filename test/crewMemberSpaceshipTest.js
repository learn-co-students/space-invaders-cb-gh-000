describe("ship with a crew", () => {
  let tristan, jon, katie, aluminumFalcon;

  beforeEach(() => {
    tristan = new CrewMember("Pilot");
    jon = new CrewMember("Defender");
    katie = new CrewMember("Gunner");
    aluminumFalcon = new Spaceship(
      "Millenium Falcon",
      [tristan, jon, katie],
      5,
      4
    );
  });

  describe("spaceship docked", () => {
    it("should return false for a ship with a crew", () => {
      expect(aluminumFalcon.docked).to.eq(false);
    });
  });

  describe("crew member with a currentShip", () => {
    it("should return an instance of a ship", () => {
      expect(tristan.currentShip).to.be.an("object");
      expect(tristan.currentShip.constructor).to.be.a("function");
      expect(tristan.currentShip.name).to.eq("Millenium Falcon");
    });
  });

  describe("spaceship charge phasers", () => {
    it("a crew member assigned to a ship should be able to charge phasers", () => {
      tristan.chargePhasers();
      expect(aluminumFalcon.phasersCharge).to.match(/uncharged/i);

      katie.chargePhasers();
      expect(aluminumFalcon.phasersCharge).to.match(/charged/i);
    });
  });
});

//   it("should charge its phasers when a gunner calls `chargePhasers`", function() {
//     tristan.chargePhasers();
//     expect(spaceship.phasersCharge).toBe("uncharged");
//     katie.chargePhasers();
//     expect(spaceship.phasersCharge).toBe("charged!");
//   });
//
//   it('should have its warp drive set to "engaged" only when the pilot uses `engageWarpDrive`', function() {
//     jon.engageWarpDrive();
//     expect(spaceship.warpDrive).toBe("disengaged");
//     tristan.engageWarpDrive();
//     expect(spaceship.warpDrive).toBe("engaged!");
//   });
//
//   it("should cloak when a defender `setsInvisibility`", function() {
//     katie.setsInvisibility();
//     expect(spaceship.cloaked).toBe(false);
//     jon.setsInvisibility();
//     expect(spaceship.cloaked).toBe(true);
//   });
//   // });
// });
