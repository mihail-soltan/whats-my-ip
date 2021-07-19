import data from "./data"
import { useEffect, useState } from "react"
import Map from "./Map"



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
      <h1>Data from data.js</h1>
      {userData.map((item) =>
        <ul className='data-list'>
          <li key={Math.random() * 1000}>
            {item.ip}

          </li>
          <li key={Math.random() * 1000}>
            {item.location.country}
          </li>
          <li key={Math.random() * 1000}>
            {item.location.lat}, {item.location.lng}
          </li>

        </ul>)}
      <h2>Response from API</h2>
      {
        userData1.map((item) =>
          <ol>
            <li key={Math.random() * 1000}>{item.ip}</li>
            <li key={Math.random() * 1000}>{item.location.lat}, {item.location.lng}</li>
          </ol>


        )
      }
      <p>Contenent: {region}</p>
      <p>Capital: {capital}</p>
      <img src={flag} style={{ height: 200 }} />
      {lat && lng? <Map lat={lat} lng={lng}/>:"loading"}


    </>

  )
}