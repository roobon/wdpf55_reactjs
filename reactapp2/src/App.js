import './App.css';

function getTitle(title) {
  return title;
  }
  const numbers = [10, 20, 30, 40, 50];

function App() {
  return (
    <div>
      <h1>{getTitle("Hey")} World </h1>
        <Search />
        <hr />
       <List/>
    </div>
  );
}
function List(){
  return (
    <ol>
    {numbers.map(function(num){
      return <li> {num} </li> 
    })}
    </ol>
  )
}
function Search(){
  return(
    <>
      <label htmlFor="search">Search: </label>
        <input id="search" type="text" />
    </> 
  )
}
export default App;
