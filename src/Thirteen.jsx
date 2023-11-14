//Implement a basic authentication form with login and registration.
//import React from 'react'

import { useState } from "react";
import "./Thirteen.css";

function Thirteen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);
  const handleAuthentication = () => {
    if (isRegistered) {
      //login
      if(isRegistered){
        const user=users.find((u)=>u.email===email && u.password=== password);
        if(user){
            setIsLoggedIn(true)
        }
        else{
            alert('Login Failed, Please check your credential')
        }
      }
    } else {
      const newUser = { email, password };
      setUsers([...users, newUser]);
      localStorage.setItem("users", JSON.stringify([...users, newUser]));
      setIsLoggedIn(true);
    }
  };

  const handleLogout= ()=>{
    setIsLoggedIn(false)
    setEmail('');
    setPassword('');
  }

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Welcome, {email}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>{isRegistered ? "Registered" : "Login"}</h2>

          <form>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleAuthentication}>
              {isRegistered ? "Login " : "Register"}
            </button>
          </form>
          <p>
            {isRegistered
              ? "Don't have account ? Register now"
              : "Already have an account ? Login"}
          </p>
          <button onClick={() => setIsRegistered(!isRegistered)}>
            {isRegistered ? "Register" : "Login"}
          </button>
        </div>
      )}
    </div>
  );
}

export default Thirteen;
