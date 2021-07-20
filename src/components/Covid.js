import {Panel} from 'rsuite'
export default function Covid({covid}) {
   
    return (
        <>
       
        {covid.length  ? 

            <Panel className="panel" header={<h4>Global Pandemic Data</h4>} collapsible bordered>
        <h3>Total Cases Confirmed: {covid[0].Global.TotalConfirmed} </h3>
        <h3>Total Recovered: {covid[0].Global.TotalRecovered} </h3>
        <h3>New Confirmed: {covid[0].Global.NewConfirmed} </h3>
        <h3>New Recovered: {covid[0].Global.NewRecovered} </h3>
        
        
        </Panel>
        
        
    : <h1>loading</h1>}
    </>
    )
}