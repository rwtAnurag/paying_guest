import 'bootstrap/dist/css/bootstrap.min.css';
import Data from './Data';
import "./PgList.css"

 const  PgList = ()=>{
    return (
        <>
           <div>
               {Data.map((newData)=>{
                   return(
                        <div className="PgListContainer">
                            <div >
                                <img className="pgImg" src={newData.url}></img>
                            </div>
                             <div className="adminDetail" >
                                 <h5>Nmae: {newData.name}</h5>
                                 <h5>Mo No: {newData.mobileno}</h5>
                                 <h5>Price: {newData.prizeRange}</h5>
                                 <h5>Room Avialabe: {newData.availableRoom}</h5>
                                 <h5>City: {newData.city}</h5>
                                 <a href={newData.location}>Location</a>
                             </div>
                        </div>
                   )
               })}
           </div>
            
        </>

    );
}

export default PgList;