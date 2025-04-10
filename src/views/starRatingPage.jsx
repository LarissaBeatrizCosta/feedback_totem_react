import { Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import StarsRow from "./components/starsRow";
import ButtonSend from "./components/buttonSend";
import useRatingStore from "../store/useRatingStore";

/**
 * StarRating renders a page with multiple questions asking the user to rate from 0 to 10 about:
 * - Ambiente do Posto de Atendimento
 * - Atendimento dos colaboradores
 * - Tempo de Espera
 *
 * It renders a heading with the question and a row of stars (1 to 10). The stars are rendered using the StarsRow component.
 *
 * @returns {React.ReactElement} The component to be rendered.
 */
export default function StarRating() {
  const navigation = useNavigate();

  const environmentRating = useRatingStore((state) => state.environmentRating);
  const collaboratorRating = useRatingStore(
    (state) => state.collaboratorRating
  );
  const timeRating = useRatingStore((state) => state.timeRating);

  const setEnvironmentRating = useRatingStore(
    (state) => state.setEnvironmentRating
  );
  const setCollaboratorRating = useRatingStore(
    (state) => state.setCollaboratorRating
  );
  const setTimeRating = useRatingStore((state) => state.setTimeRating);

  return (
    <Stack spacing={2} sx={{ alignItems: "center", margin: 10 }}>
      <Typography sx={{ typography: "h1" }}>
        Ambiente do Posto de Atendimento
      </Typography>
      <StarsRow value={environmentRating} onChange={setEnvironmentRating} />

      <Typography sx={{ typography: "h1" }}>
        Atendimento dos colaboradores
      </Typography>
      <StarsRow value={collaboratorRating} onChange={setCollaboratorRating} />

      <Typography sx={{ typography: "h1" }}>Tempo de Espera</Typography>
      <StarsRow value={timeRating} onChange={setTimeRating} />

      <ButtonSend color="#cca926" onClick={() => {}} />
    </Stack>
  );
}
