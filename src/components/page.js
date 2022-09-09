import { Box, Container, Toolbar } from "@mui/material"
import { bgPrimary, whiteText } from "../utils/style-utils"

const primaryStyle = { ...bgPrimary, ...whiteText }

const Page = ({ children }) => (
  <Box
    sx={primaryStyle}
    py={2}
    minHeight="100vh"
  >
    <Toolbar />
    <Container sx={{ position: 'relative', zIndex: 20 }}>
      {children}
    </Container>
  </Box>
)

export default Page