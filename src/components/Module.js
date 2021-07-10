import './Module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import User from '../User.png';
import Data from './Data';
import { useEffect, useState } from 'react';
import PgList from './PgList';
import Pglist1 from '../T2.jpg';
import Pglist2 from '../pglist.jpg';
import {BrowserRouter as Router ,Link,Route} from  "react-router-dom"
function Module() {
      
      console.log("data",Data[0].name);

  return (
    <>
    {/* <PgList/> */}
    <div className=" container module-root">
          <div className="module-root-left">
            <div>
               <h3 style={{color:"Orange",paddingBottom:"3rem",textShadow:"1px 1px 2px black"}}><u>User Module</u></h3>
               <h5>
                 Here User Can Search the Pg by the locality or landmark of your choice. This allows you to find the right hostel or room
                 We hope to provide you with the best renting solutions with the help of our designs and technology.Our services across the country will help you find and book Paying Guest (PG) rental homes.
               </h5>
               <button>
                     <Link style={{color:"orange"}} to="/PgList">
                     Open  User Module
                     </Link>
               </button>
            </div>
            <div>
                <img className="module-root-left-img1" src={Pglist1}></img>
            </div>
          </div>
          <div className="module-root-left">
              <div  >
                  <img className="module-root-left-img2" src={Pglist2}></img>
              </div>
              <div>
                        <h3 style={{color:"Orange",paddingBottom:"1.8rem",textShadow:"1px 1px 2px black"}}><u>Admin Module</u></h3>
                        {/* <h4 style={{color:"Orange",paddingBottom:"0.3rem"}}>Can Upload PG images or Deatail</h4> */}
                        <h5>
                        In Admin Module An Admin can upload PG ROOM or HOSTEL photos and his Pg ROOM or Hostel details and also about himself
                        so that user will be able to easily find Best PG. 
                        </h5>
                        <h5>
                        Admin can also add PG location so that user will be able to track the Pg Location.
                        </h5>
                        <button>
                              <Link style={{color:"orange"}} to={"/AdminMode"}>
                              Open Admin Mode
                              </Link>
                        </button>
               </div>
          </div>
          
    </div>
   
    </>
  );
}

export default Module;