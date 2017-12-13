const expect = chai.expect;

describe("crewMember.js", () => {
  let tristan, jon, katie;
  beforeEach(() => {
    tristan = new CrewMember("Pilot");
    jon = new CrewMember("Defender");
    katie = new CrewMember("Gunner");
  });

  it("should know their position", () => {
    expect(tristan.position).to.eq("Pilot");
    expect(jon.position).to.eq("Defender");
    expect(katie.position).to.eq("Gunner");
  });

  it("should should return 'Looking for a Rig' if they aren't assigned to a ship", () => {
    expect(tristan.currentShip).to.eq("Looking for a Rig");
  });

  it("should return 'had no effect' when the crew member tries to use their special ability when not assigned to a ship", () => {
    expect(tristan.engageWarpDrive()).to.eq("had no effect");
    expect(jon.setsInvisibility()).to.eq("had no effect");
    expect(katie.chargePhasers()).to.eq("had no effect");
  });

  it("should be able to use special abilities when assigned to a ship", () => {});
});
