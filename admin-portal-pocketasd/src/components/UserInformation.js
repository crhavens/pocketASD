import { Grid } from '@material-ui/core'
import React, { useEffect, useState } from "react"

import ListUsers from './ListUsers'
import '../css/UserInformation.css'
import DisplayUserInformation from './DisplayUserInformation'

export default function UserInformation() {
  const [selectedUser, setSelectedUser] = useState({})

  useEffect(() => {
    console.log(selectedUser)
  }, [selectedUser])

  return (
    <>
      <h1>User Information</h1>
      <Grid 
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Grid container item xs={2}>
            <div className="grid-item">
              <div className="userList">
                <ListUsers callback={setSelectedUser}/>
              </div>

            </div>
          </Grid>
          <Grid container item xs={1}/>
          <Grid container item xs={8}>
            <div className="grid-item">
              <div className="userDisplay">
                <DisplayUserInformation data={selectedUser} callback={setSelectedUser}/>
              </div>
            </div>
          </Grid>
      </Grid>
    </>
  )
}