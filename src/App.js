// import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Table from './components/Table';
import { useState } from 'react';
import Navbar from './components/Navbar';

function App() {
  const[users,setUsers] = useState([]) // statrting me form empty he
  const[openForm,setOpenForm] =useState(false); 
    return (
        <div className='App'>
      
        <Navbar openForm={openForm} setOpenForm={setOpenForm}/>
        {openForm && <Form users={users} setUsers={setUsers} />}
        {users.length == 0 ? <h1>No user registerd </h1> : <Table users={users}/> }
         </div>
  );
}

export default App;
