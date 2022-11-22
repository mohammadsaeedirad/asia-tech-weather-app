import { useEffect, useState } from "react";
import { getWeatherData, getForcastData } from "services/WeatherDataService";
import Input from "components/Input";
import Weather from "pages/Weather";
import Forcast from "pages/Forcast";
import Error from "components/Error";
import Loading from "components/Loading";
function App() {
  var refreshInterval = 30000;
  const [city, setCity] = useState("tehran");
  const [loading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState();
  const [forcastData, setForcastData] = useState();
  const [weatherDataError, setWeatherDataError] = useState();
  const [forcastDataError, setForcastDataError] = useState();
  function getData() {
    getForcastData(city)
      .then((res) => {
        setForcastData(res);
        setLoading(false);
      })
      .catch((err) => {
        setForcastDataError(err.message);
        setLoading(false);
      });
    getWeatherData(city)
      .then((res) => {
        setWeatherData(res);
        setLoading(false);
      })
      .catch((err) => {
        setWeatherDataError(err.message);
        setLoading(false);
      });
  }
  useEffect(() => {
    setLoading(true);
    getData();
  }, [city]);
  //refresh data every 5 minutes
  useEffect(() => {
    if (refreshInterval && refreshInterval > 0) {
      const interval = setInterval(getData, refreshInterval);
      return () => clearInterval(interval);
    }
  }, [refreshInterval]);
  if (loading) return <Loading />;
  return (
    <div className='vh-100'>
      <Input setCity={setCity} />
      <div>
        <div className='container'>
          <div className='row'>
            {weatherData ? (
              <Weather data={weatherData} />
            ) : (
              <Error error={weatherDataError} />
            )}
            {forcastData ? (
              <Forcast data={forcastData} />
            ) : (
              <Error error={forcastDataError} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
