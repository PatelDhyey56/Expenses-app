import React from 'react'
import { useState } from 'react'
import Cookies from "js-cookie"

export default function Loginform() {
    const initialform =
    {
        email: '',
        password: '',
    }
    const [loginform, setLoginorm] = useState(initialform)

    const changelogiform = (e) => {
        setLoginorm({
            ...loginform, [e.target.name]: e.target.value
        })
    }
    const submitform = async(e) => {
        e.preventDefault()
        const res = await fetch("http://localhost:8000/signup/login", {
            method: "POST",
            body: JSON.stringify(loginform),
            headers: {
                'content-type': 'application/json',
            }
        })
        const {token} =await res.json()
        if(res.ok){
            Cookies.set('token',token)
            console.log("successfully login...")
        }
        else{
            console.log("invalid......")
        }
        setLoginorm(initialform)
    }
    return (
        <div>
            <div className='m-5'>
                <div className='m-5'>
                    <div className='m-5'>
                        <div className='m-5'>
                            <div className='m-5'>
                                <div className='m-5'>
                                    <div className='m-5'>
                                        <form onSubmit={submitform}>
                                            <div className="mb-3">
                                            </div>
                                            <div className="mb-3">
                                                <input
                                                    type="email"
                                                    name='email'
                                                    value={loginform.email}
                                                    onChange={changelogiform}
                                                    placeholder="Email"
                                                    id="exampleInputEmail1"
                                                    className="form-control"
                                                    aria-describedby="emailHelp"
                                                    required
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <input
                                                    type="password"
                                                    name='password'
                                                    value={loginform.password}
                                                    onChange={changelogiform}
                                                    placeholder="Password"
                                                    className="form-control"
                                                    id="exampleInputPassword1"
                                                    required
                                                />
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
        </div>
    )
}
