const logoImg = document.querySelector("#logo");
const reloadImg = document.querySelector("#reload");
const infoDiv = document.querySelector("#info");
const address = infoDiv.querySelector(".info-1 span");
const timezone = infoDiv.querySelector(".info-2 span");
const description = infoDiv.querySelector(".info-3 span");
const search = document.querySelector(".search");
const searchBtn = document.querySelector(".search-btn");
const gif = document.querySelector("#gif");
const currentWeatherDiv = document.querySelector("#current .Current");
const todayWeatherDiv = document.querySelector("#today .today");
const hourlyWeatherDiv = document.querySelector("#hourly .hourly");
const dailyWeatherDiv = document.querySelector("#daily .Daily");

export {
  logoImg,
  reloadImg,
  address,
  timezone,
  description,
  search,
  searchBtn,
  gif,
  currentWeatherDiv,
  todayWeatherDiv,
  hourlyWeatherDiv,
  dailyWeatherDiv,
};
