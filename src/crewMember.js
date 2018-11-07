class CrewMember {
  constructor(position, currentShip = "Looking for a Rig") {
    this.position = position
    this.currentShip = currentShip
  }

  engageWarpDrive() {
    if(this.currentShip === "Looking for a Rig") {
      return "had no effect"
    } else if (this.position.toLowerCase() === 'pilot'){
      this.currentShip.warpDrive = this.currentShip.warpDrive === 'engaged' ? "disengaged" : 'engaged'
    }
  }

  setsInvisibility() {
    if(this.currentShip === "Looking for a Rig") {
      console.log(this.position)
      return "had no effect"
    } else if (this.position.toLowerCase() === 'defender'){
      this.currentShip.cloaked = true
    }
  }

  chargePhasers() {
    if(this.currentShip === "Looking for a Rig") {
      return "had no effect"
    } else if (this.position.toLowerCase() === 'gunner'){
      this.currentShip.phasersCharge = this.currentShip.phasersCharge === 'charged' ? 'uncharged' : 'charged'
    }
  }
}
