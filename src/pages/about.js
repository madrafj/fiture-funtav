import { Typography } from "@mui/material"
import GridCenter from "../components/grid-center"
import Page from "../components/page"

const About = () => (
  <Page>
    <GridCenter>
      <Typography variant="h4" letterSpacing={2} my={2}>About FunTav</Typography>
      <Typography variant="h6" my={2}>
        <strong>FunTav</strong> is a travel and tour companies owned by Mr. Vijay which has been established since 1998, based on Indonesia.
      </Typography>
      <Typography variant="h5" my={2}>
        <strong>FunTav</strong> is specialized on making custom tour and travel inquiries based on customer.
      </Typography>
    </GridCenter>
  </Page>
)

export default About