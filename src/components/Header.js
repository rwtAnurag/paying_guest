
import './Header.css';
import User from '../User.png';
import PgList from './PgList';
import {BrowserRouter as Router ,Link,Route} from  "react-router-dom"
import ContactUs from './ContactUs';
function Header({handleLogout}) {
  return (
    <>
    <div className="header1">
          <button className="logo">PAYING GUEST </button>
          <div className="menu" style={{display:"flex"}}>
             
                <button> <Link style={{color:"White"}} to={"/"}>Home</Link></button> 
                <button><Link style={{color:"White"}} to="/PgList">PgList</Link></button>
                <button> <Link style={{color:"White"}} to={"/PgList"}>   User Mode</Link></button> 
                <button><Link style={{color:"White"}} to={"/AdminMode"}>Admin Mode</Link></button> 
                <button><Link style={{color:"White"}}  to={"/ContactUs"}>Contact Us</Link></button> 
                <button><Link style={{color:"White"}} to={"/Home"}> About Us</Link></button> 
                <Route path="/PgList"><PgList/></Route>
                <Route path="/ContactUs"><ContactUs/></Route>
                {/* <button style={{backgroundColor:"orange"}} onClick={handleLogout}>Log In</button> */}
                <div style={{ backgroundImage: `url(${User})`}} className="LogedInuser" >
                </div>
                <div>
                    <h6 style={{color:"orange",marginLeft:"0.6rem",marginTop:"1.5rem"}}>Anurag Rawat</h6>
                    <h6 style={{color:"white",marginLeft:"0.6rem",border:"1px solid orange",textAlign:"center",borderRadius:"1rem",width:"5rem",cursor:"pointer"}}>Log Out</h6>
                </div>
                   
              
               
          </div>
        
    </div>
    </>
  );
}

export default Header;
