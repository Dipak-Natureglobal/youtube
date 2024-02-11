import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import singup from './components/Signup/Signup';
import login from './components/Login/Login';
import About from './components/About';
import Subscription from './components/Subscription';
import Shorts from './components/Shorts';
import React,{useEffect, useState} from 'react';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Singup from './components/Signup/Signup';
import Login from './components/Login/Login';
import { auth } from './firebase';


function App() {
  const[username, setUserName]=useState("")
  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      if(user)
      {
        setUserName(user.displayName);
      }
      else{
        setUserName("");
      }
    })
  },[]);
  return (
    <>
      <Router>
      {<Navbar name={username}/>}
        <div>
          {/* <Navbar/> */}
            <Routes>
              
              <Route path="/Signup" element={<Singup/>} />
              <Route path="/Login" element={<Login/>} />
              <Route path="/Home" element={<Home/>} />
              <Route path="/About" element={<About/>} />
              <Route path="/Subscription" element={<Subscription/>} />
              <Route path="/Shorts" element={<Shorts/>} />




            </Routes>
          
        </div>
      </Router>
    </>
  );
}
export default App;
