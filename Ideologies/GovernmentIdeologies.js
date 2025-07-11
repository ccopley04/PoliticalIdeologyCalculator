import BinaryTree from "BinaryTree";
import Point from "Point";

const ideologies = {
  Totalitarianism: {
    name: "Totalitarianism",
    score: 100,
    description:
      "This ideology forfeits all power over the populace to the authority of a single state that operates above consensus opinion and relies on the convictions of a group or single person. " +
      "Most aspects of citizens' lives, including private and professional life, is monitored and controlled by the government. " +
      "Any opposition to the centralized government, such as a protest or alternative political party, is suppressed through, often violent, force.",
  },
  Anarchism: {
    name: "Anarchism",
    score: -100,
    description:
      "This ideology seeks to eliminate any form of government or sovereign state and allow for unbridled individual freedoms. " +
      "Any form of hierarchy or power structure is removed and replaced with a state-less civilization that oftentimes includes some form of consensual associations. " +
      "This ideology argues that laws and regulations are unnecessary and a perfect society would rely on consensus and populace inclinations to achieve the optimal state.",
  },
};

const myTree = new BinaryTree(
  "Government ",
  "This ideology does not lean in either direction and instead opts for a blend of both ideas.\n " +
    "Neither advocating for particularly strong government, nor emphasizing individual liberties, this ideology does not make any assertions about how the government should be run.\n " +
    "This lukewarm ideology is barely an ideology since it has no strong opinions on how society should function."
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

export function searchGovernmentIdeologies(values) {
  return myTree.findClosest(values);
}
