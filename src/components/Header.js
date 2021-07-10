
import './Header.css';
import User from '../User.png';
import {BrowserRouter as Router ,Link,Route} from  "react-router-dom"
function Header({handleLogout}) {
  return (
    <>
    <div className="header1">
          <button className="logo">PAYING GUEST </button>
          <div className="menu" style={{display:"flex"}}>
              <Router>
                <button> <Link to={"/"}>Home</Link></button> 
                <Link to={"/PgList"}>PgList</Link>
                <button> <Link to={"/UserMode"}>   User Mode</Link></button> 
                <button><Link to={"/AdminMode"}>Admin Mode</Link></button> 
                <button><Link to={"/ContactUs"}>Contact Us</Link></button> 
                <button><Link to={"/Home"}> About Us</Link></button> 
              </Router>
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
