describe("CrewMember", function() {
  beforeEach(function() {
    var tristan = new CrewMember("Pilot"),
        jon = new CrewMember("Defender"),
        katie = new CrewMember("Gunner");
  });

  it("should know their position", function() {
    expect(tristan.position).toBe("Pilot");
    expect(jon.position).toBe("Defender");
    expect(katie.position).toBe("Gunner");
  });

  it("should should return 'Looking for a Rig' if they aren't assigned to a ship", function() {
    expect(tristan.ship).toBe('Looking for a Rig');
  });

  it("should return 'had no effect' when the crewMember tries to use their special ability", function() {
    expect(tristan.engageWarpDrive()).toBe('had no effect');
    expect(jon.setsInvisibility()).toBe('had no effect');
    expect(katie.chargePhasers()).toBe('had no effect');    
  });
});

describe("Spaceship", function() {
  beforeEach(function() {
    var spaceship = new Spaceship([], 5, 4);
  });

  it("should have the correct number of phasers", function() {
    expect(spaceship.phasers).toBe(5);
  });

  it("should have the correct layer of shields", function() {
    expect(spaceship.phasers).toBe(5);
  });

  it("should have it's cloaking set to false by default", function() {
    expect(spaceship.cloaked).toBe(false);
  });

  it("should have it's warp drive set to 'disengaged' by default", function() {
    expect(spaceship.warpDrive).toBe("disengaged");
  });

  it("should be docked if it has no crew", function() {
    expect(spaceship.docked).toBe(true);
  });

  it("should have it's phasers' charge set to uncharged by default", function() {
    expect(spaceship.phasersCharge).toBe("uncharged");
  });
});

describe("Ship with a crew", function() {
  beforeEach(function() {
    var tristan = new CrewMember("Pilot"),
        jon = new CrewMember("Defender"),
        katie = new CrewMember("Gunner"),
        spaceship = new Spaceship([tristan, jon, katie], 5, 4);
  });

  it("should return false for docked with a crew", function() {
    expect(spaceship.docked).toBe(false);
  });

  it("should charge its phasers when a gunner calls `chargePhasers`", function() {
    tristan.chargePhasers();
    expect(spaceship.phasersCharge).toBe("uncharged");
    katie.chargePhasers();
    expect(spaceship.phasersCharge).toBe("charged!");
  });

  it("should have it's warp drive set to 'engaged' only by the pilot", function() {
    jon.engageWarpDrive();
    expect(spaceship.warpDrive).toBe("disengaged");
    tristan.engageWarpDrive();
    expect(spaceship.warpDrive).toBe("engaged!");
  });

  it("should cloak when a defender `setsInvisibility`", function() {
    katie.setsInvisibility();
    expect(spaceship.cloaked).toBe(false);
    jon.setsInvisibility();
    expect(spaceship.cloaked).toBe(true);
  });
  
});