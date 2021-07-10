
import './Home.css';
import Homepage from '../Homepage.jpg';
import Header from './Header';

function Home({handleLogout}) {
  return (
    <>
    <div className="root-block"  style={{ backgroundImage: `url(${Homepage})`}}>
    <Header handleLogout={handleLogout}/>
      <div className="wecomemsg">
        <h1>
          Welcome To Our 
        </h1>
       <h2> Paying Guest <span style={{color:"orange"}}>Web App </span></h2>
       <div className="learn-more">
          <button className="btn1">Learn More</button>
          <button className="btn2">Modes</button>
       </div>
      </div>
    </div>
    </>
  );
}

export default Home;

