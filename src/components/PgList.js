import 'bootstrap/dist/css/bootstrap.min.css';
import Data from './Data';
import "./PgList.css"
import Pin from "../pin.jpg";
import {BrowserRouter as Router ,Link,Route} from  "react-router-dom"


 const  PgList = ()=>{
    return (
        <>
           <div className=" PgListContainerMain">
               {Data.map((newData)=>{
                   return(
                        <div className="PgListContainer">
                            <div >
                                <img className="pgImg" src={newData.url}></img>
                            </div>
                             <div className="adminDetail" >
                                
                                <h2>{newData.pgname}</h2>
                                 <h6>Name: {newData.name}</h6>
                                 <h6 style={{color:"blue"}}>Mo No: {newData.mobileno}</h6>
                                 <h4 style={{color:"red"}}>Rs.{newData.prizeRange}/ Month</h4>
                                 <h4>Room Avialabe: {newData.availableRoom}</h4>
                                 <h5 style={{color:"red"}}> Mess: {newData.Mess}</h5>
                                 <h3 style={{color:"green",fontWight:"600"}}>Only for {newData.gob}</h3>
                                 <h5>City: {newData.Address}</h5>
                                 {/* <button style={{border:"none",color:"white",marginTop:"10px",height:"2.3rem",backgroundColor:"rgb(11, 133, 247)",borderRadius:"5px"}}>View Pg Admin Detail</button> */}
                             </div>
                             <div className="location">
                                 <a href={newData.location}>
                                    <img src={Pin}></img>
                                 </a>
                                 <h2>Location</h2>
                             </div>
                        </div>
                   )
               })}
           </div>
            
        </>

    );
}

export default PgList;