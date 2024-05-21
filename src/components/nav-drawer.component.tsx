import { Box, Drawer, List, ListItemButton, ListItemText } from "@mui/material";
import { useState, Fragment } from "react";
import { appMenu } from "../data/app-menu";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";

interface NavDrawerProps {
  open?: boolean;
  handleToggle: () => void;
}

const NavDrawer = ({ open, handleToggle = () => {} }: NavDrawerProps) => {
  const navigate = useNavigate();
  const [openListIndex, setOpenListIndex] = useState(-1);

  const onHeaderClick = (index: number) => {
    setOpenListIndex(prevState => (index !== prevState ? index : -1));
  };

  const onItemClick = (path: string) => {
    if (path) {
      navigate(path);
    }
    handleToggle();
  };

  return (
    <nav>
      <Drawer
        open={open}
        onClose={handleToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 240,
          },
        }}
      >
        <Box className="text-center">
          <List>
            {appMenu.map((menuItem, index) => (
              <Fragment key={index}>
                <ListItemButton onClick={() => onHeaderClick(index)}>
                  <ListItemText primary={menuItem.title} />
                  {openListIndex === index ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                {openListIndex === index &&
                  menuItem.menu.map(item => (
                    <ListItemButton
                      key={item.text}
                      className="text-center"
                      onClick={() => onItemClick(item.link)}
                    >
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                  ))}
              </Fragment>
            ))}
          </List>
        </Box>
      </Drawer>
    </nav>
  );
};
export default NavDrawer;
