import React, { useState } from 'react';
import 'weather-icons/css/weather-icons.css';

function Input(props) {
    
    return (
        <div className="searchBox">
            <form onSubmit={props.loadWeather}>
                <input name="searchBar"
                className="searchBar"
                id="searchBar"
                placeholder="Введите ваш город"></input>
                <button>Подтвердить</button>
            </form>
        </div>
    );
}
    
export default Input;