import { Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import StarsRow from "./components/starsRow";
import ButtonSend from "./components/buttonSend";
import useRatingStore from "../store/useStarsStore";
import { useState } from "react";
import AlertDialog from "./components/dialogs";

export default function StarRating() {
  const navigation = useNavigate();

  const environmentRating = useRatingStore(
    (state) => state.starEnvironmentRating
  );
  const collaboratorRating = useRatingStore(
    (state) => state.starCollaboratorRating
  );
  const timeRating = useRatingStore((state) => state.starTimeRating);

  const setEnvironmentRating = useRatingStore(
    (state) => state.setStarEnvironmentRating
  );
  const setCollaboratorRating = useRatingStore(
    (state) => state.setStarCollaboratorRating
  );
  const setTimeRating = useRatingStore((state) => state.setStarTimeRating);

  const [showAlert, setShowALert] = useState(false);

  const handleClick = () => {
    if (
      environmentRating !== null &&
      collaboratorRating !== null &&
      timeRating !== null
    ) {
      navigation("/UserCpf");
    } else {
      setShowALert(true);
      setTimeout(() => {
        setShowALert(false);
      }, 4000);
    }
  };

  return (
    <Stack spacing={2} sx={{ alignItems: "center", margin: 10 }}>
      <Typography sx={{ typography: "h1" }}>
        Ambiente do Posto de Atendimento
      </Typography>
      <StarsRow
        value={environmentRating}
        onChange={(e) => setEnvironmentRating(e.target.value)}
      />

      <Typography sx={{ typography: "h1" }}>
        Atendimento dos colaboradores
      </Typography>
      <StarsRow
        value={collaboratorRating}
        onChange={(e) => setCollaboratorRating(e.target.value)}
      />

      <Typography sx={{ typography: "h1" }}>Tempo de Espera</Typography>
      <StarsRow
        value={timeRating}
        onChange={(e) => setTimeRating(e.target.value)}
      />
      {showAlert && <AlertDialog text={'Escolha uma nota de 1 a 5'}></AlertDialog>}

      <ButtonSend
        text={"Enviar"}
        color="#cca926"
        onClick={() => {
          handleClick();
        }}
      />
    </Stack>
  );
}
