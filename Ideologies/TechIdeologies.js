import BinaryTree from "BinaryTree";
import Point from "Point";

//Define a dictionary with the current ideologies
const ideologies = {
  Primitivism: {
    name: "Primitivism",
    score: -100,
    description:
      "This ideology seeks to solve society’s issues by returning to a deindustrialized era. " +
      "This includes decreasing technological advancements and minimizing the use of new scientific advancements, while returning to a hunter-gatherer society. " +
      "This return to simpler values gives way for a healthier society where citizens are in touch with their instinctual desires.",
  },
  Transhumanism: {
    name: "Transhumanism",
    score: 100,
    description:
      "This ideology posits that the human condition can be improved exponentially by the advancement of technology beyond many ethical or moral concerns. " +
      "This usually includes the altercation of the human body or mind, with the help of science, to usher in a post-human state. " +
      "This ideology advocates for this by funding technology and focusing on science to overcome shackles of humanity.",
  },
};

//Define the starting Node
const myTree = new BinaryTree(
  "Technological ",
  "This ideology does not make any claims about the positive or negative value of technological advancements.\n " +
    "Instead this ideology focuses on any other issues and considers the march of scientific progress on a case by case basis.n " +
    "It does not concern itself with the suppression nor the exaltation of humanity’s advancements."
);

//Create a list of Points from the defined dictionary
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

//Create the binary tree
myTree.buildTree(allPoints);

//Returns the closest ideology based on this binary tree
export function searchTechIdeologies(values) {
  return myTree.findClosest(values);
}
