import { Grid } from "@material-ui/core"
import '../css/AdminListItem.css'

export default function AdminListItem() {
  return (
    <Grid container className="grid">
      <Grid container item xs={1}/>
      <Grid container item xs={3}>
        <div className="avatar">
          <text>profile picture</text>
        </div>
      </Grid>
      <Grid container item xs={1}/>
      <Grid container item xs={6}>
        <Grid container>
          <Grid container item xs={12}>
            <text className="fullNameText">FULL NAME</text>
          </Grid>
          <Grid container item xs={12}>
            <text className="emailText">EMAIL</text>
          </Grid>
        </Grid>
      </Grid>
      <Grid container item xs={12}>
        <hr></hr>
      </Grid>
    </Grid>
  )
}