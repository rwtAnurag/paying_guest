import Data from "./Data";
import "./Submit.css"
const SubmitDetail = ({profileImg,name,contact,address,rent,gob,location})=>{
return (
      <>
      <div className="root">
          <h1>Submitted Successfully</h1>
                <div className="card">
                <img style={{border:"1px solid black"}} src={profileImg}></img>
                    <h7>Name: {name}</h7>
                    <h7>Mobile No: {contact}</h7>
                    <h7>Address: {address}</h7>
                    <h7 style={{color:"red"}}>Rs.{rent}/per Month</h7>
                    <h7>Only For {gob}</h7>
                    <h7>Entered Location: {location}</h7>
                
                </div>
        </div>
      </>
);
}
export default SubmitDetail;