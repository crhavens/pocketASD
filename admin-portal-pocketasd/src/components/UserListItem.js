import { Grid } from '@material-ui/core'
import React from 'react'

import '../css/UserListItem.css'

export default function UserListItem( data ) {
  return (
    <Grid container className="grid">
      <Grid container item xs={1}/>
      <Grid container item xs={3}>
        <div className="avatar">
          <p>profile picture</p>
        </div>
      </Grid>
      <Grid container item xs={1}/>
      <Grid container item xs={6}>
        <Grid container>
          <Grid container item xs={12}>
            <p className="fullNameText" placeholder="first name">{data.data.firstName + " " + data.data.lastName}</p>
          </Grid>
          <Grid container item xs={12}>
            <p className="emailText">{data.data.email}</p>
          </Grid>
        </Grid>
      </Grid>
      <Grid container item xs={12}>
        <hr></hr>
      </Grid>
    </Grid>
  )
}