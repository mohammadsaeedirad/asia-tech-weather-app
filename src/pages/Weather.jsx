import React from "react";
import {
  formatToLocalTime,
  showIcon,
  setBackground,
} from "services/WeatherDataService";
const Weather = ({ data }) => {
  const { icon, description } = data.data.weather[0];
  const { name, main, wind } = data.data;
  //the current time
  const date = new Date();
  return (
    <>
      <div
        className={`row text-black rounded-2 my-4 ${setBackground(
          data.data.weather[0].main
        )}`}
      >
        <p className='fs-3 fw-bolder mt-4'>
          {name} | {data.data.sys.country}
        </p>
        <p className='fs-6'>{formatToLocalTime(date)}</p>
      </div>
      <div className='col-lg-6 col-12 my-4'>
        <div className='d-flex flex-row justify-content-around justify-content-md-start'>
          <div>
            <img src={showIcon(icon)} alt={description} />
          </div>
          <div>
            <p className='text-white pt-2'>
              Tempture: <span className='fs-2'>{Math.round(main.temp)}</span> C
            </p>
            <p className='text-white'>
              Feels like: {Math.round(main.feels_like)} C
            </p>
            <div className='d-flex flex-md-row flex-column justify-content-between '>
              <p className='text-white'>{data.data.weather[0].main}</p>
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-around justify-content-md-start fw-light flex-row align-items-center'>
          <p className='text-info '>
            Minimum tempture: {Math.round(main.temp_min)}C
          </p>
          <p className='text-warning px-4'>
            Maximum tempture: {Math.round(main.temp_max)}C
          </p>
        </div>
        <div className='d-flex justify-content-around justify-content-md-start fw-light flex-row align-items-center'>
          <p className='text-white '>Wind: {wind.speed}</p>
          <p className='text-white px-4'>Pressure: {main.pressure}</p>
          <p className='text-white'>Humidity: {main.humidity}</p>
        </div>
      </div>
    </>
  );
};
export default Weather;
