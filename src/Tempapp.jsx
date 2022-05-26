import React, { useEffect, useState } from "react";
import "./styles.css";
const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  useEffect(() => {
    const fetchapi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=7cc29f89536bc633f594d6c44295a6e8`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
    };
    fetchapi();
  }, [search]);

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type={"search"}
            className="inputField"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
        {!city ? (
          <p className="errorMsg">No Data Found</p>
        ) : (
          <div>
            <div className="info">
              <h1 className="location">
                <i className="fas fa-street-view"></i>
                {search}
              </h1>
              <h1 className="temp">{city.temp}°C</h1>
              <h3 className="tempmin_max">
                Min:{city.temp_min}°C | Max:{city.temp_max}°C
              </h3>
            </div>
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default Tempapp;
