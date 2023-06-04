import React from 'react'
import { useState } from 'react';

export default function Login() {
    const [form ,setForm]=useState({
        mail:'',
        password:'',
    })
    const changeform = (e)=>{
        setForm({
            ...form,[e.target.name]:e.target.value
        })
    }
    const submitform = async(e)=>{
        e.preventDefault();
        const res =await fetch("http://localhost:8000/",{
            method:"POST",
            body:form,
        })
        console.log(res);
    }
    return (
        <div className='m-5'>
            <div className='m-5'>
                <div className='m-5'>
                    <div className='m-5'>
                        <div className='m-5'>
                            <div className='m-5'>
                                <div className='m-5'>
                                    <form onSubmit={submitform}>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">
                                                Email address
                                            </label>
                                            <input
                                                type="email"
                                                name='mail'
                                                value={form.mail}
                                                onChange={changeform}
                                                className="form-control"
                                                id="exampleInputEmail1"
                                                aria-describedby="emailHelp"
                                            />
                                            <div id="emailHelp" className="form-text">
                                                We'll never share your email with anyone else.
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputPassword1" className="form-label">
                                                Password
                                            </label>
                                            <input
                                                type="password"
                                                name='password'
                                                value={form.password}
                                                onChange={changeform}
                                                className="form-control"
                                                id="exampleInputPassword1"
                                            />
                                        </div>
                                        <div className="mb-3 form-check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                            <label className="form-check-label" htmlFor="exampleCheck1">
                                                Check me out
                                            </label>
                                        </div>
                                        <button type="submit" className="btn btn-primary">
                                            Submit
                                        </button>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
