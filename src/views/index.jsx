import { Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ButtonSend from "./components/buttonSend";
import NumeredBoxList from "./components/numeredList";
import useRatingStore from "../store/useRatingStore";

/**
 * Home renders a page with a question asking the user to rate from 0 to 10 how
 * much they would recommend today's experience to friends and family.
 *
 * It renders a heading with the question and a row of boxes with numbers from 1
 * to 10. The boxes are rendered using the NumeredBox component.
 *
 * @returns {React.ReactElement} The component to be rendered.
 */
function Home() {
  const navigation = useNavigate();
  const recommendationRating = useRatingStore(
    (state) => state.recommendationRating
  );
  const setRecommendationRating = useRatingStore(
    (state) => state.setRecommendationRating
  );

  return (
    <Stack>
      <Typography
        sx={{
          typography: "h1",
          textAlign: "start",
          paddingBottom: 4,
          paddingLeft: 4,
        }}
      >
        Em uma escala de 0 a 10 o quanto você indicaria a experiência de hoje
        para amigos e familiares?
      </Typography>
      <Stack
        direction="row"
        spacing={4}
        sx={{
          typography: "h2",
          justifyContent: "center",
        }}
      >
        <NumeredBoxList onSelect={setRecommendationRating} />
      </Stack>

      <Stack sx={{ alignItems: "center", paddingTop: 4 }}>
        <ButtonSend
          text={"Enviar"}
          color="rgba(25, 118, 210)"
          onClick={() => {
            recommendationRating != null ? navigation("/StarRating") : null;
          }}
        ></ButtonSend>
      </Stack>
    </Stack>
  );
}
export default Home;
