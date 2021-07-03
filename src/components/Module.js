import './Module.css';
import User from '../User.png';

function Module() {
  return (
    <>
    <div className="module-root">
          <div className="userModule">
                <img src={User}></img>
                <h1>User</h1>
          </div>
          <div>
                <img src={User}></img>
                <h1>Pg Admin</h1>
          </div>
    </div>
    </>
  );
}

export default Module;