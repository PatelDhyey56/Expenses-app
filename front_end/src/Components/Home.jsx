import React, { useEffect } from 'react'
import { useState } from 'react';
// import axios from 'axios';

export default function Home() {

    const [cus, setCus] = useState([])
    // const [no , setNO]=useState(0)

    useEffect(()=>{
        fetchdata()
    },[])

    const fetchdata = async()=>{
        const res =await fetch("http://localhost:8000/login")
        const { data } =await res.json()
        setCus(data)
        console.log(data)
        // return axios.get("http://localhost:8000/login").then((res) => setCus(res.data));
    }
    return (
        <div className='m-5'>
            <div className='m-5'>
                <div className='m-5'>
                    <div className='m-5'>
                        <div className='m-5'>
                                <table className="table table-light table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">First name</th>
                                            <th scope="col">Last name</th>
                                            <th scope="col">Mail</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {cus.map((e)=>(
                                        <tr key={e.id}>
                                            <td>{e.fname}</td>
                                            <td>{e.lname}</td>
                                            <td>{e.email}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
