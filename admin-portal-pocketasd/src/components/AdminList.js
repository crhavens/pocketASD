import { Grid } from "@material-ui/core"
import AdminListItem from "./AdminListItem.js"
import '../css/AdminList.css'

export default function AdminList() {
  return (
    <>
      <h1>AdminList</h1>
      <Grid 
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Grid container item xs={2}>
            <div className="grid-item">
              <div className="userList">
                <AdminListItem/>
                <AdminListItem/>
                <AdminListItem/>
                <AdminListItem/>
                <AdminListItem/>
                <AdminListItem/>
              </div>

            </div>
          </Grid>
          <Grid container item xs={1}/>
          <Grid container item xs={8}>
            <div className="grid-item">
              <div className="userList">
                <text>here will be info and buttons to change the admin access of the selected user.</text>
              </div>
            </div>
          </Grid>
      </Grid>
    </>
  )
}