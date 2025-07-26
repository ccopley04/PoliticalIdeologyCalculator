import { GoogleGenerativeAI } from "@google/generative-ai";
import { getScore } from "./createSliders.js";
import { searchEconomicIdeologies } from "EconomicIdeologies";
import { searchForeignIdeologies } from "ForeignIdeologies";
import { searchGovernmentIdeologies } from "GovernmentIdeologies";
import { searchSocialIdeologies } from "SocialIdeologies";
import { searchTechIdeologies } from "TechIdeologies";
import { inStorage, writeToStorage } from "./storage.js";
import { API_KEY_SECRET } from "./secretHolder.js";

const calculateButton = document.getElementById("calculate");
const aiOutput = document.getElementById("aiOutput");

//This key is a free key supplied by Google for testing purposes.
//It only accepts calls from my domain and has limited usage
//It only exists for showcasing a prototype, not for actual deployment
const API_KEY = API_KEY_SECRET;
const genAI = new GoogleGenerativeAI(API_KEY);

let prompt = "";
const errormsg = "Error occured while fetching content. Please try again later";

//Define the prompt according to the scores of the axes
function updatePrompt() {
  prompt =
    "Please return an ideology that includes aspects of " +
    searchEconomicIdeologies(getScore()[0]).name +
    ", " +
    searchForeignIdeologies(getScore()[1]).name +
    ", " +
    searchTechIdeologies(getScore()[4]).name +
    ", " +
    searchSocialIdeologies(getScore()[3]).name +
    ", and " +
    searchGovernmentIdeologies(getScore()[2]).name +
    ". Do not mention any percieved " +
    "inconsistenties, get creative to include all five completely seriously. Additionally give it a three word name that includes a prefix on the first word and mimics " +
    "common ideologies. Make sure the name ends in the suffix -ism. Please give a description for this made up ideology with one sentence per entered ideology." +
    "Make sure the sentences are connected and do not reference this prompt, only the description." +
    "Include each ideology in some way. Reference each of thier ideas, without their name." +
    " Start the description with 'This ideology' and end each sentence with a new line." +
    " Do this in the format of {Ideology Name}: {Description}.";
}

//Call the Gemini API to generate an all-encompassing ideology
async function generateContent() {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    return errormsg;
  }
}

//When the calculate button is clicked, call the AI API
calculateButton.addEventListener("click", () => {
  aiOutput.textContent = "Loading...";
  let key =
    searchEconomicIdeologies(getScore()[0]).name +
    "" +
    searchForeignIdeologies(getScore()[1]).name +
    "" +
    searchTechIdeologies(getScore()[4]).name +
    "" +
    searchSocialIdeologies(getScore()[3]).name +
    "" +
    searchGovernmentIdeologies(getScore()[2]).name;
  updatePrompt();

  if (inStorage(key) === "none") {
    try {
      generateContent().then((result) => {
        aiOutput.textContent = result;
        if (result != errormsg) {
          writeToStorage(key, aiOutput.textContent);
        }
      });
    } catch (error) {
      aiOutput.textContent =
        "Error occured while fetching content. Please try again later.";
    }
  } else {
    setTimeout(() => {
      aiOutput.textContent = inStorage(key);
    }, 1500);
  }

  console.log(localStorage);
});
