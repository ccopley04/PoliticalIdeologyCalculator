import { getScore } from "./createSliders.js";
import { searchIdeologies } from "./Ideologies/EncompassingIdeologies.js";
import { searchEconomicIdeologies } from "./Ideologies/EconomicIdeologies.js";
import { searchForeignIdeologies } from "./Ideologies/ForeignIdeologies.js";
import { searchGovernmentIdeologies } from "./Ideologies/GovernmentIdeologies.js";

const calculateButton = document.getElementById("calculate");
const economicResult = document.getElementById("economicPolicyResult");
const foreignResult = document.getElementById("foreignPolicyResult");
const governmentResult = document.getElementById("governmentPolicyResult");

calculateButton.addEventListener("click", () => {
  let currResult = searchEconomicIdeologies(getScore()[0]);
  economicResult.textContent = currResult.name + ": " + currResult.description;

  currResult = searchForeignIdeologies(getScore()[1]);
  foreignResult.textContent = currResult.name + ": " + currResult.description;

  currResult = searchGovernmentIdeologies(getScore()[2]);
  governmentResult.textContent =
    currResult.name + ": " + currResult.description;
});
