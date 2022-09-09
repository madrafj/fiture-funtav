import { Box, Typography } from "@mui/material";
import { bgPrimary, whiteText } from "../utils/style-utils";

const Footer = () => (
  <Box sx={{
    ...whiteText,
    ...bgPrimary,
    display: 'flex',
    justifyContent: 'center',
    pt: 2
  }}>
    <Typography variant="subtitle1">
      FunTav &copy;2022
    </Typography>
  </Box>
)

export default Footer