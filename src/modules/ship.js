class ship {
  constructor(name, length, start) {
    this.name = name
    this.start = start
    this.length = length 
    this.coordinates = []
    this.hits = 0
    this.sunk = false
  }


  getLength() {
    return this.length
  }

  checkHits() {
    this.hits++
    this.isSunk()
    return this.hits
  }
  isSunk() {
    if(this.hits === this.length) {
      this.sunk = true
    }
    return this.sunk
  }
  setCoordinates(i = 0) {
    if(this.coordinates.length === this.length) return this.coordinates
    else {
      this.coordinates.push(`${this.start + i}, 100`)
      return this.setCoordinates(i = i+1)
    }
  }
}

export default ship