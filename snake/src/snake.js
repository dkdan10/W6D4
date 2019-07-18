const directions = ["N", "S", "E", "W"]

function plus(arr1, arr2) {
  return [arr1[0] + arr2[0], arr1[1] + arr2[1]]
}

function equals(arr1, arr2) {
  return [arr1[0] === arr2[0] && arr1[1] === arr2[1]]

}

function isOpposite(arr1, arr2) {

}

export default class Snake{
  constructor(){
    this.direction = "N";
    this.segments = [ [0,19] ];
    
  }

  move () {
    console.log(directions.indexOf(this.direction))
    switch (directions.indexOf(this.direction)) {
      case 0:
        this.segments = this.segments.map(el => {
          return [el[0],el[1] - 1]
        });
        break;
      case 1:
        this.segments = this.segments.map(el => {
          return [el[0], el[1] + 1]
        });
        break;
      case 2:
        this.segments = this.segments.map(el => {
          return [el[0] + 1, el[1]]
        });
        break;
      case 3:
        this.segments = this.segments.map(el => {
          return [el[0] - 1, el[1]]
        });
        break;
      default:
        console('Hit default... something aint right.')
        break;
    }
    console.log(this.segments)
  }
  turn (newDir) {
    if (directions.indexOf(newDir) !== -1) this.direction = newDir
  }
}