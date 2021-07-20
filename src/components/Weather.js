import {Panel} from 'rsuite'
import { DateTime } from "luxon"
export default function Weather({weatherData, userData}) {
   
    return (
        <>
       
        {weatherData.length && userData.length ? 

            <Panel className="panel" collapsible header={<h4>Weather</h4>} bordered>
        <h5>Weather in {userData[0].location.city}  on {DateTime.now().toLocaleString(DateTime.DATE_MED)} </h5>
        <h4>Description: {weatherData[0].weather[0].description}</h4>
        <h4>Average temperature: {weatherData[0].main.temp} °C</h4>
        <h4>Feels like: {weatherData[0].main.feels_like} °C</h4>
        <h4>Wind speed: {weatherData[0].wind.speed} km/h</h4>
        
        </Panel>
        
        
    : <h1>loading</h1>}
    </>
    )
}