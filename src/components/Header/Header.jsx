import { Container, AppBar as AppBarMui } from "@mui/material";
import { Navigation } from "../Navigation/Navigation";
import { headerContainer, container } from "./HeaderStyles";

export const Header = () => {
  return (
    <AppBarMui position="static" sx={headerContainer}>
      <Container sx={container}>
        <Navigation />
      </Container>
    </AppBarMui>
  );
};
