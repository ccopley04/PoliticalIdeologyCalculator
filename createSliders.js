import { searchEconomicIdeologies } from "EconomicIdeologies";
import { searchForeignIdeologies } from "ForeignIdeologies";
import { searchGovernmentIdeologies } from "GovernmentIdeologies";
import { searchSocialIdeologies } from "SocialIdeologies";
import { searchTechIdeologies } from "TechIdeologies";

//Dictionary to hold all ideology values
let score = {};

//Retrieve needed HTML elements
const economicResult = document.getElementById("economicPolicyResult");
const foreignResult = document.getElementById("foreignPolicyResult");
const governmentResult = document.getElementById("governmentPolicyResult");
const socialResult = document.getElementById("socialPolicyResult");
const techResult = document.getElementById("techPolicyResult");

//Returns void but appends a new slider to the HTML document
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

//Retrieve the values of all sliders and save them to score
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

  currResult = searchTechIdeologies(getScore()[4]);
  techResult.textContent = currResult.name + ": " + currResult.description;
}

updateIdeologies();

//Create five sliders
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

//Return a list of the of the five ideology scores
export function getScore() {
  return [
    score.economicPolicy,
    score.foreignPolicy,
    score.governmentPolicy,
    score.socialPolicy,
    score.techPolicy,
  ];
}
