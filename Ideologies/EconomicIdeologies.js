import BinaryTree from "../DataStructures/BinaryTree.js";
import Point from "../DataStructures/Point.js";

const ideologies = {
  "Lasssz-faire Capatilism": {
    name: "Laissez-faire Capitalism",
    score: 100,
    description:
      "This ideology emphasizes capitalist transactions between individuals where goods and services are privately commodified. " +
      "This ideology advocates for a complete disconnect from the government and economic sectors, no rules or regulations on the consensual exchange of capital. " +
      "Instead of government intervention, businesses are solely at the whim of consumers and competition gives way to desirable behaviours.",
  },
  Communalism: {
    name: "Communalism",
    score: -100,
    description:
      "This ideology seeks to completely eradicate the concepts of economic class structures, private ownership, and personal ownership. " +
      "Instead, all property is communally owned among a, usually a small, group of like-minded individuals. " +
      "Capital distribution is dictated by consensus and no individual has any ownership to exert over any material aspect of society.",
  },
};

const myTree = new BinaryTree("Economic ");

const allPoints = [];
for (let key in ideologies) {
  allPoints.push(
    new Point(
      ideologies[key].score,
      ideologies[key].name,
      ideologies[key].description
    )
  );
}

myTree.buildTree(allPoints);

export function searchEconomicIdeologies(values) {
  return myTree.findClosest(values);
}
