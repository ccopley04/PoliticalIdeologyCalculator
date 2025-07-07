import { getScore } from "./createSliders.js";
import { searchIdeologies } from "./Ideologies.js";

const calculateButton = document.getElementById("calculate");

calculateButton.addEventListener("click", () => {
  console.log(searchIdeologies(getScore()));
});
