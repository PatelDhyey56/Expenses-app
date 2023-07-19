import React from 'react'
import { useState } from 'react'
import Cookies from "js-cookie"
import { useNavigate } from "react-router-dom"

export default function Loginform() {
    const navigate = useNavigate()
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
    const submitform = async (e) => {
        e.preventDefault()
        const res = await fetch("http://localhost:8000/signup/login", {
            method: "POST",
            body: JSON.stringify(loginform),
            headers: {
                'content-type': 'application/json',
            }
        })
        const { token } = await res.json()
        if (res.ok) {
            navigate('/')
            Cookies.set('token', token)
            // console.log("successfully login...")
        }
        else {
            console.log("invalid......")
            window.alert("invalid details...")
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
                                    <div className='card m-5'>
                                        <div className="text-center">
                                            <form >
                                                <div class="text-center">
                                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk6qKlLk50SrpDFulviyCpf0E2AcU9ncWXpA&usqp=CAU" class="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                                                        width="200px" alt="profile" />
                                                </div>
                                                <div className="mb-3">
                                                </div>
                                                <div className="m-3">
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
                                                <div className="m-3">
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
                                                <div className="m-3">
                                                    <button type="submit" className="btn btn-primary" onClick={submitform}>
                                                        Submit
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
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
