import Point from "./Point.js";

class Node {
  constructor(point, left = null, right = null) {
    this.point = point;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(title, description) {
    this.root = new Node(new Point(0, title + "Centrism", description));
  }

  buildTree(allPoints) {
    const recursive = (currPoints) => {
      if (currPoints.length === 0) {
        return null;
      }

      currPoints.sort((a, b) => a.coords - b.coords);

      const medianIndex = Math.floor(currPoints.length / 2);

      const node = new Node(currPoints[medianIndex]);

      node.left = recursive(currPoints.slice(0, medianIndex));
      node.right = recursive(currPoints.slice(medianIndex + 1));

      return node;
    };

    allPoints.push(this.root.point);
    allPoints.sort((a, b) => a.coords - b.coords);
    this.root.left = recursive(
      allPoints.slice(0, allPoints.indexOf(this.root.point))
    );
    this.root.right = recursive(
      allPoints.slice(allPoints.indexOf(this.root.point) + 1)
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
      let goalValue = goal;
      let medianValue = node.point.coords;

      if (medianValue > goalValue) {
        searchRecursive(node.left);
      } else {
        searchRecursive(node.right);
      }
    };

    searchRecursive(this.root);
    return bestNode.point;
  }
}

export default BinaryTree;
