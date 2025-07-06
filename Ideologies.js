import Tree from "./Tree.js";
import Point from "./Point.js";

const ideologies = {
  "Globalist Cyber-Fascism": {
    name: "Globalist Cyber-Fascism",
    economic: 100,
    foreign: 100,
    government: 100,
    social: 100,
    tech: 100,
    description: "",
  },
  "Communal Anarcho-Primitivism": {
    name: "Communal Anarcho-Primitivism",
    economic: -100,
    foreign: -100,
    government: -100,
    social: -100,
    tech: -100,
    description: "",
  },
};

const myTree = new Tree(5);

const allPoints = [];
for (let key in ideologies) {
  allPoints.push(
    new Point(
      [
        ideologies[key].economic,
        ideologies[key].foreign,
        ideologies[key].government,
        ideologies[key].social,
        ideologies[key].tech,
      ],
      ideologies[key].name
    )
  );
}

myTree.buildTree(allPoints);

console.log(myTree.findClosest([20, -100, -100, 0, -100]));
