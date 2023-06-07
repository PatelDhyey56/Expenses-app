import './App.css';
import Nav from './Components/Nav';
import Login from './Components/Login';
import Home from './Components/Home.jsx';
import React, { useEffect } from 'react'
import { useState } from 'react';

function App() { 
  const [cus, setCus] = useState([])
  const [editcus,setEditcus] =useState({})
  
  useEffect(() => {
    fetchdata()
  }, [cus])
  
  const fetchdata = async () => {
    const res = await fetch("http://localhost:8000/login")
    const { data } = await res.json()
    setCus(data)
    // console.log(data)
  }
  return (
    <>
      <Nav />
      <Login editcus={editcus} />
      <Home  cus={cus}  setEditcus={setEditcus}/>
    </>
  );
}

export default App;
