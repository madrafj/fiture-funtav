import {  AirplanemodeActiveTwoTone, Close, Menu } from "@mui/icons-material"
import { AppBar, Box, Button, Drawer, Icon, IconButton, List, ListItemButton, ListItemText, Stack, Toolbar, Typography } from "@mui/material"
import { NavLink } from "react-router-dom"
import { useBoolean } from "../utils/hooks"
import { bgPrimary, hideOnMobile, showOnMobile, whiteText } from "../utils/style-utils"

const NavBar = () => {
  const [open, setOpen] = useBoolean()

  return (
    <>
      <AppBar elevation={0} sx={{ zIndex: 1201 }}>
        <Toolbar>
          <Icon>
            <AirplanemodeActiveTwoTone />
          </Icon>
          <Typography variant="h6" flexGrow={1} mx={2}>
            FunTav
          </Typography>
          <Stack
            sx={{ ...hideOnMobile }}
            direction="row"
            spacing={4}
            justifyContent="flex-end"
            mr={4}
          >
            <Button sx={{ ...whiteText }} component={NavLink} to="/">
              Home
            </Button>
            <Button sx={{ ...whiteText }} component={NavLink} to="/register">
              Custom Plan
            </Button>
            <Button sx={{ ...whiteText }} component={NavLink} to="/smart-plan">
              Smart Plan
            </Button>
            <Button sx={{ ...whiteText }} component={NavLink} to="/about">
              About Us
            </Button>
          </Stack>
          <IconButton
            onClick={setOpen.toggle}
            sx={{
              ...whiteText,
              ...showOnMobile
            }}
          >
            {open ? <Close /> : <Menu />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="top" open={open} onClose={setOpen.off}>
        <Box sx={{ ...bgPrimary, ...whiteText }}>
          <Toolbar />
          <List>
            <ListItemButton component={NavLink} to="/">
              <ListItemText primary="Home" />
            </ListItemButton>
            <ListItemButton component={NavLink} to="/about">
              <ListItemText primary="About Us" />
            </ListItemButton>
            <ListItemButton component={NavLink} to="/register">
              <ListItemText primary="Custom Plan" />
            </ListItemButton>
            <ListItemButton component={NavLink} to="/smart-plan">
              <ListItemText primary="Smart Plan" />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
    </>
  )
}

export default NavBar