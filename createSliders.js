import { searchEconomicIdeologies } from "EconomicIdeologies";
import { searchForeignIdeologies } from "ForeignIdeologies";
import { searchGovernmentIdeologies } from "GovernmentIdeologies";
import { searchSocialIdeologies } from "SocialIdeologies";

let score = {};

const economicResult = document.getElementById("economicPolicyResult");
const foreignResult = document.getElementById("foreignPolicyResult");
const governmentResult = document.getElementById("governmentPolicyResult");
const socialResult = document.getElementById("socialPolicyResult");

function createSliderElement(title, leftTagText, rightTagText, sliderId) {
  let newComponent = document.createElement("div");
  newComponent.className = "container";

  let newHeading = document.createElement("div");
  newHeading.className = "center";

  let headingName = document.createElement("h2");
  headingName.textContent = title;

  let newSliderContainer = document.createElement("div");
  newSliderContainer.className = "sliderContainer";

  let rightTag = document.createElement("span");
  rightTag.className = "slider-label right";
  rightTag.textContent = rightTagText;

  let leftTag = document.createElement("span");
  leftTag.className = "slider-label left";
  leftTag.textContent = leftTagText;

  let newSlider = document.createElement("input");
  const sliderAttributes = {
    type: "range",
    min: "-100",
    max: "100",
    value: "0",
    class: "slider",
    id: sliderId,
  };

  score[sliderId] = newSlider.value === "" ? "0" : newSlider.value;
  newSlider.oninput = () => {
    score[sliderId] = newSlider.value === "" ? "0" : newSlider.value;
    updateIdeologies();
  };

  for (const key in sliderAttributes) {
    newSlider.setAttribute(key, sliderAttributes[key]);
  }

  newSliderContainer.appendChild(leftTag);
  newSliderContainer.appendChild(rightTag);
  newSliderContainer.appendChild(newSlider);

  newHeading.appendChild(headingName);
  newComponent.appendChild(newHeading);

  newComponent.appendChild(newSliderContainer);

  document.getElementById("all-sliders").appendChild(newComponent);
}

function updateIdeologies() {
  let currResult = searchEconomicIdeologies(getScore()[0]);
  economicResult.textContent = currResult.name + ": " + currResult.description;

  currResult = searchForeignIdeologies(getScore()[1]);
  foreignResult.textContent = currResult.name + ": " + currResult.description;

  currResult = searchGovernmentIdeologies(getScore()[2]);
  governmentResult.textContent =
    currResult.name + ": " + currResult.description;

  currResult = searchSocialIdeologies(getScore()[3]);
  socialResult.textContent = currResult.name + ": " + currResult.description;
}

updateIdeologies();

createSliderElement(
  "Economic Policy",
  "Communalism",
  "Laissez-faire Capitalism",
  "economicPolicy"
);
createSliderElement(
  "Foreign Policy",
  "Autarkism",
  "Imperialism",
  "foreignPolicy"
);
createSliderElement(
  "Government Control",
  "Anarchism",
  "Totalitarianism ",
  "governmentPolicy"
);
createSliderElement(
  "Social Structure",
  "Social Progressivism",
  "Traditionalism",
  "socialPolicy"
);
createSliderElement(
  "Technological Advances",
  "Primitivism",
  "Transhumanism",
  "techPolicy"
);

export function getScore() {
  return [
    score.economicPolicy,
    score.foreignPolicy,
    score.governmentPolicy,
    score.socialPolicy,
    score.techPolicy,
  ];
}
