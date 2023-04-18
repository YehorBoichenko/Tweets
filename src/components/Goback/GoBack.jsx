import { useLocation, Link } from "react-router-dom";
import { Button, Tooltip } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { button, icon } from "./GoBackStyles";

export const GoBack = () => {
  const location = useLocation();

  const linkBack = location.state?.from ?? "/";

  return (
    <Tooltip title="Previous page" placement="right" arrow>
      <Button component={Link} to={linkBack} sx={button}>
        <ChevronLeftIcon sx={icon} />
        Go Back
      </Button>
    </Tooltip>
  );
};
