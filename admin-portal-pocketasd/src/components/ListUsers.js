import { collection, documentId, getDocs, onSnapshot, query, where } from 'firebase/firestore'
import { db } from '../lib/firebase'
import React, { useEffect, useState } from 'react'
import { Grid } from '@material-ui/core'
import { userCollectionRef } from '../lib/firestore.collections'

import '../css/ListUsers.css'
import UserListItem from './UserListItem'

export default function ListUsers() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    //const userCollectionRef = query(collection(db, 'users'), where(documentId(), "!=", "default"))
    const unsubscribe = onSnapshot(userCollectionRef, (snapshot) => {
      const documents = []

      snapshot.forEach((doc) => {
        documents.push(doc)
      })

      const usr = documents.map(item => ({
        data: item.data(),
        id: item.id,
      }))
      setUsers(usr)
    }, (error) => {
      console.log(error)
    }) 

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    console.log(users)
  }, [users])
  
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