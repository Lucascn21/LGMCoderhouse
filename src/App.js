import "./App.css";
import { ItemListcontainer, NavBar } from "./components";

import * as React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

export default function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <>
        <NavBar />
        <ItemListcontainer greeting="greetings from app.js, i will have sensical styling and components soon">
          <p>i would be an item</p> <p>i would be an item too</p>
        </ItemListcontainer>
      </>
    </ThemeProvider>
  );
}
