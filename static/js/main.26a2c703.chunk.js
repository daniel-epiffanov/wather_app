(this.webpackJsonpweather_app=this.webpackJsonpweather_app||[]).push([[0],{11:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(5),s=a.n(r),c=(a(16),a(1)),i=a.n(c),o=a(2),u=a(6),m=a(7),d=a(9),f=a(8),p=a(10);a(4);var h=function(e){var t=null;return e.country&&(t=e.country.toLowerCase()),l.a.createElement("div",{className:"mainInfo"},l.a.createElement("h2",null,e.city,", ",e.country),l.a.createElement("img",{src:"./flags/".concat(t,".png"),alt:"flag"}),l.a.createElement("div",{className:"temp"},l.a.createElement("div",null,l.a.createElement("h1",null,e.main_temp,"\xb0")),l.a.createElement("div",null,l.a.createElement("i",{className:"wi ".concat(e.weatherIcon)}))),l.a.createElement("div",{className:"additional"},l.a.createElement("h3",{className:"feels_like"},"\u041e\u0449\u0443\u0449\u0430\u0435\u0442\u0441\u044f ",e.feels_like,"\xb0"),l.a.createElement("h3",{className:"maxMin"},"\u041c\u0438\u043d ",e.min,"\xb0 \u041c\u0430\u043a\u0441 ",e.max,"\xb0"),l.a.createElement("h3",{className:"description"},e.description)))};var b=function(e){var t,a,n,r,s,c,i,o,u,m,d,f,p,h=null,b=function(l,s,c){var i=[];s&&(i=s.split(",")),i.push(l);for(var o=[],u=0;u<i.length;u++){var m=i[u];!0===m.startsWith(e.inputValue)&&o.push(m)}console.log("res >>>",o),console.log("numOfEl >>>",c),0===c?t=o[0]:1===c?a=o[0]:2===c?n=o[0]:3===c?r=o[0]:4===c&&(h=o[0]),console.log("records0 >>>",t),console.log("records1 >>>",a),console.log("records2 >>>",n),console.log("records3 >>>",r),console.log("records4 >>>",h)},y=null;switch(e.finalArr.length){case 1:s=e.finalArr[0].fields.name,c=e.finalArr[0].fields.alternate_names,b(s,c,0),a=null,n=null,r=null,h=null;break;case 2:s=e.finalArr[0].fields.name,c=e.finalArr[0].fields.alternate_names,b(s,c,0),i=e.finalArr[1].fields.name,o=e.finalArr[1].fields.alternate_names,b(i,o,1),n=null,r=null,h=null;break;case 3:s=e.finalArr[0].fields.name,c=e.finalArr[0].fields.alternate_names,b(s,c,0),i=e.finalArr[1].fields.name,o=e.finalArr[1].fields.alternate_names,b(i,o,1),u=e.finalArr[2].fields.name,m=e.finalArr[2].fields.alternate_names,b(u,m,2),r=null,h=null;break;case 4:s=e.finalArr[0].fields.name,c=e.finalArr[0].fields.alternate_names,b(s,c,0),i=e.finalArr[1].fields.name,o=e.finalArr[1].fields.alternate_names,b(i,o,1),u=e.finalArr[2].fields.name,m=e.finalArr[2].fields.alternate_names,b(u,m,2),d=e.finalArr[3].fields.name,f=e.finalArr[3].fields.alternate_names,b(d,f,3),h=null;break;case 5:s=e.finalArr[0].fields.name,c=e.finalArr[0].fields.alternate_names,b(s,c,0),i=e.finalArr[1].fields.name,o=e.finalArr[1].fields.alternate_names,b(i,o,1),u=e.finalArr[2].fields.name,m=e.finalArr[2].fields.alternate_names,b(u,m,2),d=e.finalArr[3].fields.name,f=e.finalArr[3].fields.alternate_names,b(d,f,3),p=e.finalArr[4].fields.name,y=e.finalArr[4].fields.alternate_names,b(p,y,4);break;default:t=null,a=null,n=null,r=null,h=null}return l.a.createElement("div",{className:"searchBox"},l.a.createElement("form",{onSubmit:e.loadWeather},l.a.createElement("input",{name:"searchBar",className:"searchBar",id:"searchBar",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u0433\u043e\u0440\u043e\u0434",onInput:e.searchLive,autoComplete:"off",onBlur:function(){setTimeout((function(){document.getElementById("searchTable").style.display="none"}),300)}}),l.a.createElement("button",{id:"inputBtn"},"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c")),l.a.createElement("table",{id:"searchTable"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,l.a.createElement("button",{id:"btn0",onClick:function(t){return e.clearInput(s,i,u,d,p,t)}},t))),l.a.createElement("tr",null,l.a.createElement("th",null,l.a.createElement("button",{id:"btn1",onClick:function(t){return e.clearInput(s,i,u,d,p,t)}},a))),l.a.createElement("tr",null,l.a.createElement("th",null,l.a.createElement("button",{id:"btn2",onClick:function(t){return e.clearInput(s,i,u,d,p,t)}},n))),l.a.createElement("tr",null,l.a.createElement("th",null,l.a.createElement("button",{id:"btn3",onClick:function(t){return e.clearInput(s,i,u,d,p,t)}},r))),l.a.createElement("tr",null,l.a.createElement("th",null,l.a.createElement("button",{id:"btn4",onClick:function(t){return e.clearInput(s,i,u,d,p,t)}},h))))))},y="d60e9c0fd732e63411be26d3282fe316",w=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(d.a)(this,Object(f.a)(t).call(this))).state={city:null,country:null,main_temp:null,feels_like:null,description:null,weatherIcon:null,max:null,min:null,finalArr:[],inputValue:null,NumbOfResults:0},e.clearInput=function(e,t,a,n,l,r){var s=document.getElementById("searchBar");s.value="","btn0"===r.target.id?s.value=e:"btn1"===r.target.id?s.value=t:"btn2"===r.target.id?s.value=a:"btn3"===r.target.id?s.value=n:"btn4"===r.target.id&&(s.value=l),document.getElementById("inputBtn").click(),console.log("Clear Input",e,t,a,n,l),console.log("event >>>",r.target.id),document.getElementById("searchTable").style.display="none"},e.searchLive=function(){var t=Object(o.a)(i.a.mark((function t(a){var n,l,r,s,c,o,u,m,d;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.target.value,l=n.charAt(0).toUpperCase()+n.slice(1),t.next=4,fetch("https://data.opendatasoft.com/api/records/1.0/search/?dataset=geonames-all-cities-with-a-population-1000%40public&q=".concat(n,"&rows=5&facet=timezone&facet=country"));case 4:return r=t.sent,t.next=7,r.json();case 7:s=t.sent,e.setState({finalArr:s.records,inputValue:l,NumbOfResults:s.nhits}),console.log("NumbOfResults >>>>>>>>",e.state.NumbOfResults),e.state.NumbOfResults>0?document.getElementById("searchTable").style.display="block":document.getElementById("searchTable").style.display="none",c=document.getElementById("btn0").style,o=document.getElementById("btn1").style,u=document.getElementById("btn2").style,m=document.getElementById("btn3").style,d=document.getElementById("btn4").style,1===e.state.NumbOfResults?(c.display="block",o.display="none",u.display="none",m.display="none",d.display="none"):2===e.state.NumbOfResults?(c.display="block",o.display="block",u.display="none",m.display="none",d.display="none"):3===e.state.NumbOfResults?(c.display="block",o.display="block",u.display="block",m.display="none",d.display="none"):4===e.state.NumbOfResults?(c.display="block",o.display="block",u.display="block",m.display="block",d.display="none"):e.state.NumbOfResults>=5&&(c.display="block",o.display="block",u.display="block",m.display="block",d.display="block");case 17:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.getWeather=function(){var t=Object(o.a)(i.a.mark((function t(a){var n,l,r,s,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),!(n=a.target.searchBar.value)){t.next=19;break}return t.next=5,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(n,"&appid=").concat(y,"&lang=ru"));case 5:return l=t.sent,t.next=8,l.json();case 8:return r=t.sent,t.next=11,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(n,"&appid=").concat(y,"&lang=ru"));case 11:return s=t.sent,t.next=14,s.json();case 14:c=t.sent,console.log(c),200===r.cod?(document.querySelector(".mainInfo").style.display="block",e.setState({city:r.name,country:r.sys.country,main_temp:e.calculateCulsius(r.main.temp),feels_like:e.calculateCulsius(r.main.feels_like),description:r.weather[0].description,max:e.calculateCulsius(r.main.temp_max),min:e.calculateCulsius(r.main.temp_min)}),e.getWeatherIcon(e.weatherIcon,r.weather[0].id)):alert("error, \u043d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0437\u0430\u043f\u0440\u043e\u0441"),t.next=20;break;case 19:alert("error, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0433\u043e\u0440\u043e\u0434");case 20:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.calculateCulsius=function(e){return Math.floor(e-273.15)},e.getWeatherIcon=function(t,a){switch(!0){case a>=200&&a<=232:e.setState({weatherIcon:e.weatherIcon.Thunderstorm});break;case a>=300&&a<=321:e.setState({weatherIcon:e.weatherIcon.Drizzle});break;case a>=500&&a<=531:e.setState({weatherIcon:e.weatherIcon.Rain});break;case a>=600&&a<=622:e.setState({weatherIcon:e.weatherIcon.Snow});break;case a>=701&&a<=781:e.setState({weatherIcon:e.weatherIcon.Atmosphere});break;case 800===a:e.setState({weatherIcon:e.weatherIcon.Clear});break;case a>=801&&a<=804:e.setState({weatherIcon:e.weatherIcon.Clouds})}},e.weatherIcon={Thunderstorm:"wi-thunderstorm",Drizzle:"wi-sleet",Rain:"wi-day-rain",Snow:"wi-snow",Atmosphere:"wi-fog",Clear:"wi-day-sunny",Clouds:"wi-day-fog"},e}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"app"},l.a.createElement(b,{loadWeather:this.getWeather,searchLive:this.searchLive,finalArr:this.state.finalArr,inputValue:this.state.inputValue,clearInput:this.clearInput,NumbOfResults:this.state.NumbOfResults}),l.a.createElement(h,{city:this.state.city,country:this.state.country,main_temp:this.state.main_temp,feels_like:this.state.feels_like,description:this.state.description,weatherIcon:this.state.weatherIcon,max:this.state.max,min:this.state.min}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.26a2c703.chunk.js.map