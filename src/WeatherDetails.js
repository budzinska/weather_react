export default function WeatherDetails(props) {
  if (props.weather) {
    let imageUrl = `http://openweathermap.org/img/wn/${props.weather.icon}@2x.png`;
    return (
      <ul className="weatherList">
        <li>Temperature: {Math.round(props.weather.temperature)}&deg;C</li>
        <li>Description: {props.weather.description}</li>
        <li>Humidity: {props.weather.humidity}%</li>
        <li>Wind: {props.weather.wind} km/h</li>
        <li className="imageList">
          <img src={imageUrl} alt={props.weather.description} />
        </li>
      </ul>
    );
  } else {
    return "";
  }
}
