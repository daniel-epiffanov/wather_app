import React from 'react';
import 'weather-icons/css/weather-icons.css';

function Input(props) {

    let records0, records1, records2, records3, records4 = null;

    const searchSelection = (name, alternate_names, numOfEl) => {
        let split_names = [];
        if (alternate_names) {
            split_names = alternate_names.split(",");   
        }
        split_names.push(name);

        // console.log('split_names >>>', split_names);
        let res = [];
        for (let index = 0; index < split_names.length; index++) {
            const element = split_names[index];
            if (element.startsWith(props.inputValue) === true) {
                res.push(element);
            }
        }
         console.log('res >>>', res);
         console.log('numOfEl >>>', numOfEl);

        if (numOfEl === 0) { records0 = res[0] }
        else if (numOfEl === 1)  {records1 = res[0]}
        else if (numOfEl === 2)  {records2 = res[0]}
        else if (numOfEl === 3)  {records3 = res[0]}
        else if (numOfEl === 4)  {records4 = res[0]}

         console.log('records0 >>>', records0);
         console.log('records1 >>>', records1);
         console.log('records2 >>>', records2);
         console.log('records3 >>>', records3);
         console.log('records4 >>>', records4);
    }

    let name0, alternate_names0, name1, alternate_names1, name2, alternate_names2, name3, alternate_names3, name4, alternate_names4 = null;
    switch (props.finalArr.length) {
        case 1:
            name0 = props.finalArr[0].fields.name;
            alternate_names0 = props.finalArr[0].fields.alternate_names;
            searchSelection(name0, alternate_names0, 0);
            records1 = null; records2 = null; records3 = null; records4 = null;
            break;
        case 2:
            name0 = props.finalArr[0].fields.name; alternate_names0 = props.finalArr[0].fields.alternate_names;
            searchSelection(name0, alternate_names0, 0);
            name1 = props.finalArr[1].fields.name; alternate_names1 = props.finalArr[1].fields.alternate_names;
            searchSelection(name1, alternate_names1, 1);
            records2 = null; records3 = null; records4 = null;
            break;
        case 3:
            name0 = props.finalArr[0].fields.name; alternate_names0 = props.finalArr[0].fields.alternate_names;
            searchSelection(name0, alternate_names0, 0);
            name1 = props.finalArr[1].fields.name; alternate_names1 = props.finalArr[1].fields.alternate_names;
            searchSelection(name1, alternate_names1, 1);
            name2 = props.finalArr[2].fields.name; alternate_names2 = props.finalArr[2].fields.alternate_names;
            searchSelection(name2, alternate_names2, 2);
            records3 = null;  records4 = null;
            break;
        case 4:
            name0 = props.finalArr[0].fields.name; alternate_names0 = props.finalArr[0].fields.alternate_names;
            searchSelection(name0, alternate_names0, 0);
            name1 = props.finalArr[1].fields.name; alternate_names1 = props.finalArr[1].fields.alternate_names;
            searchSelection(name1, alternate_names1, 1);
            name2 = props.finalArr[2].fields.name; alternate_names2 = props.finalArr[2].fields.alternate_names;
            searchSelection(name2, alternate_names2, 2);
            name3 = props.finalArr[3].fields.name; alternate_names3 = props.finalArr[3].fields.alternate_names;
            searchSelection(name3, alternate_names3, 3);
            records4 = null;
            break;
        case 5:
            name0 = props.finalArr[0].fields.name; alternate_names0 = props.finalArr[0].fields.alternate_names;
            searchSelection(name0, alternate_names0, 0);
            name1 = props.finalArr[1].fields.name; alternate_names1 = props.finalArr[1].fields.alternate_names;
            searchSelection(name1, alternate_names1, 1);
            name2 = props.finalArr[2].fields.name; alternate_names2 = props.finalArr[2].fields.alternate_names;
            searchSelection(name2, alternate_names2, 2);
            name3 = props.finalArr[3].fields.name; alternate_names3 = props.finalArr[3].fields.alternate_names;
            searchSelection(name3, alternate_names3, 3);
            name4 = props.finalArr[4].fields.name; alternate_names4 = props.finalArr[4].fields.alternate_names;
            searchSelection(name4, alternate_names4, 4);
            break;
    
        default:
            records0 = null; records1 = null; records2 = null; records3 = null; records4 = null;
            break;
    }
    let disableSearch = () => {
        setTimeout(() => {
            document.getElementById('searchTable').style.display = 'none';
        }, 300);
        // document.getElementById('searchTable').style.display = 'none';
    }
    return (
        <div className="searchBox">
            <form onSubmit={props.loadWeather}>
                <input name="searchBar"
                className="searchBar"
                id="searchBar"
                placeholder="Введите ваш город"
                onInput={props.searchLive}
                autoComplete="off"
                onBlur={disableSearch}
                ></input>
                <button id="inputBtn">Посмотреть</button>
            </form>
            <table id="searchTable">
                <tbody>
                    <tr>
                        <th>
                            <button id="btn0" onClick={(event)=>props.clearInput(name0, name1, name2, name3, name4, event)}>{records0}</button>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <button id="btn1" onClick={(event)=>props.clearInput(name0, name1, name2, name3, name4, event)}>{records1}</button>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <button id="btn2" onClick={(event)=>props.clearInput(name0, name1, name2, name3, name4, event)}>{records2}</button>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <button id="btn3" onClick={(event)=>props.clearInput(name0, name1, name2, name3, name4, event)}>{records3}</button>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <button id="btn4" onClick={(event)=>props.clearInput(name0, name1, name2, name3, name4, event)}>{records4}</button>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
    
export default Input;