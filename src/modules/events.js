import { weatherService } from './weatherService.js';
import { updateWeatherDisplay } from './domUpdate.js';

export function setupEventListeners() {
  const searchForm = document.getElementById('search-form');
  searchForm.addEventListener('submit', handleSearch);

  const unitToggle = document.getElementById('metric');
  unitToggle.addEventListener('change', handleUnitToggle);

  const refreshButton = document.getElementById('reload-btn');
  refreshButton.addEventListener('click', handleRefresh);
}

async function handleSearch(event) {
  event.preventDefault();
  const searchInput = document.getElementById('search-input');
  const location = searchInput.value;

  try {
    const weatherData = await weatherService.getWeatherData(location);
    updateWeatherDisplay(weatherData);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    
  }
}

function handleUnitToggle(event) {
  const isUS = event.target.checked;
  const units = isUS ? 'us' : 'metric';
  weatherService.setUnits(units);
 
  handleRefresh();
}

function handleRefresh() {
  const searchInput = document.getElementById('search-input');
  handleSearch({ preventDefault: () => {}, target: searchInput });
}