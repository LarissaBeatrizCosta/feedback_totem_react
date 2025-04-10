import { ThemeProvider } from "@mui/material";
import ImageBackground from "./views/components/ImageBackground/imageBackground";
import { materialTheme } from "./consts/muiTheme";
import AppRouter from "./views/routes/router";
import { useLocation } from "react-router-dom";
/**
 * App is the main component of the application. It uses the ThemeProvider to apply
 * material UI theme to the entire application. Inside the ThemeProvider, it renders
 * the ImageBackground component, which provides a background image, and within that,
 * it renders the Home component, which displays the main content of the application.
 *
 * @returns {JSX.Element} The wrapped components with theming and background.
 */
function App() {
  const location = useLocation().pathname;

  return (
    <ThemeProvider theme={materialTheme}>
      <ImageBackground showLogo={location === "/StarRating" ? false : true}>
        <AppRouter />
      </ImageBackground>
    </ThemeProvider>
  );
}

export default App;
