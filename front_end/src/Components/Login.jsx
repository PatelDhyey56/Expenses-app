import React, { useEffect, useState } from 'react'

export default function Login({ editcus }) {
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
            setForm(initialform)
        }
    }
    const create = async () => {
        const res = await fetch("http://localhost:8000/login", {
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
    
    const update = async () => {
        const res = await fetch(`http://localhost:8000/login/${editcus._id}`, {
            method: "PATCH",
            body: JSON.stringify(form),
            headers: {
                'content-type': 'application/json',
            }
        })
        const data = await res.json()
        console.log(data);
        reload(res)
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
                                        <div className="mb-3">
                                            <input
                                                type="email"
                                                name='mail'
                                                value={form.email}
                                                onChange={changeform}
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
                                                value={form.password}
                                                onChange={changeform}
                                                placeholder="Password"
                                                className="form-control"
                                                id="exampleInputPassword1"
                                                required
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
                                                required
                                            />
                                        </div>
                                        {
                                            editcus.fname !== undefined &&
                                            <button type="submit" className="btn btn-primary">
                                                Update
                                            </button>
                                        }
                                        {
                                            editcus.fname === undefined &&
                                            <button type="submit" className="btn btn-primary">
                                                Submit
                                            </button>
                                        }
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
