import { getScore } from "./createSliders.js";

const calculateButton = document.getElementById("calculate");

calculateButton.addEventListener("click", () => console.log(getScore()));
