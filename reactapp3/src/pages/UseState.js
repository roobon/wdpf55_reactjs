import {React, useState} from 'react'



export default function UseState() {
    const [user, SetUser] = useState({name:"Masum", email:"masum@gmail.com", phone:"017855222"});

    console.log(user);
    
    const handleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        SetUser((values)=>({...values, [name]:value}))
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        alert("Your data submitted");
        console.log(user);
    }
    
    return (
    <>
    <div className='container'>
        <h1>UseState Learning</h1>
        <h2>User Profile</h2>
        <p>
            {user.name} <br />
            {user.email} <br />
            {user.phone}
        </p>
        <form onSubmit={handleSubmit}>
            <input type="text" value={user.name} onChange={handleChange} name='name' /><br />
            <input type="text" value={user.email} onChange={handleChange} name='email' /><br />
            <input type="text" value={user.phone} onChange={handleChange} name='phone' /><br />
            <input type="submit" value="UPDATE" />
        </form> 
       
    </div>
   
    </>
  )
}
