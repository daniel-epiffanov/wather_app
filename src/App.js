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
    weatherIcon: null,
    max: null,
    min: null,
    finalArr: [],
    inputValue: null,
    NumbOfResults: 0
  }
  constructor(){
    super();
    //this.getWeather();

    this.weatherIcon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-day-rain",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog",
    }
  }

  clearInput = (name0, name1, name2, name3, name4, event) => {
    let searchBar = document.getElementById('searchBar');
    searchBar.value = '';
    if (event.target.id === 'btn0') searchBar.value = name0
     else if (event.target.id === 'btn1') searchBar.value = name1
     else if (event.target.id === 'btn2') searchBar.value = name2
     else if (event.target.id === 'btn3') searchBar.value = name3
     else if (event.target.id === 'btn4') searchBar.value = name4

    let inputBtn = document.getElementById('inputBtn');
    inputBtn.click();

    console.log('Clear Input', name0, name1, name2, name3, name4);
    console.log('event >>>', event.target.id);
    //inputBtn
    document.getElementById('searchTable').style.display = 'none';
  }

  searchLive = async (event) => {
    let getValue = event.target.value;
    let value = getValue.charAt(0).toUpperCase() + getValue.slice(1);

    const callAPI = await fetch(`https://data.opendatasoft.com/api/records/1.0/search/?dataset=geonames-all-cities-with-a-population-1000%40public&q=${getValue}&rows=5&facet=timezone&facet=country`);
    const response = await callAPI.json();
    
    this.setState({
      finalArr: response.records,
      inputValue: value,
      NumbOfResults: response.nhits
    });
    
    console.log('NumbOfResults >>>>>>>>', this.state.NumbOfResults);

    if (this.state.NumbOfResults > 0) {
      document.getElementById('searchTable').style.display = 'block';
    } else{
      document.getElementById('searchTable').style.display = 'none';
    }

    let btn0 = document.getElementById('btn0').style;
    let btn1 = document.getElementById('btn1').style;
    let btn2 = document.getElementById('btn2').style;
    let btn3 = document.getElementById('btn3').style;
    let btn4 = document.getElementById('btn4').style;

    if (this.state.NumbOfResults === 1) {
      btn0.display = 'block';
      btn1.display = 'none';
      btn2.display = 'none';
      btn3.display = 'none';
      btn4.display = 'none';
    }
    else if (this.state.NumbOfResults === 2) {
      btn0.display = 'block';
      btn1.display = 'block';
      btn2.display = 'none';
      btn3.display = 'none';
      btn4.display = 'none';
    }
    else if (this.state.NumbOfResults === 3) {
      btn0.display = 'block';
      btn1.display = 'block';
      btn2.display = 'block';
      btn3.display = 'none';
      btn4.display = 'none';
    }
    else if (this.state.NumbOfResults === 4) {
      btn0.display = 'block';
      btn1.display = 'block';
      btn2.display = 'block';
      btn3.display = 'block';
      btn4.display = 'none';
    }
    else if (this.state.NumbOfResults >= 5 ) {
      btn0.display = 'block';
      btn1.display = 'block';
      btn2.display = 'block';
      btn3.display = 'block';
      btn4.display = 'block';
    }
  }

  getWeather = async (event) => {
    event.preventDefault();
    // console.log(event.target.searchBar.value);
    let cityAnCountry = event.target.searchBar.value;

    if (cityAnCountry) {
      const callAPI = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityAnCountry}&appid=${api.key}&lang=ru`);
      const response = await callAPI.json();

      const callAPI2 = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityAnCountry}&appid=${api.key}&lang=ru`);
      const response2 = await callAPI2.json();

      console.log(response2);

      if (response.cod === 200) {
        document.querySelector('.mainInfo').style.display = "block";
        this.setState({
          city: response.name,
          country: response.sys.country,
          main_temp: this.calculateCulsius(response.main.temp),
          feels_like: this.calculateCulsius(response.main.feels_like),
          description: response.weather[0].description,
          max: this.calculateCulsius(response.main.temp_max),
          min: this.calculateCulsius(response.main.temp_min)
        });
  
        this.getWeatherIcon(this.weatherIcon, response.weather[0].id);
      } else {
        alert('error, неверный запрос');
      }
    } else{
      alert('error, введите город');
    }

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
        loadWeather={this.getWeather}
        searchLive={this.searchLive}
        finalArr={this.state.finalArr}
        inputValue={this.state.inputValue}
        clearInput={this.clearInput}
        NumbOfResults={this.state.NumbOfResults} />

        <Weather
        city={this.state.city}
        country={this.state.country}
        main_temp={this.state.main_temp}
        feels_like={this.state.feels_like}
        description={this.state.description}
        weatherIcon={this.state.weatherIcon}
        max={this.state.max}
        min={this.state.min}
        />
      </div>
    );
  }
}
 
export default WeatherApp;
