import React from 'react';
import { useState } from 'react';


export default function MyForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  console.log(name);
  console.log(email);
  return (
    <div>
        <h3>Entry Form</h3>
        <form action="">
            <input type="text" name='name' value={name} onChange={(e)=>setName(e.target.value)} /><br/>
            <input type="email" name='email' value={email} onChange={(e)=>setEmail(e.target.value)} />

        </form>
    </div>
  )
}
