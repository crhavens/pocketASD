import { Grid } from "@material-ui/core"

import '../css/Home.css'


export default function Home() {
  return (
    <div>
      <Grid 
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid container item xs={7}>
          <div className="grid-item">
            <div className="colorBlue"/>
          </div>
        </Grid>
        <Grid container item xs={2}>
          <div className="grid-item">
            <p>test!</p>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}
