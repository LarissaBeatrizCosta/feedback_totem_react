import { createTheme } from "@mui/material";

const bold = "550";
const medium = "400";

export const materialTheme = createTheme({
  typography: {
    h0: {
      fontSize: "58px",
      fontWeight: bold,
    },
    h1: {
      fontSize: "38px",
      fontWeight: bold,
    },
    h2: {
      fontSize: "25px",
      fontWeight: medium,
    },
    h1Gray: {
      fontSize: "150px",
      fontWeight: bold,
      color: "#808080",
    },

    h2Yellow: {
      fontSize: "45px",
      fontWeight: medium,
      color: "#f4d03f",
    },
    h2Large: {
      fontSize: "45px",
      fontWeight: medium,
    },
  },
});
