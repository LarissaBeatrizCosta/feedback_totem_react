import { Box, Container, Stack, TextField, Typography } from "@mui/material";
import ButtonSend from "./components/buttonSend";
import useCommentStore from "../store/useCommentStore";
import useSaveRate from "../hooks/useSaveRate";

export default function Comment() {
  const comment = useCommentStore((state) => state.comment);
  const setComment = useCommentStore((state) => state.setComment);
  const saveRate = useSaveRate();

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
          onClick={saveRate}
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
            onChange={(e) => setComment(e.target.value)}
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
