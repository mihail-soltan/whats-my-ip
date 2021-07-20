import { useEffect, useState } from "react"
import Map from "./Map"
import { Panel } from 'rsuite';
import Weather from "./Weather";
import Covid from "./Covid"
export default function IP() {
  // console.log(process.env)
  // console.log(data.location.country)
  const [userData, setUserData] = useState([])
  const apiLink = `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IPIFY_API_KEY}`
  
  const [lat, setLat] = useState(null)
  const [lng, setLng] = useState(null)
  const [flag, setFlag] = useState('')
  const [capital, setCapital] = useState('')
  const [region, setRegion] = useState('')
  const [weatherData, setWeatherData] = useState([])
  const [covid, setCovid] = useState([])

  useEffect(() => {

    // console.log(userData)
    fetch(apiLink)
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error("Error!")
        }
      })
      .then((data) => {
        setUserData([data])
        setLat(data.location.lat)
        setLng(data.location.lng)
        console.log(data.location.city)
        fetch(`https://restcountries.eu/rest/v2/alpha?codes=${data.location.country}`)
          .then((res) => {
            if (res.ok) {
              return res.json()
            } else {
              throw new Error('Erorr!')
            }
          })
          .then((result) => {
            setFlag(result[0].flag)
            setRegion(result[0].region)
            setCapital(result[0].capital)
            // setLat(result[0].latlng[0])
            // setLng(result[0].latlng[1])
            // console.log(result[0].latlng[1])           
  
          })
          fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data.location.lat}&lon=${data.location.lng}&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`)
            .then((res) => {
              if (res.ok){
                return res.json()
              } else{
                throw new Error('Error!')
              }
            })
            .then(async (res) =>{
              console.log(res.main.temp)
              setWeatherData([await res])
            })
          fetch(`https://api.covid19api.com/summary`)
            .then((res) => {
              if (res.ok) {
                return res.json()
              } else{
                throw new Error('Error!')
              }
            })
            .then(async (res)=>{
              console.log(res.Global)
              setCovid([await res])
            })
            console.log(covid[0])
      })
      .catch((err) => console.log(err))
  }, [])


  return (

    <>
      <div className="ip-weather-box">
          <Panel className="panel" header={<h3>Your Data</h3>} bordered>
     
      {
        userData.map((item) =>
          <ol>
            <h4 className="your-data"><li key={Math.random() * 1000}>IP Address: {item.ip}</li></h4>
            <h4 className="your-data"><li key={Math.random() * 1000}>Latitude: {item.location.lat}</li></h4>
            <h4 className="your-data"><li key={Math.random() * 1000}>Longitude: {item.location.lng}</li></h4>
          </ol>


        )
      }
      <h3>Continent: {region}</h3>
      <h3>Capital: {capital}</h3>
      <img src={flag} alt="flag" style={{ height: 200 }} />
      </Panel>
      <Weather weatherData={weatherData} userData={userData} /> 
      </div>
      <div className="ip-weather-box">
      <Panel className="panel" header={<h3>Current Location</h3>}  bordered>
      {lat && lng? <Map lat={lat} lng={lng} />:"loading"}
      </Panel>
      <Covid covid={covid}/>
      </div>
    </>

  )
}