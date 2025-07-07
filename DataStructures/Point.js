class Point {
  coords;
  name = "";
  description = "";

  constructor(values, name, description) {
    this.coords = values;
    this.name = name;
    this.dim = values.length;
    this.description = description;
  }

  distanceTo(otherCoords) {
    let sum = 0;
    if (Array.isArray(this.coords)) {
      for (let i = 0; i < this.dim; i++) {
        sum += Math.pow(otherCoords[i] - this.coords[i], 2);
      }
    } else {
      sum += Math.pow(otherCoords - this.coords, 2);
    }

    return Math.sqrt(sum);
  }
}

export default Point;
