(this.webpackJsonpweather_app=this.webpackJsonpweather_app||[]).push([[0],{11:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),s=a.n(c),o=(a(16),a(1)),i=a.n(o),l=a(5),u=a(6),m=a(7),h=a(9),p=a(8),w=a(10);a(3);var d=function(e){var t=null;return e.country&&(t=e.country.toLowerCase()),r.a.createElement("div",{className:"mainInfo"},r.a.createElement("h2",null,e.city,", ",e.country),r.a.createElement("img",{src:"./flags/".concat(t,".png")}),r.a.createElement("div",{className:"temp"},r.a.createElement("div",null,r.a.createElement("h1",null,e.main_temp,"\xb0")),r.a.createElement("div",null,r.a.createElement("i",{className:"wi ".concat(e.weatherIcon)}))),r.a.createElement("div",{className:"additional"},r.a.createElement("h3",{className:"feels_like"},"\u041e\u0449\u0443\u0449\u0430\u0435\u0442\u0441\u044f ",e.feels_like,"\xb0"),r.a.createElement("h3",{className:"maxMin"},"\u041c\u0438\u043d ",e.min,"\xb0 \u041c\u0430\u043a\u0441 ",e.max,"\xb0"),r.a.createElement("h3",{className:"description"},e.description)))};var f=function(e){return r.a.createElement("div",{className:"searchBox"},r.a.createElement("form",{onSubmit:e.loadWeather},r.a.createElement("input",{name:"searchBar",className:"searchBar",id:"searchBar",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u0433\u043e\u0440\u043e\u0434"}),r.a.createElement("button",null,"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c")))},y="d60e9c0fd732e63411be26d3282fe316",I=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(h.a)(this,Object(p.a)(t).call(this))).state={city:null,country:null,main_temp:null,feels_like:null,description:null,weatherIcon:null,max:null,min:null},e.getWeather=function(){var t=Object(l.a)(i.a.mark((function t(a){var n,r,c,s,o;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),n=a.target.searchBar.value,document.querySelector(".mainInfo").style.display="block",!n){t.next=20;break}return t.next=6,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(n,"&appid=").concat(y,"&lang=ru"));case 6:return r=t.sent,t.next=9,r.json();case 9:return c=t.sent,t.next=12,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(n,"&appid=").concat(y,"&lang=ru"));case 12:return s=t.sent,t.next=15,s.json();case 15:o=t.sent,console.log(o),200===c.cod?(console.log(c),e.setState({city:c.name,country:c.sys.country,main_temp:e.calculateCulsius(c.main.temp),feels_like:e.calculateCulsius(c.main.feels_like),description:c.weather[0].description,max:e.calculateCulsius(c.main.temp_max),min:e.calculateCulsius(c.main.temp_min)}),e.getWeatherIcon(e.weatherIcon,c.weather[0].id)):alert("error, \u043d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0437\u0430\u043f\u0440\u043e\u0441"),t.next=21;break;case 20:alert("error, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0433\u043e\u0440\u043e\u0434");case 21:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.calculateCulsius=function(e){return Math.floor(e-273.15)},e.getWeatherIcon=function(t,a){switch(!0){case a>=200&&a<=232:e.setState({weatherIcon:e.weatherIcon.Thunderstorm});break;case a>=300&&a<=321:e.setState({weatherIcon:e.weatherIcon.Drizzle});break;case a>=500&&a<=531:e.setState({weatherIcon:e.weatherIcon.Rain});break;case a>=600&&a<=622:e.setState({weatherIcon:e.weatherIcon.Snow});break;case a>=701&&a<=781:e.setState({weatherIcon:e.weatherIcon.Atmosphere});break;case 800===a:e.setState({weatherIcon:e.weatherIcon.Clear});break;case a>=801&&a<=804:e.setState({weatherIcon:e.weatherIcon.Clouds})}},e.weatherIcon={Thunderstorm:"wi-thunderstorm",Drizzle:"wi-sleet",Rain:"wi-day-rain",Snow:"wi-snow",Atmosphere:"wi-fog",Clear:"wi-day-sunny",Clouds:"wi-day-fog"},e}return Object(w.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement(f,{loadWeather:this.getWeather}),r.a.createElement(d,{city:this.state.city,country:this.state.country,main_temp:this.state.main_temp,feels_like:this.state.feels_like,description:this.state.description,weatherIcon:this.state.weatherIcon,max:this.state.max,min:this.state.min}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.deb9f5db.chunk.js.map