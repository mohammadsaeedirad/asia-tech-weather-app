import axios from "axios";
//commented for you to access base url ;)
// const baseUrl = process.env.REACT_APP_BASE_URL;
const baseUrl = "https://api.openweathermap.org/data/2.5";

const axioscofig = (url) => {
  return axios({
    url: `${baseUrl}/${url}`,
    method: "GET",
  }).then((res) => res);
};
export default axioscofig;
