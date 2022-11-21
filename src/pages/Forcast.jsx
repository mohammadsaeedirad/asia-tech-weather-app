import { showIcon } from "services/WeatherDataService";
import Accordion from "components/Accordion";

const Forcast = (data) => {
  const { list } = data.data.data;
  const forcasts = [...list.slice(0, 6)];
  //this function returns timestamp to hour AM/PM
  const setHour = (d) => {
    let mydate = new Date(d);
    let hour = mydate.getHours();
    let ampm = "";
    if (hour > 12) {
      ampm = "pm";
    } else ampm = "am";
    return (
      <p>
        {hour} {ampm}
      </p>
    );
  };

  return (
    <div className=' col-lg-6 col-12'>
      <div className='wrapper'>
        {forcasts.map((item, i) => {
          return (
            <Accordion key={i} title={setHour(item.dt_txt)}>
              <div className='d-flex flex-column flex-sm-row'>
                <div className=' d-flex flex-row'>
                  <div className=''>
                    <img
                      className='w-20 h-20'
                      src={showIcon(item.weather[0].icon)}
                      alt={item.weather[0].description}
                    />
                  </div>

                  <div className='d-flex flex-column'>
                    <p>
                      temp:
                      <span className='fs-4'>
                        {Math.round(item.main.temp)}
                      </span>{" "}
                      C
                    </p>
                    <p>{item.weather[0].description}</p>
                  </div>
                </div>

                <div className='mx-3'>
                  <p>
                    Feels like:
                    <span className='fs-4'>
                      {Math.round(item.main.feels_like)}
                    </span>{" "}
                    C
                  </p>
                  <p>
                    Humidity:
                    {Math.round(item.main.humidity)} C
                  </p>
                </div>
              </div>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
};

export default Forcast;
