import { description,timezone,address } from "./dom.js";
export async function apiCall(location) {
  try {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=J63FSDZHR5S7UK5NZE6TQSSPK`);

    if (!response.ok) {
      // If the response status is not ok, throw an error with the status text
      throw new Error(`HTTP error! Status: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    description.innerHTML  = (data.description);
    timezone.innerHTML = data.timezone;
    address.innerHTML = data.address;
  } catch (error) {
    // Catch and log any errors that occur during the fetch or JSON parsing
    console.error("Error during API call:", error);
  }
}

