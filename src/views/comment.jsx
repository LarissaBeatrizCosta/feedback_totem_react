import { Box, Container, Stack, TextField, Typography } from "@mui/material";
import ButtonSend from "./components/buttonSend";
import { useNavigate } from "react-router-dom";
import useStarsStore from "../store/useStarsStore";
import useRatingStore from "../store/useRatingStore";
import useRegisterCpf from "../store/useRegisterCpfStore";
import useCommentStore from "../store/useCommentStore";
import useTotalRatings from "../store/useTotalRatingsStore";
import RateModel from "../models/rate";

export default function Comment() {
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
    <Stack>
      <Box
        sx={{ display: "flex", justifyContent: "flex-end", marginTop: "8%" }}
      >
        <ButtonSend
          text={"Finalizar comentário"}
          color={"green"}
          width={"15%"}
          height={"100%"}
          onClick={() => {
            handleCLick();
          }}
        />
      </Box>

      <Stack sx={{ alignItems: "center" }}>
        <Typography sx={{ typography: "h0" }}>Deixe seu comentário</Typography>

        <Container
          sx={{
            height: "65vh",
            width: "80vw",
            border: "2px solid #808080",
            borderRadius: "20px",
          }}
        >
          <TextField
            value={comment}
            sx={{ marginTop: "20px" }}
            fullWidth
            multiline
            rows={20}
            placeholder="Digite aqui ..."
            variant="standard"
            slotProps={{ input: { disableUnderline: true } }}
          />
        </Container>
      </Stack>
    </Stack>
  );
}
