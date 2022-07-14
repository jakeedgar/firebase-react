import React from 'react';
import { useEffect, useState } from 'react';
import { db } from '../../firebase'
import { 
  addDoc,
  collection, 
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
  } from 'firebase/firestore'

  import './styles.css'

const Todo = () => {


  const [newUserName, setNewUserName] = useState('');
  const [newUserAge, setNewUserAge] = useState(0);
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, 'users');

  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: newUserName, age: Number(newUserAge) });
  };

  const updateUser = async (id, age) => {
    const userDoc = doc(db, "users", id)
    const newFields = {age: age + 1}
    await updateDoc(userDoc, newFields)
  };

  const updateUserAgeYoung = async (id, age) => {
    const userDoc = doc(db, "users", id)
    const newFields = {age: age - 1}
    await updateDoc(userDoc, newFields)
  }


  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id) 
    await deleteDoc(userDoc);
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
    };
    getUsers()
  })

  return(
    <div className="App">
      <input 
      placeholder="Enter Name..." 
      onChange={(e) => {
        setNewUserName(e.target.value)}} 
      />
      <input 
      type="number" 
      placeholder="Enter Age..." 
      onChange={(e) => {
        setNewUserAge(e.target.value)
      }}
      />
      <button className="my-btn" onClick={createUser}>Create User</button>
      {users.map((user, index) => {
      return (
        <div
        key={index}>
          <h1>Name: {user.name}</h1>
          <h1>Age: {user.age}</h1>
          <button className="my-btn" onClick={() => {updateUser(user.id, user.age)}}>Increase Age</button>
          <button className="my-btn" onClick={() => {updateUserAgeYoung(user.id, user.age)}}>Decrease Age</button>
          <button className="my-btn" onClick={() => {deleteUser(user.id)}}>Delete Me</button>
        </div>
      );
      })}
    </div>
  );
}

export default Todo;
