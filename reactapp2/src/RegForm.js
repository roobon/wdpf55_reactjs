import React, { useState } from 'react'


export default function RegForm() {
  const [inputs, setInputs] = useState({});
  const changeHandler = (e) => {
        const name =  e.target.name;
        const value = e.target.value;
        setInputs(values=>({...values, [name]:value}));
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    alert(inputs.fname + "\n" + inputs.email + "\n" + inputs.phone + "\n" + inputs.district)
  }

  console.log(inputs);
  
    return (
    <div>
        <h2>Registration Form</h2>
        <form onSubmit={handleSubmit}>
        <input type="text" name='fname' value={inputs.fname} onChange={changeHandler} /> <br />
        <textarea name="address" cols="30" rows="5" value={inputs.address} onChange={changeHandler}></textarea><br />
        <select name='district' onChange={changeHandler}>
            <option value="">Select One</option>
            <option>Dhaka</option>
            <option>Rangpur</option>
            <option>Rajshahi</option>
            <option>Khulna</option>
        </select><br />
        <input type="submit" name='submit' value="SUBMIT" />
        </form>
    </div>
  )
}
