import React, { useState } from 'react';
const Forecast = () => {
    let [responseObj, setResponseObj] = useState({});
    function getForecast() {
        fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=seattle", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
		"x-rapidapi-key": "ed89ebd8ebmsh2e00a8db8624007p16b218jsn03b0441509d2"
	}
})
// .then(response => {
// 	console.log(response);
// })
 .then(response => response.json())
       .then(response => {
           setResponseObj(response)
       })
.catch(err => {
	console.error(err);
});
    }
    return (
        <div>
           <h2>Find Current Weather Conditions</h2>
           <div>
               {JSON.stringify(responseObj)}
           </div>
           <button onClick={getForecast}>Get Forecast</button>
       </div>
    )
}
export default Forecast;