// Fourteen.jsx
import { useEffect, useState } from "react";
import "./Fourteen.css";

export default function Fourteen() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=ef92bfb45a296dee5d735dcd94717d09`
        )
          .then((response) => response.json())
          .then((data) => setWeather(data))
          .catch((error) => console.error("Error fetching weather data:", error));
      });
    }
  }, []); // Empty dependency array to run only once when the component mounts

  return (
    <div>
      {weather ? (
        <div>
          <h2>Current weather</h2>
          <p>Temperature: {weather.main.temp}</p>
          <p>Conditions: {weather.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading....</p>
      )}
    </div>
  );
}
