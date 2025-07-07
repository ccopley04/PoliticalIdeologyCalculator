import { getScore } from "./createSliders.js";
import { searchIdeologies } from "./Ideologies/EncompassingIdeologies.js";

const calculateButton = document.getElementById("calculate");

calculateButton.addEventListener("click", () => {
  console.log(searchIdeologies(getScore()));
});
