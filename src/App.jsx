import { ThemeProvider } from "@mui/material";
import ImageBackground from "./views/components/ImageBackground/imageBackground";
import { materialTheme } from "./consts/muiTheme";
import AppRouter from "./views/routes/router";
/**
 * App is the main component of the application. It uses the ThemeProvider to apply
 * material UI theme to the entire application. Inside the ThemeProvider, it renders
 * the ImageBackground component, which provides a background image, and within that,
 * it renders the Home component, which displays the main content of the application.
 * 
 * @returns {JSX.Element} The wrapped components with theming and background.
 */
function App() {
  return (
    <ThemeProvider theme={materialTheme}>
      <ImageBackground>
        <AppRouter />
      </ImageBackground>
    </ThemeProvider>
  );
}

export default App;
