import Point from "./Point.js";

class Node {
  constructor(point, left = null, right = null) {
    this.point = point;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(title) {
    this.root = new Node(new Point(0, title + "Centrism"));
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
}

const myTree = new BinaryTree("");
myTree.buildTree([
  new Point(1, "", ""),
  new Point(2, "", ""),
  new Point(4, "", ""),
  new Point(-1, "", ""),
  new Point(-10, "", ""),
]);

console.log(myTree);
