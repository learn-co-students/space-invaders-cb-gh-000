describe('space invaders', () => {
  describe('CrewMember', function() {
    let tristan, jon, katie
    beforeEach(function() {
      tristan = new CrewMember('Pilot')
      jon = new CrewMember('Defender')
      katie = new CrewMember('Gunner')
    })

    it('should know their position', function() {
      expect(tristan.position).toBe('Pilot')
      expect(jon.position).toBe('Defender')
      expect(katie.position).toBe('Gunner')
    })

    it('should should return "Looking for a Rig" if they aren\'t assigned to a ship', function() {
      expect(tristan.currentShip).toBe('Looking for a Rig')
    })

    it('should return "had no effect" when the crew member tries to use their special ability', function() {
      expect(tristan.engageWarpDrive()).toBe('had no effect')
      expect(jon.setsInvisibility()).toBe('had no effect')
      expect(katie.chargePhasers()).toBe('had no effect')
    })
  })

  describe('Spaceship', function() {
    var spaceship
    beforeEach(function() {
      spaceship = new Spaceship('The Krestel', [], 5, 4)
    })

    it('should know its own name', function() {
      expect(spaceship.name).toBe('The Krestel')
    })

    it('should have the correct number of phasers (5)', function() {
      expect(spaceship.phasers).toBe(5)
    })

    it('should have the correct layer of shields (4)', function() {
      expect(spaceship.shields).toBe(4)
    })

    it('should have its cloaking set to false by default', function() {
      expect(spaceship.cloaked).toBe(false)
    })

    it('should have its warp drive set to "disengaged" by default', function() {
      expect(spaceship.warpDrive).toBe('disengaged')
    })

    it('should be docked if it has no crew', function() {
      expect(spaceship.docked).toBe(true)
    })

    it('should have its `phasers` charge set to "uncharged" by default', function() {
      expect(spaceship.phasersCharge).toBe('uncharged')
    })
  })

  describe('Ship with a crew', function() {
    var tristan, jon, katie, spaceship
    beforeEach(function() {
      tristan = new CrewMember('Pilot')
      jon = new CrewMember('Defender')
      katie = new CrewMember('Gunner')
      spaceship = new Spaceship('The Krestel', [tristan, jon, katie], 5, 4)
    })

    it('`docked` should return false for ships with a crew', function() {
      expect(spaceship.docked).toBe(false)
    })

    it('a crew member should return their ship when `currentShip` is called on them', function() {
      expect(tristan.currentShip).toBe(spaceship)
      expect(tristan.currentShip.name).toBe('The Krestel')
    })

    it('should charge its phasers when a gunner calls `chargePhasers`', function() {
      tristan.chargePhasers()
      expect(spaceship.phasersCharge).toBe('uncharged')
      katie.chargePhasers()
      expect(spaceship.phasersCharge).toBe('charged!')
    })

    it('should have its warp drive set to "engaged" only when the pilot uses `engageWarpDrive`', function() {
      jon.engageWarpDrive()
      expect(spaceship.warpDrive).toBe('disengaged')
      tristan.engageWarpDrive()
      expect(spaceship.warpDrive).toBe('engaged!')
    })

    it('should cloak when a defender `setsInvisibility`', function() {
      katie.setsInvisibility()
      expect(spaceship.cloaked).toBe(false)
      jon.setsInvisibility()
      expect(spaceship.cloaked).toBe(true)
    })
  })
})
