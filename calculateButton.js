import { getScore } from "./createSliders.js";
import { searchIdeologies } from "./Ideologies/EncompassingIdeologies.js";
import { searchEconomicIdeologies } from "./Ideologies/EconomicIdeologies.js";
import { searchForeignIdeologies } from "./Ideologies/ForeignIdeologies.js";
import { searchGovernmentIdeologies } from "./Ideologies/GovernmentIdeologies.js";
import { GoogleGenerativeAI } from "@google/generative-ai";

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
// WARNING: Storing API keys directly in client-side code is INSECURE for production.
const API_KEY = "AIzaSyB61E3oz5jQwABufrXxc4klURp7mOA2AVQ";

const genAI = new GoogleGenerativeAI(API_KEY);

async function generateContent() {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
  const prompt = "What are three words that start with c.";
  const result = await model.generateContent(prompt);
  const response = await result.response;
  console.log(response.text());
}

generateContent();
