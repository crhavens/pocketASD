import { Grid } from "@material-ui/core"
import ListUsers from "./ListUsers.js"
import '../css/UserInformation.css'

export default function UserInformation() {
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
                <ListUsers/>
              </div>

            </div>
          </Grid>
          <Grid container item xs={1}/>
          <Grid container item xs={8}>
            <div className="grid-item">
              <div className="userList">
                <p>here will be info and buttons to change the admin access of the selected user.</p>
              </div>
            </div>
          </Grid>
      </Grid>
    </>
  )
}