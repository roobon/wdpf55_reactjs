import './App.css';

const person = {
  name:"Masum",
  address: "Mirpur",
  email: "masum@gmail.com"
}

const list = [
  {
  title: 'React',
  url: 'https://reactjs.org/',
  author: 'Jordan Walke',
  num_comments: 3,
  points: 4,
  objectID: 0,
  },
  {
  title: 'Redux',
  url: 'https://redux.js.org/',
  author: 'Dan Abramov, Andrew Clark',
  num_comments: 2,
  points: 5,
  objectID: 1,
  },
  ];

function App() {
 const title = "My App Title";
 
  return (
   <div>
     <h1>{title}</h1>
     <p>This is react component coming from App.js</p>
     <p>Name: {person.name}</p> 
     <p>Address: {person.address}</p> 
     <p>Email: {person.email}</p> 
     <hr />
     <ul>
     {list.map(function (x){
        return <li>Title: {x.title} URL: {x.url}</li>
     })
     }
     </ul>
   </div>   
  );
}

export default App;
