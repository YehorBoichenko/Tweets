/**

The Navigation component displays a list of links to different routes based on ROUTES_LIST.
It uses MUI's Box, List, ListItem, and Button components to create the UI.
*/
import { NavLink } from "react-router-dom";
import { Box, List, ListItem, Button } from "@mui/material";
import { ROUTES_LIST } from "../../utils/constants/constants";
import { navList, navItem, button } from "./NavigationStyles";
export const Navigation = () => {
  return (
    <Box component="nav">
      <List sx={navList}>
        {ROUTES_LIST.map(({ name, path }) => {
          return (
            <ListItem key={name} sx={navItem}>
              <Button component={NavLink} to={path} sx={button}>
                {name}
              </Button>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};
