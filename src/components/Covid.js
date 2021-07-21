import {Panel} from 'rsuite'
import {Doughnut} from 'react-chartjs-2'
import { HashLoader } from 'react-spinners'
export default function Covid({covid}) {
   
    return (
        <>
       
        {covid.length  ? 
            
            <Panel className="panel" header={<h4>Global Pandemic Data</h4>} collapsible bordered>
               <div className="covid">
        <Doughnut 
              height={200}
              width={200}
              data={{
                  labels: ['Total Cases Confirmed', 'Total Cases Recovered', 'Total Deaths'],
                  datasets: [
                      {
                          label: "Global Covid Data",
                          data: [`${covid[0].Global.TotalConfirmed}`, `${covid[0].Global.TotalRecovered}` , `${covid[0].Global.TotalDeaths}`],
                          backgroundColor: [
                            '#C43B44', '#763BC4', 'Black'
                          ]
                          
                      }
                  ]
              }}
              
        />
        <Doughnut 
              height={200}
              width={200}
              data={{
                  labels: [ 'New Cases Confirmed', 'New Cases Recovered'],
                  datasets: [
                      {
                          label: "Global Covid Data",
                          data: [`${covid[0].Global.NewConfirmed}`, `${covid[0].Global.NewRecovered}`],
                          backgroundColor: [
                            '#3BC4BB', '#89C43B'
                          ],
                          borderColor: [
                              'black'
                          ]
                      }
                  ]
              }}
              
        />
        </div>
        </Panel>
        
        
    : <HashLoader/>}
    </>
    )
}