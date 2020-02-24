import React, {Component} from 'react';
import Weather from "./components/weather.jsx";
import Input from './components/input.jsx';

const key = "d60e9c0fd732e63411be26d3282fe316";


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
    searchResults: [],
    inputValue: null
  }
  constructor(){
    super();
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
  getElement = (value) => {
    let res = document.getElementById(value);
    return res
  }
  requestSities = async () => {
    let callAPI = await fetch(`https://data.opendatasoft.com/api/records/1.0/search/?dataset=geonames-all-cities-with-a-population-1000%40public&q=${this.getElement('searchBar').value}&rows=5&facet=timezone&facet=country`);
    let response = await callAPI.json();
    return response
  }

  clearInput = (name, country) => {
    this.getElement('searchBar').value = name + ", "+ country;
    this.getWeather(null, 'ATTEMPT 2yes');
    this.getElement('searchTable').style.display = 'none';
  }

  searchLive = async () => {
    let value = this.getElement('searchBar').value.charAt(0).toUpperCase() + this.getElement('searchBar').value.slice(1);
    let btn = {
      btn0: this.getElement('btn0'),
      btn1: this.getElement('btn1'),
      btn2: this.getElement('btn2'),
      btn3: this.getElement('btn3'),
      btn4: this.getElement('btn4')
    }
    let response = await this.requestSities();

    this.setState({
      searchResults: response.records,
      inputValue: value
    });

    if (btn.btn0.innerText !== "" || btn.btn1.innerText !== "" || btn.btn2.innerText !== "" || btn.btn3.innerText !== "" || btn.btn4.innerText !== "") {
      this.getElement('searchTable').style.display = 'block';
    } else this.getElement('searchTable').style.display = 'none';

    btn.btn0.style.display = 'none';
    btn.btn1.style.display = 'none';
    btn.btn2.style.display = 'none';
    btn.btn3.style.display = 'none';
    btn.btn4.style.display = 'none';

    if (btn.btn0.innerText !== "") btn.btn0.style.display = 'block';
    if (btn.btn1.innerText !== "") btn.btn1.style.display = 'block';
    if (btn.btn2.innerText !== "") btn.btn2.style.display = 'block';
    if (btn.btn3.innerText !== "") btn.btn3.style.display = 'block';
    if (btn.btn4.innerText !== "") btn.btn4.style.display = 'block';
  }

  getWeather = async (event) => {
    document.querySelector('#content').style.display = "none";
    document.querySelector('.mainInfo').style.display = "block";
    document.querySelector('#load').style.display = "block";

    if (event) event.preventDefault();

    this.getElement('searchTable').style.display = 'none';
    let searchBar = this.getElement('searchBar');
    let cityResponse = await this.requestSities();
    let requestWeather = async (whatRequest,request) => {
      let callAPI = await fetch(`https://api.openweathermap.org/data/2.5/weather?${whatRequest}=${request}&appid=${key}&lang=ru`);
      let response = await callAPI.json();
      return response;
    }
    let set = (city, country, main_temp, feels_like, description, max, min) => {
      this.setState({
        city: city,
        country: country,
        main_temp: main_temp,
        feels_like: feels_like,
        description: description,
        max: max,
        min: min
      });
    }
    let switchLoader = () => {
        document.querySelector('#load').style.display = "none";
        document.querySelector('#content').style.display = "block";
    }
    let hideAllContent = () => {
      document.querySelector('#content').style.display = "none";
      document.querySelector('.mainInfo').style.display = "none";
      document.querySelector('#load').style.display = "none";
    }

    if (searchBar.value !== "" && searchBar.value !== "error, введите город") {
      let response = await requestWeather("q", searchBar.value);
      searchBar.value = response.name;

      if (response.cod === 200) {
        set(response.name, response.sys.country, this.calculateCulsius(response.main.temp), this.calculateCulsius(response.main.feels_like), response.weather[0].description, this.calculateCulsius(response.main.temp_max), this.calculateCulsius(response.main.temp_min));
        this.getWeatherIcon(response.weather[0].id);
        switchLoader();
      }
      else if (cityResponse.nhits >= 1) {
        searchBar.value = `Загрузка`;
        response = await requestWeather("id", cityResponse.records[0].fields.geoname_id);
        if (response.cod === 200) {
            set(response.name, response.sys.country, this.calculateCulsius(response.main.temp), this.calculateCulsius(response.main.feels_like), response.weather[0].description, this.calculateCulsius(response.main.temp_max), this.calculateCulsius(response.main.temp_min));
            searchBar.value = `${response.name}`;
            switchLoader();
        }
        else if (cityResponse.nhits >= 1) {
            searchBar.value = `Загрузка`;
            let response3 = await requestWeather("q", cityResponse.records[0].fields.ascii_name);
            if (response3.cod === 200) {
              set(response3.name, response3.sys.country, this.calculateCulsius(response3.main.temp), this.calculateCulsius(response3.main.feels_like), response3.weather[0].description, this.calculateCulsius(response3.main.temp_max), this.calculateCulsius(response3.main.temp_min));
              searchBar.value = `${response3.name}`;
              switchLoader();
            }
            else{
              searchBar.value = `Ошибка код ${response3.cod} попробуте заново`;
              searchBar.blur();
              hideAllContent();
            }
        }
      } else{
        searchBar.value = `ошибка, введите другой город`;
        searchBar.blur();
        hideAllContent();
      }
    }
    else {
      searchBar.value = `ошибка, введите город`;
      hideAllContent();
    }
  }

  calculateCulsius = (temp) => {
    let result = Math.floor(temp - 273.15);
    return result;
  }

  getWeatherIcon = (rangeId) => {
    switch (true) {
      case rangeId>=200 && rangeId<=232:   this.setState({weatherIcon:this.weatherIcon.Thunderstorm})
        break;
      case rangeId>=300 && rangeId<=321:   this.setState({weatherIcon:this.weatherIcon.Drizzle})
        break;
      case rangeId>=500 && rangeId<=531:   this.setState({weatherIcon:this.weatherIcon.Rain})
        break;
      case rangeId>=600 && rangeId<=622:   this.setState({weatherIcon:this.weatherIcon.Snow})
        break;
      case rangeId>=701 && rangeId<=781:   this.setState({weatherIcon:this.weatherIcon.Atmosphere})
        break;
      case rangeId === 800:   this.setState({weatherIcon:this.weatherIcon.Clear})
        break;
      case rangeId >= 801 && rangeId <= 804:   this.setState({weatherIcon:this.weatherIcon.Clouds})
        break;

      default:
        break;
    }
  }

  render() {
    return (
      <div className="app">
        <Input
        loadWeather={this.getWeather}
        searchLive={this.searchLive}
        searchResults={this.state.searchResults}
        inputValue={this.state.inputValue}
        clearInput={this.clearInput} />

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
