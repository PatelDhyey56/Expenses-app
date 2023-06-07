import Login from '../Components/Login';
import Detail from '../Components/Detail';
import React, { useEffect } from 'react'
import { useState } from 'react';


export default function Main() {
    const [cus, setCus] = useState([])
    const [editcus, setEditcus] = useState({})

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
        <div>
            <>
                <Login editcus={editcus} />
                <Detail cus={cus} setEditcus={setEditcus} />
            </>
        </div>
    )
}
