import { getScore } from "./createSliders.js";
import { searchIdeologies } from "./Ideologies/EncompassingIdeologies.js";
import { searchEconomicIdeologies } from "./Ideologies/EconomicIdeologies.js";

const calculateButton = document.getElementById("calculate");
const economicResult = document.getElementById("economicResult");

calculateButton.addEventListener("click", () => {
  let currResult = searchEconomicIdeologies(getScore()[0]);
  economicResult.textContent = currResult.name + ": " + currResult.description;
});
