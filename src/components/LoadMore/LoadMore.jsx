/**

Renders a button component that can be used to load more content on click.
@param {function} onClick - The function to be executed when the button is clicked.
@param {boolean} loading - A boolean value that indicates whether the component is in a loading state.
@returns {JSX.Element} - A Button component with appropriate text and styling.
*/
import { Button } from "@mui/material";
import { buttonHover } from "../../utils/mainStyles";
export const LoadMore = ({ onClick, loading }) => {
  return (
    <Button
      disabled={loading}
      sx={{ ...buttonHover, bgcolor: "secondary.darker" }}
      onClick={onClick}
    >
      {loading ? "Loading..." : "Load more"}
    </Button>
  );
};
