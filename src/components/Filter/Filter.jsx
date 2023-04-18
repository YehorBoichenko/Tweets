/**

A React component that displays a filter button and a drop-down menu with filtering options.
@param {string} value - The current selected filter option.
@param {function} onChange - A function that is called when a new filter option is selected.
@returns {JSX.Element} - A React component.
*/
import { useState } from "react";
import {
  Button,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
  Fade,
} from "@mui/material";
import { FilterAlt } from "@mui/icons-material/";
import { statusFilters } from "../../utils/constants/constants";
import {
  filterButton,
  primaryText,
  primaryIcon,
  menuItems,
} from "./FilterStyles";
export const Filter = ({ value = "Show all", onChange }) => {
  const [anchorEl, setAnchorEl] = useState("");
  const [selectedItem, setSelectedItem] = useState(value);

  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Tooltip title="Filter" placement="left" arrow>
        <Button
          id="fade-button"
          aria-controls={open ? "fade-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={filterButton}
        >
          <Typography sx={primaryText}>
            <span>{value}</span>
          </Typography>

          <FilterAlt sx={primaryIcon} />
        </Button>
      </Tooltip>

      <Menu
        id="fade-menu"
        MenuListProps={{ "aria-labelledby": "fade-button" }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {statusFilters.map((item) => {
          return (
            <MenuItem
              key={item}
              disabled={item === selectedItem}
              selected={item === selectedItem}
              onClick={() => {
                onChange(item, setAnchorEl, setSelectedItem);
              }}
              sx={menuItems}
            >
              {item}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};
