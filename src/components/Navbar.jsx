import React from 'react'
import './navbar.css';
import IMG from '../assets/search.png';

const Navbar = ({openForm,setOpenForm}) => {
  return (
    <div className='navbar'>
         <div className='search'>
            <input type='text' name='search' placeholder='search...'/>

            <img src={IMG} alt=''/>
         </div>
          <div className='add' onClick= { ()=> setOpenForm(!openForm)}>
             <span className='add_symbol'>+</span>
          </div>
    
    </div>
  )
}

export default Navbar