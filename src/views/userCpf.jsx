import { Box, Stack, Typography } from "@mui/material";
import ButtonSend from "./components/buttonSend";
import { useNavigate } from "react-router-dom";
import useStarsStore from "../store/useStarsStore";
import useRatingStore from "../store/useRatingStore";
import useRegisterCpf from "../store/useRegisterCpfStore";
import useCommentStore from "../store/useCommentStore";
import useTotalRatings from "../store/useTotalRatingsStore";
import RateModel from "../models/rate";

export default function UserCpf() {
  const navigate = useNavigate();
  const rating = useRatingStore((state) => state.recommendationRating);
  const starEnvironment = useStarsStore((state) => state.starEnvironmentRating);
  const starCollaborator = useStarsStore(
    (state) => state.starCollaboratorRating
  );
  const starTime = useStarsStore((state) => state.starTimeRating);
  const cpf = useRegisterCpf((state) => state.cpfUser);
  const comment = useCommentStore((state) => state.comment);
  const setListRatings = useTotalRatings((state) => state.setTotalRatingsList);

  const handleCLick = () => {
    const finalRating = new RateModel({
      recommendation: rating,
      location: starEnvironment,
      collaborator: starCollaborator,
      time: starTime,
      comment: comment,
      cpf: cpf,
    });

    setListRatings(finalRating);
    navigate("/Feedback");
  };

  return (
    <Stack sx={{ alignItems: "center" }}>
      <Typography sx={{ typography: "h1", paddingBottom: 4 }}>
        Gostaria de informar o seu CPF?
      </Typography>
      <Box sx={{ display: "flex", gap: 8 }}>
        <ButtonSend
          text={"Sim"}
          onClick={() => {
            navigate("/RegisterCpf");
          }}
          fontSize={"30px"}
          color={"#4CAF50"}
        ></ButtonSend>
        <ButtonSend
          text={"Não"}
          onClick={() => {
            handleCLick();
            navigate("/Feedback");
          }}
          fontSize={"30px"}
          color={"#FFA726"}
        ></ButtonSend>
      </Box>
    </Stack>
  );
}
