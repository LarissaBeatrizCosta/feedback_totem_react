import { useEffect } from 'react';
import { ThemeProvider } from '@mui/material';
import ImageBackground from './views/components/ImageBackground/imageBackground';
import { materialTheme } from './consts/muiTheme';
import AppRouter from './views/routes/router';
import { useLocation } from 'react-router-dom';
import useResetRatings from './hooks/resetTotalRatings';
function App() {
  const location = useLocation().pathname;
  const resetRatings = useResetRatings();

  useEffect(() => {
    let time;

    function doSomething() {
      resetRatings();
    }
    function resetTimer() {
      clearTimeout(time);
      time = setTimeout(doSomething, 5000);
    }
    window.onload = resetTimer;
    document.onmousemove = resetTimer;
    document.onkeydown = resetTimer;
  }, []);

  return (
    <ThemeProvider theme={materialTheme}>
      <ImageBackground
        showLogo={
          location === '/StarRating' || location === '/Login' ? false : true
        }
      >
        <AppRouter />
      </ImageBackground>
    </ThemeProvider>
  );
}

export default App;
