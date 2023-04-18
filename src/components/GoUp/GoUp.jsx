/**

Renders a "Go Up" button that when clicked, scrolls the page to the top.
*/
import { Fab } from "@mui/material";
import UpIcon from "@mui/icons-material/KeyboardArrowUp";
import { scrollUp } from "./GoUpStyles";
export const GoUp = () => {
  /**

Scrolls the page to the top when the button is clicked.
*/
  const onTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Fab onClick={onTop} size="large" aria-label="to top" sx={scrollUp}>
      <UpIcon />
    </Fab>
  );
};
