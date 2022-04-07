import "./Weather.css";
import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = "4be93d969209c385ab372652dbc9ff70";

export const Weather = () => {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [weatherData, setWeatherData] = useState({
    lat: "",
    long: "",
    city: "",
    temp: "",
    max: "",
    min: "",
    humidity: "",
    feelsLike: "",
    description: "",
    weatherIcon: "",
  });
  const [modal, setModal] = useState(false);
  const getPosition = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
  };

  const showWeatherModal = () => {
    setModal(() => !modal);
  };

  const getWeather = async (latitude, longitude) => {
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${API_KEY}`
      );

      setWeatherData({
        city: data.name,
        temp: Math.round(data.main.temp - 273.15),
        max: Math.round(data.main.temp_max - 273.15),
        min: Math.round(data.main.temp_min - 273.15),
        humidity: data.main.humidity,
        feelsLike: Math.round(data.main.feels_like - 273.15),
        description: data.weather[0].description,
        weatherIcon: data.weather[0].icon,
      });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getPosition();
    getWeather(lat, long);
  }, [lat, long]);

  return (
    <div className="weather-section fx" onClick={showWeatherModal}>
      <img
        className="weather-icon"
        src={`http://openweathermap.org/img/w/${weatherData.weatherIcon}.png`}
        alt="weather icon"
      />
      <div className="fx-col">
        <span>{weatherData.temp}°</span>
        <span>{weatherData.city}</span>
      </div>
      {modal && (
        <div className="weather-modal fx-col fx-jc-center">
          <p className="weather-city weather-margin">{weatherData.city}</p>
          <p className="weather-desc weather-margin">
            {weatherData.description}
          </p>
          <div className="fx fx-jc-sb">
            <img
              className="weather-icon"
              src={`http://openweathermap.org/img/w/${weatherData.weatherIcon}.png`}
              alt="weather"
            />
            <p className="weather-temp">{weatherData.temp}°</p>
            <div className="">
              <p className="">Max: {weatherData.max}°</p>
              <p className="">Min: {weatherData.min}°</p>
            </div>
          </div>
          <p className="weather-margin">Feels like: {weatherData.feelsLike}°</p>
          <p className="weather-margin">Humidity: {weatherData.humidity}</p>
        </div>
      )}
    </div>
  );
};
