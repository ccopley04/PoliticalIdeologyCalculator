import Point from "./Point.js";

class Node {
  constructor(point, dimension, left = null, right = null) {
    this.point = point;
    this.dimension = dimension;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  constructor(num) {
    let origin = [];
    for (let i = 0; i < num; i++) {
      origin.push(0);
    }

    this.root = new Node(new Point(origin, "Centrism"), 0);
    this.dim = num;
  }

  buildTree(allPoints) {
    const recursive = (currentPoints, depth) => {
      if (currentPoints.length === 0) {
        return null;
      }

      const axis = depth % this.dim;

      currentPoints.sort((a, b) => a.coords[axis] - b.coords[axis]);

      const medianIndex = Math.floor(currentPoints.length / 2);

      const node = new Node(currentPoints[medianIndex], axis);

      node.left = recursive(currentPoints.slice(0, medianIndex), depth + 1);
      node.right = recursive(currentPoints.slice(medianIndex + 1), depth + 1);

      return node;
    };

    allPoints.push(this.root.point);
    allPoints.sort((a, b) => a.coords[0] - b.coords[0]);
    this.root.left = recursive(
      allPoints.slice(0, allPoints.indexOf(this.root)),
      1
    );
    this.root.right = recursive(
      allPoints.slice(allPoints.indexOf(this.root) + 1),
      1
    );
  }

  findClosest(goal) {
    if (!this.root) {
      return null;
    }

    let bestNode = this.root;
    let minDistance = this.root.point.distanceTo(goal);

    const searchRecursive = (node) => {
      if (!node) {
        return;
      }

      const newDistance = node.point.distanceTo(goal);
      if (minDistance > newDistance) {
        minDistance = newDistance;
        bestNode = node;
      }

      const axis = node.dimension;
      let goalValue = goal[axis];
      let medianValue = node.point.coords[axis];

      if (medianValue > goalValue) {
        searchRecursive(node.left);

        if (goalValue - medianValue < minDistance) {
          searchRecursive(node.right);
        }
      } else {
        searchRecursive(node.right);

        if (goalValue - medianValue < minDistance) {
          searchRecursive(node.left);
        }
      }
    };

    searchRecursive(this.root);
    return bestNode.point;
  }
}

export default Tree;
