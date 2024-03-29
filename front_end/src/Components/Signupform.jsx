import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"

export default function Signupform({ editcus, fetchdata, setEditcus }) {
    const navigate = useNavigate()
    const initialform =
    {
        fname: '',
        lname: '',
        email: '',
        password: '',
        repassword: '',
    }
    const [form, setForm] = useState(initialform)

    const changeform = (e) => {
        setForm({
            ...form, [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (editcus !== {})
            setForm(editcus)
    }, [editcus])

    const submitform = async (e) => {
        e.preventDefault();
        const res = editcus.fname === undefined ? create() : update()
        console.log(res)
    }
    function reload(res) {
        if (res.ok) {
            navigate('/login')
            setForm(initialform)
            fetchdata()
        }
    }
    const create = async () => {
        if (form.password === form.repassword) {
            const res = await fetch("http://localhost:8000/signup", {
                method: "POST",
                body: JSON.stringify(form),
                headers: {
                    'content-type': 'application/json',
                }
            })
            const data = await res.json()
            console.log(data);
            reload(res)
        }
        else {
            window.alert("plese enter valid details......")
            setForm(initialform)
        }
    }

    const update = async () => {
        const res = await fetch(`http://localhost:8000/signup/${editcus._id}`, {
            method: "PATCH",
            body: JSON.stringify(form),
            headers: {
                'content-type': 'application/json',
            }
        })
        const data = await res.json()
        console.log(data);
        setEditcus({})
        reload(res)
    }
    return (
        <div className='m-5'>
            <div className='m-5'>
                <div className='m-5'>
                    <div className='m-5'>
                        <div className='m-5'>
                            <div className='m-5'>
                                <div className='card m-5'>
                                    <div className="text-center">
                                        <form onSubmit={submitform}>
                                            <div class="text-center">
                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk6qKlLk50SrpDFulviyCpf0E2AcU9ncWXpA&usqp=CAU" class="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                                                    width="200px" alt="profile" />
                                            </div>
                                            <div className="m-3">
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
                                                            required
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
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="m-3">
                                                <input
                                                    type="email"
                                                    name='email'
                                                    value={form.email}
                                                    onChange={changeform}
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
                                                    value={form.password}
                                                    onChange={changeform}
                                                    placeholder="Password"
                                                    className="form-control"
                                                    id="exampleInputPassword1"
                                                    required
                                                />
                                            </div>
                                            <div className="m-3">
                                                <input
                                                    type="password"
                                                    name='repassword'
                                                    value={form.repassword}
                                                    onChange={changeform}
                                                    placeholder="Repassword"
                                                    className="form-control"
                                                    id="exampleInputrePassword1"
                                                    required
                                                />
                                            </div>
                                            {
                                                editcus.fname !== undefined &&
                                                <div className="m-3">
                                                    <button type="submit" className="btn btn-primary">
                                                        Update
                                                    </button>
                                                </div>
                                            }
                                            {
                                                editcus.fname === undefined &&
                                                <div className="m-3">
                                                    <button type="submit" className="btn btn-primary">
                                                        Submit
                                                    </button>
                                                </div>
                                            }
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
