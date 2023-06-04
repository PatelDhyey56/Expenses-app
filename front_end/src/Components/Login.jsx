import React from 'react'
import { useState } from 'react';

export default function Login() {
    const [form, setForm] = useState({
        fname: '',
        lname: '',
        mail: '',
        password: '',
        repassword: '',
    })
    const changeform = (e) => {
        setForm({
            ...form, [e.target.name]: e.target.value
        })
    }
    const submitform = async (e) => {
        e.preventDefault();
        const res = await fetch("http://localhost:8000/login", {
            method: "POST",
            body: JSON.stringify(form),
            headers: {
                'content-type': 'application/json',
            }
        })
        const data = await res.json()
        console.log(data);
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
                                            <div className="row">
                                                <div className="col">
                                                    <input
                                                        type="fname"
                                                        name='fname'
                                                        value={form.fname}
                                                        onChange={changeform}
                                                        id="exampleInputfname"
                                                        className="form-control"
                                                        placeholder="First name"
                                                        aria-label="First name"
                                                    />
                                                </div>
                                                <div className="col">
                                                    <input
                                                        type="lname"
                                                        name='lname'
                                                        value={form.lname}
                                                        onChange={changeform}
                                                        id="exampleInputlname"
                                                        className="form-control"
                                                        placeholder="Last name"
                                                        aria-label="Last name"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <input
                                                type="email"
                                                name='mail'
                                                value={form.mail}
                                                onChange={changeform}
                                                placeholder="Email"
                                                id="exampleInputEmail1"
                                                className="form-control"
                                                aria-describedby="emailHelp"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <input
                                                type="password"
                                                name='password'
                                                value={form.password}
                                                onChange={changeform}
                                                placeholder="Password"
                                                className="form-control"
                                                id="exampleInputPassword1"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <input
                                                type="repassword"
                                                name='repassword'
                                                value={form.repassword}
                                                onChange={changeform}
                                                placeholder="Repassword"
                                                className="form-control"
                                                id="exampleInputrePassword1"
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
    )
}
