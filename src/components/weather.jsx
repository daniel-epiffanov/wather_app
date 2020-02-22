import React, { useState } from 'react';
import 'weather-icons/css/weather-icons.css';
// import Input from './input.jsx';


function Weather(props) {
    console.log('>>>', props);
    return (
          <div className="mainInfo">
                <h2>{props.city}, {props.country}</h2>
                <div className="temp">
                        <div>
                            <h1>{props.main_temp}&deg;</h1>
                            {/* <h3>Ощущается {props.feels_like}&deg;</h3><br/> */}
                        </div>
                        <div>
                            <i className={`wi ${props.weatherIcon}`}></i>
                            {/* <h3>{props.description}</h3> */}
                        </div>
                </div>
                <div className="additional">
                    <h3>Ощущается {props.feels_like}&deg;</h3><br/>
                    <h3>{props.description}</h3>
                </div>
          </div>
    );
}

export default Weather;
