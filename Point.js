class Point {
  coords = [];
  name = "";

  constructor(values, name, dim) {
    this.coords = values;
    this.name = name;
    this.dim = values.length;
  }

  distanceTo(otherCoords) {
    let sum = 0;
    for (let i = 0; i < this.dim; i++) {
      sum += Math.pow(otherCoords[i] - this.coords[i], 2);
    }
    return Math.sqrt(sum);
  }
}

export default Point;
