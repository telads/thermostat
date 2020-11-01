class Airport {

  constructor() {
    this.planes = []
  }

  land (plane){
    this.planes.push(plane)
  }

  takeOff (plane){
    let index = this.planes.findIndex(plane)
    this.planes.splice(index)
  }

}
