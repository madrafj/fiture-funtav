import { Grid } from "@mui/material"

const GridCenter = ({ children }) => (
  <Grid container>
    <Grid item xs />
    <Grid item xs={12} sm={10} md={6}>
      {children}
    </Grid>
    <Grid item xs />
  </Grid>
)

export default GridCenter