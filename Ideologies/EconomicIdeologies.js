import BinaryTree from "BinaryTree";
import Point from "Point";

const ideologies = {
  "Lasssz-faire Capatilism": {
    name: "Laissez-faire Capitalism",
    score: 100,
    description:
      "This ideology emphasizes capitalist transactions between individuals where goods and services are privately commodified.\n " +
      "This ideology advocates for a complete disconnect from the government and economic sectors, no rules or regulations on the consensual exchange of capital.\n " +
      "Instead of government intervention, businesses are solely at the whim of consumers and competition gives way to desirable behaviours.",
  },
  Communalism: {
    name: "Communalism",
    score: -100,
    description:
      "This ideology seeks to completely eradicate the concepts of economic class structures, private ownership, and personal ownership.\n " +
      "Instead, all property is communally owned among a, usually a small, group of like-minded individuals.\n " +
      "Capital distribution is dictated by consensus and no individual has any ownership to exert over any material aspect of society.",
  },
};

const myTree = new BinaryTree(
  "Economic ",
  "This ideology does not hold strong beliefs in either direction.\n " +
    "It reflects a perfect balance between independent consumers having private control over the market versus a distributed economy.\n " +
    "Many would claim that this ideology does not count as a real ideology since it makes no assertions about how society should function."
);

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
