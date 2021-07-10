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
                                <h2>Detail</h2> 
                                 <h7>Name: {newData.name}</h7>
                                 <h7>Mo No: {newData.mobileno}</h7>
                                 <h7>Price: {newData.prizeRange}</h7>
                                 <h7>Room Avialabe: {newData.availableRoom}</h7>
                                 <h7>City: {newData.city}</h7>
                                 <button style={{border:"none",color:"white",marginTop:"10px",height:"2.3rem",backgroundColor:"rgb(11, 133, 247)",borderRadius:"5px"}}>View Pg Admin Detail</button>
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