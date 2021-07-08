import data from "./data" 
import { useEffect, useState } from "react"

export default function IP() {
    // console.log(process.env)
    console.log(data.location.country)
    const [userData, setUserData] = useState([])
    
    
    useEffect(() => {
        setUserData([data])
        
        console.log(userData)
    }, [])
    return (
       
            <>
            { userData.map( (item)=>
            <ul>
             <li> 
              {item.ip}         

              </li>
              <li>
                  {item.location.country}
              </li>
              <li>
                  {item.location.lat}, {item.location.lng}
              </li>

              </ul>)} 
          </>  
        
    )
}