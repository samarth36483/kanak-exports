import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
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
  const [openListIndex, setOpenListIndex] = useState(Array<number>);

  const onHeaderClick = (index: number) => {
    let updatedIndexList;
    if (openListIndex.includes(index)) {
      updatedIndexList = openListIndex.filter(item => item !== index);
    } else {
      updatedIndexList = [...openListIndex, index];
    }
    setOpenListIndex(updatedIndexList);
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
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 240,
          },
        }}
      >
        <Box>
          <List>
            {appMenu.map((menuItem, index) => (
              <Fragment key={index}>
                <ListItemButton onClick={() => onHeaderClick(index)}>
                  <ListItemText sx={{ color: "primary.main" }}>
                    <Typography variant="h6">{menuItem.title}</Typography>
                  </ListItemText>
                  {openListIndex.includes(index) ? (
                    <ExpandLess sx={{ color: "primary.main" }} />
                  ) : (
                    <ExpandMore sx={{ color: "primary.main" }} />
                  )}
                </ListItemButton>
                {openListIndex.includes(index) &&
                  menuItem.menu.map(item => (
                    <ListItemButton
                      key={item.text}
                      onClick={() => onItemClick(item.link)}
                    >
                      <ListItemText
                        primary={item.text}
                        sx={{ color: "primary.main" }}
                      />
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
