import { getScore } from "./createSliders.js";
import { searchIdeologies } from "./Ideologies/EncompassingIdeologies.js";
import { searchEconomicIdeologies } from "./Ideologies/EconomicIdeologies.js";

const calculateButton = document.getElementById("calculate");

calculateButton.addEventListener("click", () => {
  console.log(searchIdeologies(getScore()));
  console.log(searchEconomicIdeologies(getScore()[0]));
});
