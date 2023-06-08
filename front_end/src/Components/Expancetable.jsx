import React from 'react'
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import dayjs from 'dayjs';
// import axios from 'axios';

export default function Expancetable({ cusex , setEditcusex }) {
  const setdate=(date)=>{
    return dayjs(date).format("DD-MMM-YYYY")
  }
  const deleteform = (_id) => {
    if (!window.confirm("Are you sure!!")) return;
    const res = fetch(`http://localhost:8000/expence/${_id}`, {
      method: "DELETE"
    })
    if (res.ok) {
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
                    <th scope="col">Title</th>
                    <th scope="col">Price</th>
                    <th scope="col">Date</th>
                    <th scope="col">Edit</th>
                  </tr>
                </thead>
                <tbody>
                  {cusex.map((e) => (
                    <tr key={e._id}>
                      <td>{e.title}</td>
                      <td>{e.price}</td>
                      <td>{setdate(e.date)}</td>
                      <td className='m-5'>
                        <IconButton aria-label="edit"  onClick={()=>{setEditcusex(e)}} >
                          <EditTwoToneIcon />
                        </IconButton>
                        <IconButton aria-label="delete" onClick={() => { deleteform(e._id) }}>
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
