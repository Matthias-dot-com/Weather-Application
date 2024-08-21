export async function apiCall(){
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/london?key=J63FSDZHR5S7UK5NZE6TQSSPK`);
const data = await response.json()
}
