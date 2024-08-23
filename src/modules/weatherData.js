export function formatWeatherData(data){
    return {
        locInfo : formatWeatherInfo(data),
        currWeather: formatCurrentWeather(data),
        todayWeather : formatToday(data),
        hourlyWeather : formatHourly(data),
        dailyWeather : formatDaily(data),
    }
}

function formatWeatherInfo(data) {
  return {
    address: data.resolvedAddress,
    timezone: data.timezone,
    description: data.description,
    tzoffset : data.tzoffset,
  };
}

function formatCurrentWeather(data) {
  let current = data.currentConditions;
  return {
    temp: current.temp,
    feelslike: current.feelslike,
    humidity: current.humidity,
    windspeed: current.windspeed,
    precipprob: current.precipprob,
    uvindex: current.uvindex,
    visibility: current.visibility,
    conditions: current.conditions,
    icon: current.icon,
  };
}

function formatToday(data) {
  let today = data.days[0];
  return {
    sunrise: today.sunrise,
    sunset: today.sunset,
    precipitation: today.precip,
    uvIndex: today.uvindex,
    moonPhase: today.moonphase,
    cloudCover: today.cloudcover,
    highTemp: today.tempmax,
    lowTemp: today.tempmin,
  };
}

function formatHourly(data) {
  return data.days.map((day) => ({
    date: day.datetime,
    hours: day.hours.map((hour) => ({
      time: hour.datetime,
      temp: hour.temp,
      feelslike: hour.feelslike,
      humidity: hour.humidity,
      windspeed: hour.windspeed,
      precipprob: hour.precipprob,
      uvindex: hour.uvindex,
      visibility: hour.visibility,
      conditions: hour.conditions,
      icon: hour.icon,
    })),
  }));
}

function formatDaily(data) {
  const days = data.days;
  return days.map((day) => ({
    date: day.datetime,
    sunrise: day.sunrise,
    sunset: day.sunset,
    highTemp: day.tempmax,
    lowTemp: day.tempmin,
    feelsLikeMax: day.feelslikemax,
    feelsLikeMin: day.feelslikemin,
    temp: day.temp,
    uvIndex: day.uvindex,
    cloudCover: day.cloudcover,
    precipprob: day.precipprob,
    icon: day.icon,
  }));
}
