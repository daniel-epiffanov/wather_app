(this.webpackJsonpweather_app=this.webpackJsonpweather_app||[]).push([[0],{11:function(e,t,n){e.exports=n(18)},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(5),s=n.n(r),c=(n(16),n(1)),i=n.n(c),o=n(2),u=n(6),m=n(7),d=n(9),f=n(8),h=n(10);n(4);var p=function(e){var t=null;return e.country&&(t=e.country.toLowerCase()),l.a.createElement("div",{className:"mainInfo"},l.a.createElement("h2",null,e.city,", ",e.country),l.a.createElement("img",{src:"./flags/".concat(t,".png"),alt:"flag"}),l.a.createElement("div",{className:"temp"},l.a.createElement("div",null,l.a.createElement("h1",null,e.main_temp,"\xb0")),l.a.createElement("div",null,l.a.createElement("i",{className:"wi ".concat(e.weatherIcon)}))),l.a.createElement("div",{className:"additional"},l.a.createElement("h3",{className:"feels_like"},"\u041e\u0449\u0443\u0449\u0430\u0435\u0442\u0441\u044f ",e.feels_like,"\xb0"),l.a.createElement("h3",{className:"maxMin"},"\u041c\u0438\u043d ",e.min,"\xb0 \u041c\u0430\u043a\u0441 ",e.max,"\xb0"),l.a.createElement("h3",{className:"description"},e.description)))};var y=function(e){var t,n,a,r,s,c,i,o,u,m,d,f,h,p=null,y=function(l,s,c){var i=[];s&&(i=s.split(",")),i.push(l);for(var o=[],u=0;u<i.length;u++){var m=i[u];(!0===m.startsWith(e.inputValue)||m.includes(e.inputValue))&&o.push(m)}console.log("res >>>",o),console.log("numOfEl >>>",c),0===c?t=o[0]:1===c?n=o[0]:2===c?a=o[0]:3===c?r=o[0]:4===c&&(p=o[0]),console.log("records0 >>>",t),console.log("records1 >>>",n),console.log("records2 >>>",a),console.log("records3 >>>",r),console.log("records4 >>>",p)},b=null;switch(e.finalArr.length){case 1:s=e.finalArr[0].fields.name,c=e.finalArr[0].fields.alternate_names,y(s,c,0),n=null,a=null,r=null,p=null;break;case 2:s=e.finalArr[0].fields.name,c=e.finalArr[0].fields.alternate_names,y(s,c,0),i=e.finalArr[1].fields.name,o=e.finalArr[1].fields.alternate_names,y(i,o,1),a=null,r=null,p=null;break;case 3:s=e.finalArr[0].fields.name,c=e.finalArr[0].fields.alternate_names,y(s,c,0),i=e.finalArr[1].fields.name,o=e.finalArr[1].fields.alternate_names,y(i,o,1),u=e.finalArr[2].fields.name,m=e.finalArr[2].fields.alternate_names,y(u,m,2),r=null,p=null;break;case 4:s=e.finalArr[0].fields.name,c=e.finalArr[0].fields.alternate_names,y(s,c,0),i=e.finalArr[1].fields.name,o=e.finalArr[1].fields.alternate_names,y(i,o,1),u=e.finalArr[2].fields.name,m=e.finalArr[2].fields.alternate_names,y(u,m,2),d=e.finalArr[3].fields.name,f=e.finalArr[3].fields.alternate_names,y(d,f,3),p=null;break;case 5:s=e.finalArr[0].fields.name,c=e.finalArr[0].fields.alternate_names,y(s,c,0),i=e.finalArr[1].fields.name,o=e.finalArr[1].fields.alternate_names,y(i,o,1),u=e.finalArr[2].fields.name,m=e.finalArr[2].fields.alternate_names,y(u,m,2),d=e.finalArr[3].fields.name,f=e.finalArr[3].fields.alternate_names,y(d,f,3),h=e.finalArr[4].fields.name,b=e.finalArr[4].fields.alternate_names,y(h,b,4);break;default:t=null,n=null,a=null,r=null,p=null}return l.a.createElement("div",{className:"searchBox"},l.a.createElement("form",{onSubmit:e.loadWeather},l.a.createElement("button",{id:"inputBtn"},"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c"),l.a.createElement("input",{name:"searchBar",className:"searchBar",id:"searchBar",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u0433\u043e\u0440\u043e\u0434",onInput:e.searchLive,autoComplete:"off",onBlur:function(){setTimeout((function(){document.getElementById("searchTable").style.display="none"}),300)},maxLength:"20",onFocus:function(){document.getElementById("searchBar").value=""}})),l.a.createElement("table",{id:"searchTable"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,l.a.createElement("button",{id:"btn0",onClick:function(t){return e.clearInput(s,i,u,d,h,t)}},t))),l.a.createElement("tr",null,l.a.createElement("th",null,l.a.createElement("button",{id:"btn1",onClick:function(t){return e.clearInput(s,i,u,d,h,t)}},n))),l.a.createElement("tr",null,l.a.createElement("th",null,l.a.createElement("button",{id:"btn2",onClick:function(t){return e.clearInput(s,i,u,d,h,t)}},a))),l.a.createElement("tr",null,l.a.createElement("th",null,l.a.createElement("button",{id:"btn3",onClick:function(t){return e.clearInput(s,i,u,d,h,t)}},r))),l.a.createElement("tr",null,l.a.createElement("th",null,l.a.createElement("button",{id:"btn4",onClick:function(t){return e.clearInput(s,i,u,d,h,t)}},p))))))},b="d60e9c0fd732e63411be26d3282fe316",w=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(d.a)(this,Object(f.a)(t).call(this))).state={city:null,country:null,main_temp:null,feels_like:null,description:null,weatherIcon:null,max:null,min:null,finalArr:[],inputValue:null,NumbOfResults:0},e.clearInput=function(e,t,n,a,l,r){var s=document.getElementById("searchBar");s.value="","btn0"===r.target.id?s.value=e:"btn1"===r.target.id?s.value=t:"btn2"===r.target.id?s.value=n:"btn3"===r.target.id?s.value=a:"btn4"===r.target.id&&(s.value=l),document.getElementById("inputBtn").click(),console.log("Clear Input",e,t,n,a,l),console.log("event >>>",r.target.id),document.getElementById("searchTable").style.display="none"},e.searchLive=Object(o.a)(i.a.mark((function t(){var n,a,l,r,s,c,o,u,m;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=document.getElementById("searchBar").value,a=n.charAt(0).toUpperCase()+n.slice(1),l=document.getElementById("btn0"),r=document.getElementById("btn1"),s=document.getElementById("btn2"),c=document.getElementById("btn3"),o=document.getElementById("btn4"),t.next=9,fetch("https://data.opendatasoft.com/api/records/1.0/search/?dataset=geonames-all-cities-with-a-population-1000%40public&q=".concat(n,"&rows=5&facet=timezone&facet=country"));case 9:return u=t.sent,t.next=12,u.json();case 12:m=t.sent,console.log("response >>>>>>>>",m),n.length>2&&(e.setState({finalArr:m.records,inputValue:a,NumbOfResults:m.nhits}),""!==l.innerText||""!==r.innerText||""!==s.innerText||""!==c.innerText||""!==o.innerText?document.getElementById("searchTable").style.display="block":document.getElementById("searchTable").style.display="none",l.style.display="none",r.style.display="none",s.style.display="none",c.style.display="none",o.style.display="none",""!==l.innerText&&(l.style.display="block"),""!==r.innerText&&(r.style.display="block"),""!==s.innerText&&(s.style.display="block"),""!==c.innerText&&(c.style.display="block"),""!==o.innerText&&(o.style.display="block"));case 15:case"end":return t.stop()}}),t)}))),e.getWeather=function(){var t=Object(o.a)(i.a.mark((function t(n){var a,l,r,s,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),!(a=n.target.searchBar.value)){t.next=19;break}return t.next=5,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(a,"&appid=").concat(b,"&lang=ru"));case 5:return l=t.sent,t.next=8,l.json();case 8:return r=t.sent,t.next=11,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(a,"&appid=").concat(b,"&lang=ru"));case 11:return s=t.sent,t.next=14,s.json();case 14:c=t.sent,console.log(c),200===r.cod?(document.querySelector(".mainInfo").style.display="block",e.setState({city:r.name,country:r.sys.country,main_temp:e.calculateCulsius(r.main.temp),feels_like:e.calculateCulsius(r.main.feels_like),description:r.weather[0].description,max:e.calculateCulsius(r.main.temp_max),min:e.calculateCulsius(r.main.temp_min)}),e.getWeatherIcon(e.weatherIcon,r.weather[0].id)):alert("error, \u043d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0437\u0430\u043f\u0440\u043e\u0441"),t.next=20;break;case 19:alert("error, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0433\u043e\u0440\u043e\u0434");case 20:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.calculateCulsius=function(e){return Math.floor(e-273.15)},e.getWeatherIcon=function(t,n){switch(!0){case n>=200&&n<=232:e.setState({weatherIcon:e.weatherIcon.Thunderstorm});break;case n>=300&&n<=321:e.setState({weatherIcon:e.weatherIcon.Drizzle});break;case n>=500&&n<=531:e.setState({weatherIcon:e.weatherIcon.Rain});break;case n>=600&&n<=622:e.setState({weatherIcon:e.weatherIcon.Snow});break;case n>=701&&n<=781:e.setState({weatherIcon:e.weatherIcon.Atmosphere});break;case 800===n:e.setState({weatherIcon:e.weatherIcon.Clear});break;case n>=801&&n<=804:e.setState({weatherIcon:e.weatherIcon.Clouds})}},e.weatherIcon={Thunderstorm:"wi-thunderstorm",Drizzle:"wi-sleet",Rain:"wi-day-rain",Snow:"wi-snow",Atmosphere:"wi-fog",Clear:"wi-day-sunny",Clouds:"wi-day-fog"},e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"app"},l.a.createElement(y,{loadWeather:this.getWeather,searchLive:this.searchLive,finalArr:this.state.finalArr,inputValue:this.state.inputValue,clearInput:this.clearInput,NumbOfResults:this.state.NumbOfResults}),l.a.createElement(p,{city:this.state.city,country:this.state.country,main_temp:this.state.main_temp,feels_like:this.state.feels_like,description:this.state.description,weatherIcon:this.state.weatherIcon,max:this.state.max,min:this.state.min}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.d1b946f7.chunk.js.map