import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home"
import About from './pages/About/About';

import {Routes, Route, Navigate} from 'react-router-dom'

function App() {
  const storedUser = JSON.parse(localStorage.getItem("user")) || false;

  const [user, setUser] = useState(storedUser)
  
  useEffect(() => {
    const u = JSON.parse(localStorage.getItem("user"))
    //console.log(u)
    u ? setUser(true) : setUser(false)
  }, [])
  
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user))
  }, [user])


  return (
    <div>
      <main>
          <Routes>
            {!user && (
              <Route path="/" element={<Login authenticate={() => setUser(true)} />} />
            )}
            
            {user && (
              <>
                <Route path="/home" element={<Home logout={() => setUser(false)} />} />
                <Route path="/about" element={<About logout={() => setUser(false)} />} />
              </>
            )}
            
            <Route path="/*" element={<Navigate to={user ? "/home" : "/"} />} />
          </Routes>
        </main>
    </div>
  );
}

export default App;
