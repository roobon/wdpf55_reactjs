import React, {useEffect,useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Users() {
    useEffect( () => {
        alluser();
      }, []); 
    
      const [isuser, setuser] = useState([]);

      const alluser = async () => {
        axios.get(`http://localhost/wdpf55_react/reactapp3/api/users.php`).then(result => {
            console.log(result.data.userlist)
            setuser(result.data.userlist);
          })     
      }  
      const delconfirm = (id) => {
        if(window.confirm("Are you sure to delete?")){
            deleteUser(id);
        }
        
      } 
      const deleteUser = async (id) => { 
          axios.post(`http://localhost/wdpf55_react/reactapp3/api/delete_user.php`, { 
            userids: id,
          })
          .then(res => {
            setuser([]);
            alluser();
            return;
           })          
      }

  if(isuser){
    return (
      <div className='container'>
          <h1>User List</h1>
          <table className='table table-bordered'>
              <thead>
              <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Date</th>
                  <th></th>
              </tr>
              </thead>                 
              {
                  isuser.map((item)=>
                    
                      <tbody>
                      <tr>
                      <td>{item.user_id}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.date}</td>
                      <td><button onClick={()=>delconfirm(item.user_id)}>Delete</button></td>
                      </tr> 
                      </tbody>
                  )
              }
          </table>
          <Link className='btn btn-success' to="/newuser">New User</Link>
      </div>
    )
  }  else {
    return(
      <div className='container'>
        <h1>No Data Found</h1> 
        <Link className='btn btn-success' to="/newuser">New User</Link> 
      </div>
      
    )
  }  

 
}
