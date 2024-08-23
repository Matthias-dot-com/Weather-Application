import { apiCall } from './api.js';
import { formatWeatherData } from './weatherData.js';

class WeatherService {
  constructor() {
    this.cachedData = null;
    this.lastFetchTime = null;
    this.cacheDuration = 10 * 60 * 1000; 
  }

  async getWeatherData(location) {
    if (this.isCacheValid(location)) {
      return this.cachedData;
    }

    try {
      const rawData = await apiCall(location, currentUnits);
      const formattedData = formatWeatherData(rawData);
      
      this.updateCache( formattedData);
      return formattedData;
    } catch (error) {
      console.error('Error in WeatherService:', error);
      throw error;
    }
  }

  isCacheValid(location) {
    if (!this.cachedData || this.cachedData.location.address !== location) {
      return false;
    }

    const currentTime = new Date().getTime();
    return currentTime - this.lastFetchTime < this.cacheDuration;
  }

  updateCache(data) {
    this.cachedData = data;
    this.lastFetchTime = new Date().getTime();
  }

  setUnits(units) {
    currentUnits = units;
  }
}

export let currentUnits = 'metric';
export const weatherService = new WeatherService();