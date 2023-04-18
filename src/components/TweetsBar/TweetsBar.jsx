import { Box } from "@mui/material";
import { wrapper } from "./TweetsBarStyles";

export const TweetsBar = ({ children }) => {
  return <Box sx={wrapper}>{children}</Box>;
};
