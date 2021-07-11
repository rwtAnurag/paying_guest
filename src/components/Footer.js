import './Footer.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import {BrowserRouter as Router ,Link,Route} from  "react-router-dom"

const Footer = ( )=>{
     return (
          <> 
             <div className="footerBlock">
                         <div style={{display:"flex",flexDirection:"column"}}>
                              <div>
                                   <h2>Follow Us</h2><br/>
                              </div>
                              <div>
                                   <FacebookIcon fontSize='large' style={{border:"2px solid orange",padding:"5px",margin:"10px"}}/>
                                   <TwitterIcon fontSize='large' style={{border:"2px solid orange",padding:"5px",margin:"10px"}}/>
                                   <InstagramIcon fontSize='large' style={{border:"2px solid orange",padding:"5px",margin:"10px"}}/>
                                   <YouTubeIcon fontSize='large' style={{border:"2px solid orange",padding:"5px",margin:"10px"}}/>
                                   <LinkedInIcon fontSize='large' style={{border:"2px solid orange",padding:"5px",margin:"10px"}}/>
                              </div>
                              <div className="footerBlocksHeading1">
                                   <button><Link to={"/Home"}><u>Home</u></Link></button><br/>
                                   <button><Link to="/PgList"><u>PgList</u></Link></button><br/>
                                   <button><Link to="/PgList"><u>User MOde</u></Link></button><br/>
                                   <button><Link to="/AdminMode"><u>Admin Mode</u></Link></button><br/>
                                   <button><Link to="/ContactUs"><u>Contact us</u></Link></button><br/>
                                   <button><Link><u>About Us</u></Link></button><br/>
                              </div>
                         </div>
                         
                         <div className="footerBlocksHeading" style={{display:"flex",flexDirection:"column"}}>
                              <h3>Paying Guest</h3>
                              <h6>Paying Guest is India's Largest growing "PG Rental Network" attempting to provide better Paying Guest Accommodation Via our technology platform. We help find the best PG rental across Major Indian Cities.</h6>
                              <h3>________________________</h3>
                              <h3>Contact Info</h3>
                              
                              <h6> <PhoneIcon/>  91-9696436718</h6>
                              <h6> <PhoneIcon/>  91-7007026750</h6>
                              <h6> <MailOutlineIcon/> rishabh.singh2103@bbdu.ac.in</h6>
                              <h6> <MailOutlineIcon/> hackprajjwal2025@bbdu.ac.in</h6>
                              
                         </div>
                 
             </div>
          </>
     );
}

export default Footer;
