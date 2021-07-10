
import "./Login.css";

const LogIn = (props)=>{
   const {
    email,
    setEmail, 
    password, 
    setPassword, 
    handleLogIn, 
    handleSignup, 
    hasAccount, 
    setHasAccount, 
    emailError, 
    passwordError
   } = props;
    
    return (
        <>
        <section className="login">
            <div className="loginContainer">
                <div className="insideContainer">
                    {!hasAccount?(
                        <h2 style={{color:"rgb(114, 200, 235)",borderBottom:"3px solid rgb(114, 200, 235)"}}>SignUp</h2>
                    ):(
                        <h2 style={{color:"rgb(114, 200, 235)",borderBottom:"3px solid rgb(114, 200, 235)",padding:"5px"}}>LogIn</h2>
                    )}
                    <label>Username</label>
                    <input
                    type="text"
                    autoFocus
                    required
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                    />
                    <p className="errormsg" style={{color:"red",fontSize:"12px"}}>{emailError}</p>
                    <label>Password</label>
                    <input
                    type="password"
                    required
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}
                    />
                    <p className="errormsg" style={{color:"red",fontSize:"12px"}}>{passwordError}</p>
                    <div className="btnContainer">
                        {hasAccount?(
                            <>
                            <button  onClick={handleLogIn}>Sign in</button>
                            <p>
                                Dont't have an account ?
                                <span style={{cursor:"pointer",color:"rgb(114, 200, 235);",marginLeft:"12px"}} onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
                            </p>
                            </>
                        ):(
                            <>
                            <button onClick={handleSignup}>Sign up</button>
                            <p>
                                Have an account ?
                                <span style={{cursor:"pointer",color:"rgb(114, 200, 235)",marginLeft:"12px"}} onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
                            </p>
                        </>
                        )}

                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export  default LogIn ;