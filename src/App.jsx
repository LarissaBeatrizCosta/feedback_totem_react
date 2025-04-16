import { useEffect } from "react";
import { ThemeProvider } from "@mui/material";
import ImageBackground from "./views/components/ImageBackground/imageBackground";
import { materialTheme } from "./consts/muiTheme";
import AppRouter from "./views/routes/router";
import { useLocation, useNavigate } from "react-router-dom";
import useRatingStore from "./store/useRatingStore";
import useRegisterCpf from "./store/useRegisterCpfStore";
import useStarsStore from "./store/useStarsStore";
import useCommentStore from "./store/useCommentStore";

function App() {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const setRating = useRatingStore((state) => state.setRecommendationRating);
  const setEnvironment = useStarsStore(
    (state) => state.setStarEnvironmentRating
  );
  const setCollaborator = useStarsStore(
    (state) => state.setStarCollaboratorRating
  );
  const setTime = useStarsStore((state) => state.setStarTimeRating);
  const setCpf = useRegisterCpf((state) => state.setCpf);
  const setComment = useCommentStore((state) => state.setComment);

  // useEffect(() => {
  //   let time;

  //   function doSomething() {
  //     setRating(null);
  //     setEnvironment(null);
  //     setCollaborator(null);
  //     setTime(null);
  //     setCpf("");
  //     setComment("");
  //     navigate("/");
  //   }
  //   function resetTimer() {
  //     clearTimeout(time);
  //     time = setTimeout(doSomething, 5000);
  //   }
  //   window.onload = resetTimer;
  //   document.onmousemove = resetTimer;
  //   document.onkeydown = resetTimer;
  // },[]);

  return (
    <ThemeProvider theme={materialTheme}>
      <ImageBackground showLogo={location === "/StarRating" || location === "/Login" ? false : true}>
        <AppRouter />
      </ImageBackground>
    </ThemeProvider>
  );
}

export default App;
