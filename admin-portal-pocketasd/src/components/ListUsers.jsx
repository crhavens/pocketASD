import { onSnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Grid } from '@material-ui/core'
import { userCollectionRef } from '../lib/firestore.collections'

import '../css/ListUsers.css'
import UserListItem from './UserListItem'

export default function ListUsers({ callback }) {
  const [users, setUsers] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedId, setSelectedId] = useState(0);

  useEffect(() => {
    //const userCollectionRef = query(collection(db, 'users'), where(documentId(), "!=", "default"))
    const unsubscribe = onSnapshot(userCollectionRef, (snapshot) => {
      const documents = []

      snapshot.forEach((doc) => {
        documents.push(doc);
      })

      const usr = documents.map(item => ({
        data: item.data(),
        id: item.id,
      }))
      setUsers(usr);
      setFilterData(usr);
    }, (error) => {
      console.log(error);
    }) 

    return () => unsubscribe();
  }, []);

  const handleSearch = (event) => {
    const getSearch = event.target.value;
    setSearchQuery(getSearch);

    if (getSearch.length > 0) {      
      const searchData = filterData.filter((item) => item.data.lastName && item.data.lastName.toLowerCase().includes(getSearch.toLowerCase()));
      console.log('searchData:', searchData);

      setFilterData(searchData);
    } else {
      setFilterData(users);
    }
  }

  function handleListItemClick(id, data) {
    setSelectedId(id)
    callback(data)
  }
  
  return (
    <div className="listUserContainer">
      <div className="searchBarContainer">
        <input type="text" placeholder="search by last name" value={searchQuery} onChange={(e) => handleSearch(e)} className="searchBar"/>
      </div>
      <div>
        <ul>
          {filterData.map(user => (
            <li className={selectedId == user.id ? "selectedItem" : ""} key={user.id}>
              <UserListItem id={user.id} data={user.data} callback={handleListItemClick}/>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}