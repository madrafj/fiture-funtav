import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const LPCard = ({ title, subtitle, href, actionLabel }) => (
  <Card sx={{ maxWidth: 320, my: 2, backgroundColor: '#fffa' }}>
    <CardContent>
      <Typography variant="h6">
        {title}
      </Typography>
      <Typography variant="subtitle1">
        {subtitle}
      </Typography>
    </CardContent>
    <CardActions>
      <Button component={Link} to={href}>
        {actionLabel}
      </Button>
    </CardActions>
  </Card>
)

export default LPCard