import { Grid } from "@mui/material"
import LPCard from "../components/lp-card"
import Page from "../components/page"

const packages = [
  {
    title: '4D3N Surabaya 14 Sept',
    subtitle: 'Business class airplane, 4 stars Hotel only Rp 9millions '
  },
  {
    title: '4D3N Surabaya 14 Sept',
    subtitle: 'Business class airplane, 4 stars Hotel only Rp 12millions '
  },
  {
    title: '4D3N Bali 16 Sept',
    subtitle: 'Business class airplane, 4 stars Hotel only Rp 13millions '
  },
  {
    title: '3D2N Makasar 24 Sept',
    subtitle: 'Business class airplane, 4 stars Hotel only Rp 10millions '
  },
]

const SmartPlans = () => {
  return (
    <Page>
      <Grid container maxwidth="720px">
        {packages.map((pkgProps, i) => (
          <Grid item xs={12} md={6}>
            <LPCard
              {...pkgProps}
              key={i}
              actionLabel="Get It Now"
              href="#"
            />
          </Grid>
        ))}
      </Grid>
    </Page>
  )
}

export default SmartPlans