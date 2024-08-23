import { gif } from "./dom.js";
import {
  API_KEY,
  BASE_URL,
  GIF_API,
  GIF_BASE_URL,
} from "./config/configuration.js";

let condition = "overcast";
export async function apiCall(location, unit) {
  const url = `${BASE_URL}/${location}?unitGroup=${unit}&key=${API_KEY}&contentType=json`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `HTTP error! Status: ${response.status} ${response.statusText}`
      );
    }
    // condition = data.currentConditions.conditions;
    // await getGif();
    return response.json();
  } catch (error) {
    console.error("Error during API call:", error);
  }
}

let Url;
export async function getGif() {
  const url = ` ${GIF_BASE_URL}?api_key=${GIF_API}s=${condition}&weirdness=4`;
  try {
    const resp = await fetch(url);
    if (!resp.ok) {
      throw new Error(`Http Error! status: ${resp.status}, ${resp.statusText}`);
    }
    const response = await resp.json();
    Url = response.data.images.original.url;
    const img = document.createElement("img");

    img.src = Url;
    gif.innerHTML = "";
    gif.appendChild(img);
    console.log(response.data.url);
  } catch (error) {
    console.log("error during loading api call", error);
  }
}

export { Url };
