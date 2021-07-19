import data from "./data"
import { useEffect, useState } from "react"
import Map from "./Map"
import { Panel, PanelGroup } from 'rsuite';
import {Paragraph} from 'rsuite'
export default function IP() {
  // console.log(process.env)
  // console.log(data.location.country)
  const [userData, setUserData] = useState([])
  const [userData1, setUserData1] = useState([])
  const apiLink = `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IPIFY_API_KEY}`
  const [lat, setLat] = useState(null)
  const [lng, setLng] = useState(null)
  const [flag, setFlag] = useState('')
  const [capital, setCapital] = useState('')
  const [region, setRegion] = useState('')

  useEffect(() => {
    setUserData([data])

    // console.log(userData)
    fetch(apiLink)
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error("Error!")
        }
      })
      .then((data1) => {
        setUserData1([data1])
        setLat(data1.location.lat)
        setLng(data1.location.lng)
        fetch(`https://restcountries.eu/rest/v2/alpha?codes=${data1.location.country}`)
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



      })
      .catch((err) => console.log(err))
  }, [])


  return (

    <>
      
          <Panel className="panel" header={<h3>Your Data</h3>} style={{width: "50%"}} bordered>
     
      {
        userData1.map((item) =>
          <ol>
            <h4><li key={Math.random() * 1000}>IP Address: {item.ip}</li></h4>
            <h4><li key={Math.random() * 1000}>Latitude: {item.location.lat}</li></h4>
            <h4><li key={Math.random() * 1000}>Longitude: {item.location.lng}</li></h4>
          </ol>


        )
      }
      <h3>Continent: {region}</h3>
      <h3>Capital: {capital}</h3>
      <img src={flag} style={{ height: 200 }} />
      
      </Panel>
      <Panel header={<h3>Current Location</h3>} style={{width: "50%"}} bordered>
      {lat && lng? <Map lat={lat} lng={lng} />:"loading"}
      </Panel>

    </>

  )
}