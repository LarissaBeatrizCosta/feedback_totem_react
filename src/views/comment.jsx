import { Box, Container, Stack, TextField, Typography } from "@mui/material";
import ButtonSend from "./components/buttonSend";

export default function Comment() {
  return (
    <Stack>
      <Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: "8%"}}>
        <ButtonSend
          text={"Finalizar comentário"}
          color={"green"}
          width={"15%"}
          height={"100%"}
        />
      </Box>

      <Stack sx={{ alignItems: "center" }}>
        <Typography sx={{ typography: "h0",  }}>
          Deixe seu comentário
        </Typography>

        <Container
          sx={{
            height: "65vh",
            width: "80vw",
            border: "2px solid #808080",
            borderRadius: "20px",
          }}
        >
          <TextField
            sx={{ marginTop: "20px" }}
            fullWidth
            placeholder="Digite aqui ..."
            variant="standard"
            slotProps={{ input: { disableUnderline: true } }}
          />
        </Container>
      </Stack>
    </Stack>
  );
}
