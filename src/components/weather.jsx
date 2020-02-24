import React from 'react';
import 'weather-icons/css/weather-icons.css';

function Weather(props) {
    //console.log('>>>', props);
    let flag = null;
    if (props.country) {
        flag = props.country.toLowerCase();   
    }
    return (
        <div className="mainInfo">
            <div id="load">
                    <hr/><hr/><hr/><hr/>
            </div>
            <div id="content">
                <h2>{props.city}, {props.country}</h2>
                <img src={`./flags/${flag}.png`} alt="flag" />
                <div className="temp">
                        <div>
                            <h1>{props.main_temp}&deg;</h1>
                        </div>
                        <div>
                            <i className={`wi ${props.weatherIcon}`}></i>
                        </div>
                </div>
                <div className="additional">
                    <h3 className="feels_like">Ощущается {props.feels_like}&deg;</h3>
                    <h3 className="maxMin">Мин {props.min}&deg; Макс {props.max}&deg;</h3>
                    <h3 className="description">{props.description}</h3>
                </div>
            </div>
        </div>
    );
}

export default Weather;
