import React, {Component} from 'react';
import Weather from "./components/weather.jsx";
import Input from './components/input.jsx';

const api = {
  key: "d60e9c0fd732e63411be26d3282fe316"
}

class WeatherApp extends Component {
  state = {
    city: null,
    country: null,
    main_temp: null,
    feels_like: null,
    description: null,
    weatherIcon: null
  }
  constructor(){
    super();
    //this.getWeather();

    this.weatherIcon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-rain",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog",
    }
  }

  getWeather = async (event) => {
    event.preventDefault();
    const callAPI = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=ryazan,ru&appid=${api.key}`);
    const response = await callAPI.json();
    console.log(response);
    this.setState({
      city: response.name,
      country: response.sys.country,
      main_temp: this.calculateCulsius(response.main.temp),
      feels_like: this.calculateCulsius(response.main.feels_like),
      description: response.weather[0].description
    });

    this.getWeatherIcon(this.weatherIcon, response.weather[0].id);

  }

  calculateCulsius = (temp) => {
    let result = Math.floor(temp - 273.15);
    return result;
  }

  getWeatherIcon = (icons, rangeId) => {
    switch (true) {
      case rangeId>=200 && rangeId<=232:
        this.setState({weatherIcon:this.weatherIcon.Thunderstorm})
        break;
      case rangeId>=300 && rangeId<=321:
        this.setState({weatherIcon:this.weatherIcon.Drizzle})
        break;
      case rangeId>=500 && rangeId<=531:
        this.setState({weatherIcon:this.weatherIcon.Rain})
        break;
      case rangeId>=600 && rangeId<=622:
        this.setState({weatherIcon:this.weatherIcon.Snow})
        break;
      case rangeId>=701 && rangeId<=781:
        this.setState({weatherIcon:this.weatherIcon.Atmosphere})
        break;
      case rangeId === 800:
        this.setState({weatherIcon:this.weatherIcon.Clear})
        break;
      case rangeId >= 801 && rangeId <= 804:
          this.setState({weatherIcon:this.weatherIcon.Clouds})
          break;

      default:
        // this.setState({icon:this.weatherIcon.Clear})
        break;
    }
  }

  render() {
    return (
      <div className="app">
        <Input
        loadWeather={this.getWeather}/>

        <Weather
        city={this.state.city}
        country={this.state.country}
        main_temp={this.state.main_temp}
        feels_like={this.state.feels_like}
        description={this.state.description}
        weatherIcon={this.state.weatherIcon}
        />
      </div>
    );
  }
}
 
export default WeatherApp;
