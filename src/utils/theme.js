import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#EBD8FF",
      darker: "#5CD3A8",
      accent: "#5736A3",
    },
    neutral: {
      main: "#373737",
      contrastText: "#fff",
      light: "rgba(230, 210, 245, 0.8)",
    },
    secondary: {
      main: "#5736A3",
      accent: "rgba(80, 54, 172, 0.34)",
      darker: "rgba(106, 195, 148, 0.58)",
    },
  },
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
});
