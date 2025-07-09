import { getScore } from "./createSliders.js";
import { searchIdeologies } from "./Ideologies/EncompassingIdeologies.js";
import { searchEconomicIdeologies } from "./Ideologies/EconomicIdeologies.js";
import { searchForeignIdeologies } from "./Ideologies/ForeignIdeologies.js";

const calculateButton = document.getElementById("calculate");
const economicResult = document.getElementById("economicPolicyResult");
const foreignResult = document.getElementById("foreignPolicyResult");

calculateButton.addEventListener("click", () => {
  let currResult = searchEconomicIdeologies(getScore()[0]);
  economicResult.textContent = currResult.name + ": " + currResult.description;

  currResult = searchForeignIdeologies(getScore()[1]);
  foreignResult.textContent = currResult.name + ": " + currResult.description;
});
