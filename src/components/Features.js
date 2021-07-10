
import './Features.css';
import Internet from "../internet2.png";
import Breakfast from "../breakfast.png";
import Security from "../security.png";
import Cleaning from "../cleaning.png";
import Power from "../power.png";
import Parking from "../parking.png";
import Furnished from "../furnished.png";
import Linen from "../linen.png";
import Pin from "../pin.jpg";
import Mobile from "../moble.jpg";
import Wallet from "../wallet.png";


function Features() {
    return (
           <>  
                <div className="whyPg container">
                    <h2>__________Why Paying Guest__________</h2>
                    <h5 style={{marginTop:"3rem"}}>It has become easy to search pg accommodation nearby the work place.</h5>
                    <h5>It was difficult earlier to go a place to work which was situated at long-distances and hence had to lose good opportunities,
                    as we don’t know where to stay and where unaware about a particular city. But now it has become easier to find an accommodation 
                    nearby the work place in cheap rates. In this online paying guest system, users can find a number of paying accommodation nearby
                     work place or desired place.Even user can add his/her own desired places and get the </h5>
                        <h5>tenant easily by just uploading picture and details of the respective place. </h5>
                </div>
               
                <div className="features-block1">
                    <h2 style={{ fontSize: "2rem" }}>___________Amenities__________</h2>
                    <p style={{ marginBottom: "100px",marginTop:"2rem", fontSize: "1.5rem" }}>Paying Guest Make sure to provide <br />a range of Amenities to make you feel like you are home</p>
                    <div className="insideBlock">
                        <div>
                            <img className="featureImage" src={Internet} ></img>
                            <h1>High Speed Internet</h1>
                        </div>
                        <div>
                            <img className="featureImage" src={Breakfast} ></img>
                            <h1>Breakfast</h1>
                        </div>
                        <div>
                            <img className="featureImage" src={Security} ></img>
                            <h1>24X7 Security</h1>
                        </div>
                        <div>
                            <img className="featureImage" src={Cleaning} ></img>
                            <h1>Regular Cleaning</h1>
                        </div>

                    </div>
                    <div className="insideBlock" >
                        <div >
                            <img className="featureImage" src={Power} ></img>
                            <h1>24x7 Power Backup</h1>
                        </div>
                        <div>
                            <img className="featureImage" src={Parking} ></img>
                            <h1>2-wheeler Parking</h1>
                        </div>
                        <div>
                            <img className="featureImage" src={Furnished} ></img>
                            <h1>Fully Furnished</h1>
                        </div>
                        <div>
                            <img className="featureImage" src={Linen} ></img>
                            <h1>Spotless Linen</h1>
                        </div>

                    </div>
                </div>
                <div className="offercontainer">
                   <h2>__________What we offer__________</h2>
                   <h6>The listed services are offered to all our customers.<br/> We assure you the best deals in all our properties and the chance to live a more luxurious life with lesser cost.</h6>
                   <div className="insideoffercontainer">
                       <div>
                           <img className="offercontainerImg" src={Pin}></img>
                           <h2>Find Pg Near You</h2>
                           <h6>
                           Find Paying guests near you by selecting your location. We cover more than 50+ localities in every city.
                           </h6>
                       </div>
                       <div>
                            <img className="offercontainerImg" src={Mobile}></img>
                            <h2>Book Online</h2>
                            <h6>
                                Book your PG online through our web portal or mobile application. Avail discounts that are available for booking online.
                            </h6>
                       </div>
                       <div>
                            <img className="offercontainerImg" src={Wallet}></img>
                           <h2>Best Deals On PGs</h2>
                           <h6>
                               We have tie ups with PGs in every city. We make sure that our customers get the best deals for PGs.
                           </h6>
                       </div>
                   </div>
                </div>
            </>
                    );
}

                    export default Features;