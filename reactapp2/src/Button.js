import React from 'react'

const shoot = () => {
    alert("Great Shot");
}

const shoot1 = (a) => {
    alert(a);
}

export default function ButtonOutside() { 
  return (
    <>
    <button onClick={shoot}>Button Outside</button>
    <button onClick={()=>{shoot1("Goal")}}>Button Outside with parameter</button>
    </>
  )
}
