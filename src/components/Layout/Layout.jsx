import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Box, Container } from "@mui/material";
import { Header } from "../Header/Header";
import LoaderSpinner from "../Loader/Loader";
export const Layout = () => {
  return (
    <>
      <Header />

      <Box component="main" sx={{ pt: "35px", pb: "70px" }}>
        <Container>
          <Suspense fallback={LoaderSpinner}>
            <Outlet />
          </Suspense>
        </Container>
      </Box>
    </>
  );
};
