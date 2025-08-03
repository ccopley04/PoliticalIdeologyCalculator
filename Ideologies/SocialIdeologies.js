import BinaryTree from "BinaryTree";
import Point from "Point";

//Define a dictionary with the current ideologies
const ideologies = {
  "Social Progressivism": {
    name: "Social Progressivism",
    score: -100,
    description:
      "This ideology emphasizes the destruction of inequality and injustice through the removing standard social structures. " +
      "This ideology argues that traditional social hierarchy, such as gender inequality, racisms, or xenophobia, are baked into general society. " +
      "The pursuit of social equality would require the systemic reconstructing of societies' industries and establishments.",
  },
  Traditionalism: {
    name: "Traditionalism",
    score: 100,
    description:
      "This ideology pushes for an adherence to some sort of higher truth that informs social stability and structures enforced by the government. " +
      "This often references religious beliefs and describes hierarchical systems that promote certain ideals of existence, such as heterosexuality, marriage, or ethnocentrism. " +
      "This ideology posits that total equality and complete acceptance of individual independence would degrade society and have lasting negative effects.",
  },
};

//Define the starting Node
const myTree = new BinaryTree(
  "Social ",
  "This ideology lies in the exact center of social equality.\n " +
    "It does not have a strong allegiance to any traditional social or moral structure, while also not advocating for the dismantling of any existing social structures.\n " +
    "This ideology simply does not concern itself with social issues that may develop in society."
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
export function searchSocialIdeologies(values) {
  return myTree.findClosest(values);
}
