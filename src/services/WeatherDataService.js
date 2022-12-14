import axiosconfig from "./axiosconfig";
// commented for you so you can access my API_KEY :-)
// const apiKey = process.env.REACT_APP_API_KEY;
const apiKey = "86aeeea346e9b2422bc8f039b080ca36";
//this function returns weather of current time
export const getWeatherData = (city) => {
  const url = `/weather?q=${city}&units=metric&appid=${apiKey}`;
  return axiosconfig(url);
};
//this function returns weather of your location in a 120 hours duration we just used 15 hours of that
export const getForcastData = (city) => {
  const url = `/forecast?q=${city}&units=metric&appid=${apiKey}`;
  return axiosconfig(url);
};

//converting time stamp to human date
export const formatToLocalTime = (d) => {
  let months = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "july",
    "August",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
};

//this function basically just put the icon code that is returned from api into this CDN path to show the actual icon
const showIcon = (code) => `http://openweathermap.org/img/wn/${code}@2x.png`;
export { showIcon };

//this function sets background based on weather
export const setBackground = (bg) => {
  let color = "";
  switch (bg) {
    case "Haze":
      color = "bg-secondary";
      break;
    case "Clear":
      color = "bg-warning";
      break;
    case "Clounds":
      color = "bg-secondary";
      break;
    case "Rain":
      color = "bg-primary";
      break;
    case "Snow":
      color = "bg-info";
      break;
    default:
      color = "bg-white";
  }
  return color;
};
//it is calculating the current time of your location based on timezone
export const getDate = (dt, timezone) => {
  const utc_seconds = parseInt(dt, 10) + parseInt(timezone, 10);
  const utc_milliseconds = utc_seconds * 1000;
  const local_date = new Date(utc_milliseconds).toUTCString();
  return local_date;
};
