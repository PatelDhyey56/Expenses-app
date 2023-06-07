import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState } from "react"

export default function Expenceadd() {
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

    const datechange = (newValue) => {
        setValue({
            ...value, date : newValue
        })
    }
    const submitform = async (e) => {
        e.preventDefault();
        const res = await fetch("http://localhost:8000/expence", {
            method: "POST",
            body: JSON.stringify(value),
            headers: {
                'content-type': 'application/json',
            }
        })
        const data = await res.json()
        console.log(data);
    }
    return (
        <div>
            <div className='m-5'>
                <div className='m-5'>
                    <div className='m-5'>
                        <div className='m-5'>
                            <div className='m-5'>
                                <div className='m-5'>
                                    <form onSubmit={submitform}>
                                    <Typography variant="h6">Add new expance </Typography>
                                    <Box
                                        component="form"
                                        sx={{
                                            '& > :not(style)': { m: 1, width: '25ch' },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField id="outlined-basic" label="Title" variant="outlined" name="title" value={value.title} onChange={changevalue} />
                                        <TextField id="outlined-basic" label="Price" variant="outlined" name="price" value={value.price} onChange={changevalue} />
                                        <LocalizationProvider dateAdapter={AdapterDayjs} onChange={datechange} inputFormet="DD/MM/YYYY">
                                            <DatePicker />
                                        </LocalizationProvider>
                                        <Button variant="contained">Contained</Button>
                                    </Box>
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
