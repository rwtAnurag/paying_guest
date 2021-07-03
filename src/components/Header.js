
import './Header.css';

function Header() {
  return (
    <>
    <div className="header1">
          <button>PAYING GUEST </button>
          <div className="menu" style={{display:"flex"}}>
                <button>Home</button>
                <button>ROOMS</button>
                <button>User</button>
                <button>Admin</button>
                <button>Contact Us</button>
                <button>About Us</button>
                <div  className="userAuth">
                  <button>Check Facility</button>
                  <button >Log In</button>
               </div>
          </div>
        
    </div>
    </>
  );
}

export default Header;
