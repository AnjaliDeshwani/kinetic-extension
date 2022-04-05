import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = "4be93d969209c385ab372652dbc9ff70";

export const Weather = () => {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [weatherData, setWeatherData] = useState({
    city: "",
    temp: "",
    weatherIcon: "",
  });
  const getPosition = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
  };

  const getWeather = async (latitude, longitude) => {
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${API_KEY}`
      );

      setWeatherData({
        city: data.name,
        temp: Math.round(data.main.temp - 273.15),
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
    <div className="weather-section fx">
      <img
        src={`http://openweathermap.org/img/w/${weatherData.weatherIcon}.png`}
        alt="weather icon"
      />
      <div className="fx-col">
        <span>{weatherData.temp}°</span>
        <span>{weatherData.city}</span>
      </div>
    </div>
  );
};
