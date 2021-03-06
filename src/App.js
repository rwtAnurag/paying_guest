import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import Fire from "./components/Fire"
import LogIn from './components/LogIn';
import Header  from './components/Header';
import Home from './components/Home'
import Module from './components/Module'
import Features from './components/Features'
import Footer from './components/Footer'
 import Room1 from './room1.jpg';
 import PgList from './components/PgList';
 import AdminMode from './components/AdminMode';
 import {BrowserRouter as Router ,Link,Route} from  "react-router-dom";
 import ImageGallary from './ImageGallary';
 import ContactUs from './components/ContactUs';

function App() {
  const [user,setUser] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [emailError,setEmailError] =useState('');
  const [passwordError,setPasswordError] = useState('');
  const [hasAccount,setHasAccount] = useState('');
  const [img,setImg] = useState('');
  console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAa",img);
  
  const clearInputs = () =>{
      setEmail('');
      setPassword('');
  }
  const clearErrors = () =>{
      setEmailError('');
      setPasswordError('');
  }

  const handleLogin=()=>{
          clearErrors();
          Fire
             .auth()
             .signInWithEmailAndPassword(email,password)
             .catch(err=>{
                 switch(err.code){
                     case "auth/invalid.email":
                     case "auth/user-disabled":
                     case "auth/user-not-found":
                         setEmailError(err.message);
                         break;
                      case "auth/wrong-password":
                          setPasswordError(err.message);
                          break;
                 }
             });
  };
  const handleSignup = ()=>{
      clearInputs();
      Fire
      .auth()
      .createUserWithEmailAndPassword(email,password)
      .catch((err)=>{
          switch(err.code){
              case "auth/email-already-in-use":
              case "auth/invalid-email":
                  setEmailError(err.message);
                  break;
               case "auth/weak-password":
                   setPasswordError(err.message);
                   break;
          }
      });
  }
  const handleLogout = () =>{
            Fire.auth().signOut();
  }
  const authListner = ()=>{
      Fire.auth().onAuthStateChanged((user)=> {
          if(user){
              clearInputs();
              setUser(user);
          }else{
              setUser("");
          }
      });
  };
  useEffect(()=>{
       authListner();
  },[])
  return (
    <>
      <div className="App">
      
        {user ? (
          <>
          <Router>
            <switch>
              <Route path="/" exact><Home handleLogout={handleLogout}/></Route>
              <Route path="/" exact> <Features/></Route>
              <Route path="/" exact><Module/></Route>
              <Route path="/" exact><Footer/></Route>    
              <Route path="/PgList"><PgList/></Route>
              <Route path="/ContactUs"><ContactUs/></Route>
              
              <Route path="/AdminMode">
                                <AdminMode setImg={setImg}/>
                      </Route>
              {/*  */}
               {/* <ImageGallary/> */}
              </switch>
          </Router>
           
          </>    

        ):(
          <LogIn
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogIn={handleLogin}
          handleSignup={handleSignup}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount} 
          emailError={emailError} 
          passwordError={passwordError}
         />
        )}
       
       
       
{/*        
        
        <Footer/>  */}
        
      </div>
      
    </>
  );
}

export default App;
