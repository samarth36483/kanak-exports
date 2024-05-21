import { Button, IconButton, Menu, MenuItem } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Fragment, useState, cloneElement } from "react";
import { useNavigate } from "react-router-dom";
import { appMenu } from "../data/app-menu";
import { home } from "../data/home";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import MenuIcon from "@mui/icons-material/Menu";
import NavDrawer from "./nav-drawer.component";

interface NavbarProps {}

interface ElevationProps extends NavbarProps {
  children: React.ReactElement;
}

function ElevationScroll(props: ElevationProps) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Navbar = (props: NavbarProps) => {
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (path: string) => {
    setAnchorElUser(null);
    if (path) {
      navigate(path);
    }
  };

  return (
    <>
      <ElevationScroll {...props}>
        <AppBar position="sticky">
          <Toolbar>
            <IconButton
              color="inherit"
              edge="start"
              className="md:hidden"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h4"
              className="cursor-pointer pr-6 text-center w-full md:w-max"
              onClick={() => navigate("/")}
            >
              {home.title}
            </Typography>
            <Box className="grow-[1] hidden md:flex">
              {appMenu.map(menuItem => (
                <Fragment key={menuItem.title}>
                  <Button
                    id={menuItem.title}
                    className="text-inherit"
                    onClick={handleOpenUserMenu}
                  >
                    {menuItem.title}
                  </Button>
                  <Menu
                    anchorEl={anchorElUser}
                    open={anchorElUser?.id == menuItem.title}
                    onClose={() => handleCloseUserMenu("")}
                  >
                    {menuItem.menu.map(item => (
                      <MenuItem
                        key={item.text}
                        onClick={() => handleCloseUserMenu(item.link)}
                      >
                        <Typography className="text-center">
                          {item.text}
                        </Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Fragment>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <NavDrawer open={mobileOpen} handleToggle={handleDrawerToggle} />
    </>
  );
};

export default Navbar;
