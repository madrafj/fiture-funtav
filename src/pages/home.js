import { Box, Container, Grid, ImageList, ImageListItem, Toolbar, Typography } from '@mui/material'
import LPCard from '../components/lp-card'
import Page from '../components/page'

const Home = () => {
  return (
    <>
      <Page>
        <Grid container maxWidth="720px">
          <Grid item xs={12} md={6}>
            <LPCard
              title="Custom Plans"
              subtitle="We'll follow your preferences and calculate your travel itineraries and cost in the best way."
              actionLabel="Apply Now"
              href="/register"
            />
            <LPCard
              title="Smart Plans"
              subtitle="Our best predefined itineraries for your travel with various destination and best price."
              actionLabel="Apply Now"
              href="/smart-plan`"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" color="grey.300">
              <strong>FunTav</strong> is a travel and tour companies owned by Mr. Vijay which has been established since 1998, based on Indonesia.
              <strong>FunTav</strong> is specialized on making custom tour and travel inquiries based on customer.
            </Typography>
          </Grid>
        </Grid>
      </Page>
      <ImageList cols={1} sx={{
        position: 'absolute',
        bottom: '0',
        right: '24px',
        width: '320px',
      }}>
        <ImageListItem>
          <img src="images/airplane.png" alt="bg airplane" />
        </ImageListItem>
        <ImageListItem>
          <img src="images/island.png" alt="bg island" />
        </ImageListItem>
      </ImageList>
    </>
  )
}

export default Home