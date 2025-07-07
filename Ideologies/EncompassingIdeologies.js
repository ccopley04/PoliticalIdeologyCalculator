import Tree from "../DataStructures/Tree.js";
import Point from "../DataStructures/Point.js";

const ideologies = {
  "Globalist Cyber-Fascism": {
    name: "Globalist Cyber-Fascism",
    economic: 100,
    foreign: 100,
    government: 100,
    social: 100,
    tech: 100,
    description:
      "This ideology promotes a global, totalitarian state which exerts authority through the loss of privacy. " +
      "The free market is encouraged through digital transactions and the, eventual, complete digitalization of human commerce. " +
      "The social system tends to be more traditional, with specific family structure and classes being prioritized on the global scale.",
  },
  "Communal Anarcho-Primitivism": {
    name: "Communal Anarcho-Primitivism",
    economic: -100,
    foreign: -100,
    government: -100,
    social: -100,
    tech: -100,
    description:
      " This ideology is hypothetically implemented in a small, primitive tribe which promotes a distributed form of wealth and power." +
      "There is no form of centralized authority or written laws, only general consensus guides norms." +
      "With limited technology and a lack of government, social and economic equality is ensured by the convictions of the citizens.",
  },
  "Traditionalist Post-Communism": {
    name: "Traditionalist Post-Communism",
    economic: -100,
    foreign: 100,
    government: 100,
    social: 100,
    tech: 100,
    description:
      "This ideology is a form of enforced distributed economy that is headed by a centralized, authoritarian regime." +
      "Alongside progressive economic advances, there are also advanced technological advancements and an allocation of public resources to research." +
      "The social system in place is akin to extreme conservatism that promotes specific religious or societal structures to maintain order and the power of the government.",
  },
  "Absolute Monarchism": {
    name: "Absolute Monarchism",
    economic: 10,
    foreign: 20,
    government: 100,
    social: 60,
    tech: 0,
    description:
      "This ideology envisions a country or region that is entirely controlled and maintained by a single ruler." +
      "The ruler is not bound by any constitution or power balance and instead acts in their own self interest." +
      "Commonly associated with traditionalism, the specifics of the social and economic systems are decided by the individual monarch.",
  },
  "Leftist Accelerationism": {
    name: "Leftist Accelerationism",
    economic: 80,
    foreign: 10,
    government: 10,
    social: -80,
    tech: 100,
    description:
      "This ideology falls under the accelerationist umbrella and advocates for the continued advancement of neoliberalism until an eventual collapse of capitalism." +
      "This ironically requires an intense promotion of technological and economic growth in the free market to pave the way for a post-capitalist utopia." +
      "Socially progressive while also utilizing globalization and free market capitalism to pursue a leftist state.",
  },
  "Right-Wing Accelerationism": {
    name: "Right-Wing Accelerationism",
    economic: 100,
    foreign: -10,
    government: 30,
    social: 90,
    tech: 80,
    description:
      "This ideology falls under the accelerationist umbrella and advocates for the complete collapse of liberal democracy by creating conflict and advancing technology." +
      "This would lead to undermining of the current globalist systems which would make way for a totalitarian state, usually a white ethno-state." +
      "The primary concerns of this ideology are social bigotry and technological advancement.",
  },
  "Acid Communism": {
    name: "Acid Communism",
    economic: -80,
    foreign: -40,
    government: -10,
    social: -100,
    tech: 0,
    description:
      "This ideology advocates for a communist, state less civilization with the methodology being inspired by substance abuse." +
      "Largely spiritual, this ideology uses psychedelics to grow closer to a class consciousness and perfect solution to dismantle current capitalist structures." +
      "This ideology is socially progressive and takes inspiration from the vaguely libertarian ideals of general hippy culture.",
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
      ideologies[key].name,
      ideologies[key].description
    )
  );
}

myTree.buildTree(allPoints);

export function searchIdeologies(values) {
  return myTree.findClosest(values);
}
