import { useState } from 'react';
import './App.css';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {

  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (newUSer) =>{
    console.log("In add User handler");
    setUsersList((previosState)=>{
      return [newUSer, ...previosState]
  })

  console.log("after udating===>",usersList)

  }


  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList  users={usersList}  />
    </div>
  );
}

export default App;
