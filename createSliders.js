let score = {};

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

createSliderElement(
  "Economic Policy",
  "Communalism",
  "Market Liberalism",
  "economicPolicy"
);
createSliderElement(
  "Foreign Policy",
  "Isolationism",
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
  "Progressivism",
  "Traditionalism",
  "socialPolicy"
);
createSliderElement(
  "Technological Advances",
  "Transhumanism",
  "Primitivism",
  "techPolicy"
);

export function getScore() {
  return score;
}
