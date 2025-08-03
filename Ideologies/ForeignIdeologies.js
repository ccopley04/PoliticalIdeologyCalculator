import BinaryTree from "BinaryTree";
import Point from "Point";

//Define a dictionary with the current ideologies
const ideologies = {
  Autarkism: {
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
  Interventionism: {
    name: "Interventionism",
    score: 40,
    description:
      "This ideology advocates for a foreign policy that directly interacts with international conflicts in order to amass influence or resources. " +
      " Despite not being directly involved with said conflict, a country with this ideology may justify military or economic action to promote their interest, or the interest of their allies. " +
      "The exact motivations vary but this ideology often does not promote actual expansion of territories, instead seeks to gather resources or protect against perceived international threats.",
  },
  Isolationism: {
    name: "Isolationism",
    score: -70,
    description:
      "This ideology opposes foreign conflicts and skirmishes in favor of taking a stance of neutrality. " +
      "This ideology transcends militaristic non-interventionism and includes broader political and economic policies that promote self sufficiency and cultural preservation. " +
      "This ideology deters any active military conflicts, unless self defensive, and attempts to limit, but not eliminate, foreign trade and allyship.",
  },
};

//Define the starting Node
const myTree = new BinaryTree(
  "Foreign ",
  "This ideology does not hold strong beliefs in either direction.\n " +
    "In terms of response to external conflicts, this ideology does not hold strong convictions either way.\n " +
    "Instead, this ideology tries to blend international intervention and general self-interested isolationism."
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
export function searchForeignIdeologies(values) {
  return myTree.findClosest(values);
}
