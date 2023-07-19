import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import TextField from "@material-ui/core/TextField";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState, useEffect } from "react"

export default function Expenceadd({ editcusex, fetchdata, setEditcusex }) {
    const initialvalue =
    {
        title: '',
        price: '',
        date: '',
    }
    const [value, setValue] = useState(initialvalue);

    const changevalue = (e) => {
        setValue({
            ...value, [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (editcusex !== {})
            setValue(editcusex)
    }, [editcusex])

    const datechange = (newValue) => {
        setValue({
            ...value, date: newValue
        })
    }
    const submitvalue = async (e) => {
        e.preventDefault();
        const res = editcusex.title === undefined ? create() : update()
        console.log(res)
    }
    function reload(res) {
        if (res.ok) {
            setValue(initialvalue)
            fetchdata()
        }
    }
    const create = async () => {
        if (value.title === undefined || value.price === undefined || value.title === initialvalue.title || value.price === initialvalue.price) {
            window.alert(" plese enter value in text field!!")
        }

        else {
            const res = await fetch("http://localhost:8000/expence", {
                method: "POST",
                body: JSON.stringify(value),
                headers: {
                    'content-type': 'application/json',
                }
            })
            const data = await res.json()
            console.log(data);
            reload(res)
        }
    }

    const update = async () => {
        const res = await fetch(`http://localhost:8000/expence/${editcusex._id}`, {
            method: "PATCH",
            body: JSON.stringify(value),
            headers: {
                'content-type': 'application/json',
            }
        })
        const data = await res.json()
        console.log(data);
        setEditcusex({})
        reload(res)
    }
    return (
        <div>
            <div className='m-5'>
                <div className='m-5'>
                    <div className='m-5'>
                        <div className='m-5'>
                            <div className='m-5'>
                                <div className='m-5'>
                                    <Typography variant="h6">Add new expance </Typography>
                                    <Box
                                        component="form"
                                        sx={{
                                            '& > :not(style)': { m: 1, width: '25ch' },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField required id="outlined-basic" label="Title" variant="outlined" name="title" value={value.title} onChange={changevalue} />
                                        <TextField required id="outlined-basic" label="Price" variant="outlined" name="price" value={value.price} onChange={changevalue} type="number" />
                                        <LocalizationProvider dateAdapter={AdapterDayjs} onChange={datechange} inputFormet="DD/MM/YYYY">
                                            <DatePicker />
                                        </LocalizationProvider>
                                        <Button variant="contained" onClick={submitvalue}>Contained</Button>
                                    </Box>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
