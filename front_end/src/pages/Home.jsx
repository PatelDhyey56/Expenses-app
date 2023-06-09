import React from 'react'
import Expenceadd from '../Components/Expenceadd'
import Expancetable from '../Components/Expancetable'
import { useState, useEffect } from 'react';

export default function Home() {
  const [cusex, setCusex] = useState([])
  const [editcusex, setEditcusex] = useState({})

  useEffect(() => {
    fetchdata()
  }, [])

  const fetchdata = async () => {
    const res = await fetch("http://localhost:8000/expence")
    const { data2 } = await res.json()
    setCusex(data2)
    // console.log(data2)
  }

  return (
    <div>
      <Expenceadd editcusex={editcusex} fetchdata={fetchdata} setEditcusex={setEditcusex} />
      <Expancetable cusex={cusex} setEditcusex={setEditcusex} fetchdata={fetchdata}/>
    </div>
  )
}
