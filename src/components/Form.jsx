import React from 'react'
import './form.css';
import { useState } from 'react';

// props used= ({users,setusers})// data transfer karne ke liye

const Form = ({users ,setUsers}) => {
    // form ka data lene ke liye
    const[formData,setFormData] = useState({
            name:"",
            email:"",
            contact:"",
            address:"",
            city:"",
            dob:"",
            agreed:false
    });

    // handlechange
    const handleChange =(e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setFormData({
            ...formData,
            [name]:value
        });
    }

    // handlesubmit 
    const handlesubmit = (e)=> {
     e.preventDefault();
     const user = { // object
          name:formData.name,
          email:formData.email,
          number:formData.contact,
          gender:formData.gender,
          city:formData.city,
          
     }
     // array object
     setUsers([ 
        ...users,
        user
     ])
     console.log(users);
    }

    // handleReset ka 
    const handleReset =(e) =>{
        e.preventDefault();
        setFormData({
            name:"",
            email:"",
            contact:"",
            address:"",
            city:"",
            dob:"",
            agreed:false
        })
    }


  return (
    <div className='form_body'>
    <h1 className='form_title'>Registration Form</h1>
        <form className='form'>
            <div className='name' >
                <span>Name</span>
                <input name='name' type="text" placeholder='John doe' onChange={handleChange} value={formData.name}  />
            </div>
            <div className='email'>
                <span>Email</span>
                <input name='email' type="email" placeholder='john@gmail.com' onChange={handleChange} value={formData.email}/>
            </div>
            <div className='contact'>
                <span>Contact</span>
                <input name='contact' type="number" placeholder='7586948595' onChange={handleChange} value={formData.contact}/>
            </div>
            <div className='address'>
                <span>Address</span>
               <textarea name='address' type="text" rows={5} cols={30} placeholder='Address' onChange={handleChange} value={formData.address}/>
            </div>
            <div className='gender'>
                <span>Gender</span>
                <div>
                    <input name='gender' type="radio" onChange={handleChange} value={formData.gender="male"} /><span>Male</span>
                    <input name='gender' type="radio" onChange={handleChange} value={formData.gender="female"}/><span>Female</span>
                </div>
            </div>
            <div className='DOB'>
                <span>DOB</span>
                <input name='dob' onChange={handleChange} value={formData.dob} type="date"/>
             </div>
             <div className='city'>
                <span>City</span>
                 <select name="city" id="city" onChange={handleChange} value={formData.city}>
                  <option >---Select city---</option>
                  <option >Ahmedabad</option>
                  <option >Sirohi</option>
                  <option >Ghandhinagar</option>
                  <option >Mumbai</option>

                 </select>
             </div>
            <div className='agree'>
            <input name='agreed'    type="checkbox" onChange={handleChange} value={formData.agreed =true}/>
            <span> I have read all the <a href='#'>terms</a> and <a href='#'>condition</a> </span>
            </div>
            <div className='buttons'>
               <button type='submit' onClick={handlesubmit}>Register</button>
               <button type='reset' onClick={handleReset}>Reset</button>
             </div>
        </form>
    </div>
  )
}

export default Form