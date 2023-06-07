import React from 'react'
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
// import axios from 'axios';

export default function Home({ cus , setEditcus}) {
    
      const deleteform=(_id)=>{
        if(!window.confirm("Are you sure!!")) return;
        const res =fetch(`http://localhost:8000/login/${_id}`,{
          method :"DELETE"
        })
        if(res.ok){
          window.alert("Deleted...")
          console.log(_id)
        }
        
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
                                        <th scope="col">Edit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cus.map((e) => (
                                        <tr key={e._id}>
                                            <td>{e.fname}</td>
                                            <td>{e.lname}</td>
                                            <td>{e.email}</td>
                                            <td className='m-5'>
                                                <IconButton aria-label="edit" onClick={()=>{setEditcus(e)}}>
                                                    <EditTwoToneIcon />
                                                </IconButton>
                                                <IconButton aria-label="delete" onClick={()=>{deleteform(e._id)}}>
                                                    <DeleteIcon />
                                                </IconButton>
                                            </td>
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
