import BinaryTree from "BinaryTree";
import Point from "Point";

const ideologies = {
  Isolationism: {
    name: "Autarkism",
    score: -100,
    description:
      "This ideology seeks to create a state of self sufficiency that is completely isolated from the global economy. " +
      "This includes ensuring an economy that does not interact with any other countries and avoiding any international conflicts. " +
      "This ideology often emphasizes a form of intellectual and cultural purity that is maintained by limiting the influence of other countries through harsh immigration policy and general isolationism.",
  },
  Imperialism: {
    name: "Imperialism",
    score: 100,
    description:
      "This ideology pursues a global position categorized by international power and authority through direct or indirect intervention. " +
      "This ideology pushes a country to pursue its interests by acquiring any necessary resources, whether by ignoring or subverting the sovereignty of other nations. " +
      "This can be through military conquest that expands the state’s landmass or, in other cases, through aggressive economic policy that prioritizes the nation’s leverage.",
  },
};

const myTree = new BinaryTree(
  "Foreign ",
  "This ideology does not hold strong beliefs in either direction.\n " +
    "In terms of response to external conflicts, this ideology does not hold strong convictions either way.\n " +
    "Instead, this ideology tries to blend international intervention and general self-interested isolationism."
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

export function searchForeignIdeologies(values) {
  return myTree.findClosest(values);
}
