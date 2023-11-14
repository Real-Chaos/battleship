class ship {
  constructor(name, length) {
    this.name = name
    this.length = length 
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
}

console.log(new ship('carrier', 5))

export default ship