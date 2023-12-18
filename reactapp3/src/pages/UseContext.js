import {useState, createContext, useContext} from 'react'
const myContext = createContext();

export default function UseContext() {
   const [user, setUser] = useState(["Potato", "Atta", "Onion", "Sugar"]);
     
   return (
    <div className='container'>
        <myContext.Provider value={user}>
        <h2>{`${user[0]}, Component 1`}</h2>
        <Component2/>
        </myContext.Provider> 
    </div>
  )
}
function Component2(){
    return(
        <>
           <h3>Component 2</h3>
           <Component3 />
        </>
    )
}

function Component3(){
   const user = useContext(myContext);
    return(
        <>
           <h3>Component 3 {user[3]}</h3>
        </>
    )
}