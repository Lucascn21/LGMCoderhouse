import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import menuItems from "../data/menuItems";
import CartWidget from "./CartWidget";
import AboutUsMenu from "./AboutUsMenu";
import aboutUsPages from "../data/aboutUsPages";

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            AnotherBookstore
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {menuItems.map((menuItem) => (
                <MenuItem key={menuItem} onClick={handleCloseNavMenu}>
                  <Button
                    key={menuItem}
                    component="a"
                    href={`/${menuItem}`}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 0.25, color: "white", display: "block" }}
                  >
                    {menuItem}
                  </Button>
                </MenuItem>
              ))}
              {aboutUsPages.map((menuItem) => (
                <MenuItem key={menuItem} onClick={handleCloseNavMenu}>
                  <Button
                    key={menuItem}
                    component="a"
                    href={`/${menuItem}`}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 0.25, color: "white", display: "block" }}
                  >
                    {menuItem}
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            ABookstore
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {menuItems.map((menuItem) => (
              <Button
                key={menuItem}
                component="a"
                href={`/${menuItem}`}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {menuItem}
              </Button>
            ))}
            <AboutUsMenu></AboutUsMenu>
          </Box>
          <CartWidget cartValue={5} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
