import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <h1>Weather Search Engine</h1>
      <h2>Hey! What's the weather in</h2>
      <Weather />
      <div className="footerLink">
        <a href="https://github.com/budzinska/weather_react">Open-source </a>
        code by Anna Budzińska
      </div>
    </div>
  );
}

export default App;
