class Spaceship {
  constructor(name, crew, phasers, shields, cloaked = false, warpDrive = 'disengaged', phasersCharge = 'uncharged') {
    this.name = name
    this.crew = crew
    if (this.crew.length < 1) {
      this.docked = true
    } else {
      this.docked = false
      this.setCrewMembers()
    }
    this.phasers = phasers
    this.shields = shields
    this.cloaked = cloaked
    this.warpDrive = warpDrive
    this.phasersCharge = phasersCharge
  }

  setCrewMembers() {
    this.crew.forEach(member => {
      member.currentShip = this
    });
  }
}
