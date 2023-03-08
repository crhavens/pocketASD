import { Grid } from '@material-ui/core'
import React, { useEffect } from 'react'

import '../css/UserListItem.css'

export default function UserListItem(props) {
  function handleFirstName() {
    return (props.data.firstName) ? props.data.firstName : "NO NAME" 
  }

  function handleLastName() {
    return (props.data.lastName) ? props.data.lastName : "NO NAME"
  }

  function handleEmail() {
    return (props.data.email) ? props.data.email : "NO EMAIL"
  }

  const handleClick = () => {
    props.callback(props.id, props.data)
  }
  return (
    <div onClick={handleClick}>
      <Grid container className="grid">
        <Grid container item xs={3}>
          <div className="avatar">
            <p>profile picture</p>
          </div>
        </Grid>
        <Grid container item xs={6}>
          <Grid container>
            <Grid container item xs={12}>
              <p className="fullNameText" placeholder="first name">{handleFirstName() + " " + handleLastName()}</p>
            </Grid>
            <Grid container item xs={12}>
              <p className="emailText">{handleEmail()}</p>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item xs={12}>
          <hr></hr>
        </Grid>
      </Grid>
    </div>
  )
}