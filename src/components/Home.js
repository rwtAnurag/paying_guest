
import './Home.css';
import Homepage from '../Homepage.jpg';
import Header from './Header';

function Home() {
  return (
    <>
    <div className="root-block"  style={{ backgroundImage: `url(${Homepage})`}}>
      <Header/>
      <div className="wecomemsg">
        <h1>
          Welcome To Our Paying Guest Web App <br/>Find Your Best PG
        </h1>
      </div>
    </div>
    </>
  );
}

export default Home;

