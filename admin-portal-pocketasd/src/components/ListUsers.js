import React, { useEffect, useState } from "react"
import { Grid } from "@material-ui/core"
import '../css/ListUsers.css'
import UserListItem from './UserListItem.js'
import { db } from '../firebase'
import { collection, documentId, getDocs, query, where } from "firebase/firestore"

export default function ListUsers() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetchUserData()
  }, []);

  useEffect(() => {
    console.log(users)
  }, [users])

  async function fetchUserData() {
    const userCollectionRef = query(collection(db, 'users'), where(documentId(), "!=", "default"))
    getDocs(userCollectionRef)
      .then(response => {
        const usr = response.docs.map(doc => ({
          data: doc.data(),
          id: doc.id,
        }))
        setUsers(usr)
      })
      .catch(error => console.log(error.message))
  
    /*
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      setUsers(...users, doc)
    })*/
  }

  return (
    <div className="userList">
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <UserListItem data={user.data}/>
          </li>
        ))}
      </ul>
    </div>
  )
}