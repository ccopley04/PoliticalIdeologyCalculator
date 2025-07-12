import { GoogleGenerativeAI } from "@google/generative-ai";
import { getScore } from "./createSliders.js";
import { searchEconomicIdeologies } from "EconomicIdeologies";
import { searchForeignIdeologies } from "ForeignIdeologies";
import { searchGovernmentIdeologies } from "GovernmentIdeologies";

const calculateButton = document.getElementById("calculate");
const aiOutput = document.getElementById("aiOutput");

// WARNING: Storing API keys directly in client-side code is INSECURE for production.
const API_KEY = "AIzaSyB61E3oz5jQwABufrXxc4klURp7mOA2AVQ";

const genAI = new GoogleGenerativeAI(API_KEY);
const tempPrompt = "Hi There!";

let prompt = "";

function updatePrompt() {
  prompt =
    "Please return an ideology that includes aspects of " +
    searchEconomicIdeologies(getScore()[0]).name +
    ", " +
    searchForeignIdeologies(getScore()[1]).name +
    ", and " +
    searchGovernmentIdeologies(getScore()[2]).name +
    ". Do not mention any percieved " +
    "inconsistenties, get creative to include all three completely seriously. Additionally give it a three word name that includes a prefix on the first word and mimics " +
    "common ideologies. Make sure the name ends in the suffix -ism. Please give a description for this made up ideology with one sentence per entered ideology." +
    "Make sure the sentences are connected and do not reference this prompt, only the description." +
    "Include each ideology in some way. Reference each of thier ideas, without their name." +
    " Start the description with 'This ideology' and end each sentence with a new line." +
    " Do this in the format of {Ideology Name}: {Description}.";
}

async function generateContent() {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
  const result = await model.generateContent(prompt);
  const response = await result.response;
  aiOutput.textContent = response.text();
}

calculateButton.addEventListener("click", () => {
  aiOutput.textContent = "Loading...";
  updatePrompt();
  generateContent();
});
