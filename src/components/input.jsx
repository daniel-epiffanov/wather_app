import React from 'react';
import 'weather-icons/css/weather-icons.css';

function Input(props) {

    let records0 = {res: null, country: null, name: null};
    let records1 = {res: null, country: null, name: null};
    let records2 = {res: null, country: null, name: null};
    let records3 = {res: null, country: null, name: null};
    let records4 = {res: null, country: null, name: null};

    const searchSelection = (name, alternate_names, country_code, numOfEl) => {
        let country_lc = country_code.toLowerCase();
        let split_names = [];
        if (alternate_names) split_names = alternate_names.split(",");
        split_names.push(name);

        let res = [];
        for (let i = 0; i < split_names.length; i++) {
            const element = split_names[i];
            if (element.startsWith(props.inputValue) === true || element.includes(props.inputValue)) {
                res.push(element);
            }
        }

        if (numOfEl === 0) records0 = { res: res[0], country: country_lc, name:name}
        else if (numOfEl === 1) records1 = { res: res[0], country: country_lc, name:name}
        else if (numOfEl === 2) records2 = { res: res[0], country: country_lc, name:name}
        else if (numOfEl === 3) records3 = { res: res[0], country: country_lc, name:name}
        else if (numOfEl === 4) records4 = { res: res[0], country: country_lc, name:name}
    }
    const rec = (num) => {
        let name = props.searchResults[num].fields.name;
        let alternate_names = props.searchResults[num].fields.alternate_names;
        let country = props.searchResults[num].fields.country_code;
        let res = { name, alternate_names, country}
        return res;
    }
    let input0 = () => { let res = rec(0); searchSelection(res.name, res.alternate_names, res.country, 0);}
    let input1 = () => { let res = rec(1); searchSelection(res.name, res.alternate_names, res.country, 1);}
    let input2 = () => { let res = rec(2); searchSelection(res.name, res.alternate_names, res.country, 2);}
    let input3 = () => { let res = rec(3); searchSelection(res.name, res.alternate_names, res.country, 3);}
    let input4 = () => { let res = rec(4); searchSelection(res.name, res.alternate_names, res.country, 4); }

    switch (props.searchResults.length) {
        case 1:
            input0();
            records1 = null; records2 = null; records3 = null; records4 = null;
            break;
        case 2:
            input0(); input1();
            records2 = null; records3 = null; records4 = null;
            break;
        case 3:
            input0(); input1(); input2();
            records3 = null;  records4 = null;
            break;
        case 4:
            input0(); input1(); input2(); input3();
            records4 = null;
            break;
        case 5:
            input0(); input1(); input2(); input3(); input4();
            break;

        default:
            records0.res = null; records1.res = null; records2.res = null; records3.res = null; records4.res = null;
            break;
    }


    const disableSearch = () => {
       setTimeout(() => {
           document.getElementById('searchTable').style.display = 'none';
       }, 300);
    }
    return (
    <div className="searchBox">
        <form onSubmit={props.loadWeather} id="move">
            <button id="inputBtn">Посмотреть</button>
            <input name="searchBar"
            className="searchBar"
            id="searchBar"
            placeholder="Введите ваш город"
            onInput={props.searchLive}
            autoComplete="off"
            onBlur={disableSearch}
            maxLength="20"
            onFocus={() => {document.getElementById('searchBar').value='';}}
            ></input>
            
        </form>
        <table id="searchTable"><tbody>
            <tr><th>
                <button
                id="btn0"
                onClick={()=>props.clearInput(records0.name, records0.country)}>
                    {records0.res}
                    <img className="searchBtn" src={`./flags/${records0.country}.png`} alt="flag" />
                </button>
            </th></tr>
            <tr><th>
                <button
                id="btn1"
                onClick={()=>props.clearInput(records1.name, records1.country)}>
                    {records1.res}
                    <img className="searchBtn" src={`./flags/${records1.country}.png`} alt="flag" />
                </button>
            </th></tr>
            <tr><th>
                <button
                id="btn2"
                onClick={()=>props.clearInput(records2.name, records2.country)}>
                    {records2.res}
                    <img className="searchBtn" src={`./flags/${records2.country}.png`} alt="flag" />
                </button>
            </th></tr>
            <tr><th>
                <button
                id="btn3"
                onClick={()=>props.clearInput(records3.name, records3.country)}>
                    {records3.res}
                    <img className="searchBtn" src={`./flags/${records3.country}.png`} alt="flag" />
                </button>
            </th></tr>
            <tr><th>
                <button
                id="btn4"
                onClick={()=>props.clearInput(records4.name, records4.country)}>
                    {records4.res}
                    <img className="searchBtn" src={`./flags/${records4.country}.png`} alt="flag" />
                </button>
            </th></tr>
        </tbody></table>
    </div>
    );
}

export default Input;