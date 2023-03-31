import React from 'react'
import './table.css';
// import {clients} from '../utils/index';


const Table = ({users}) => {
  return (
    <div className='table'>
        <table>
            <thead>
                <tr>    
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Number</th>
                    <th>Gender</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
                {users.map((client,index)=>( //map function (loops over array)
                    <tr key={index}>
                        <td>{index+ 1001}</td>
                        <td>{client.name}</td>
                        <td>{client.email}</td>
                        <td>{client.number}</td>
                        <td>{client.gender}</td>
                        <td>{client.city}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Table