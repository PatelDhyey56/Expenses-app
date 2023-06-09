import Signupform from '../Components/Signupform';
import Detail from '../Components/Detail';
import React, { useEffect } from 'react'
import { useState } from 'react';


export default function Login() {
    const [cus, setCus] = useState([])
    const [editcus, setEditcus] = useState({})

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const res = await fetch("http://localhost:8000/signup")
        const { data } = await res.json()
        setCus(data)
        // console.log(data)
    }
    return (
        <div>
            <>
                <Signupform editcus={editcus} fetchdata={fetchdata} setEditcus={setEditcus}/>
                {/* <Detail cus={cus} setEditcus={setEditcus} fetchdata={fetchdata}/> */}
            </>
        </div>
    )
}