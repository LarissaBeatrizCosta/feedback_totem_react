import { Container, Stack, TextField } from "@mui/material";
import ButtonSend from "./components/buttonSend";

export default function RegisterCpf() {
  return (
    <Stack sx={{ gap: 4, alignItems: "center", paddingTop: 8 }}>
      <Container
        style={{
          border: "4px solid #1E6F9F",
          height: "50vh",
          width: "70vh",
          borderRadius: "20px",
          padding: 0,
          paddingTop: 50,
        }}
      >
        <TextField
          fullWidth
          variant="standard"
          
          slotProps={{
            input: {
              readOnly: true,
              disableUnderline: true,
              style: { borderBottom: "4px solid #1E6F9F" }, 
            },
          }}
        />
      </Container>
      <ButtonSend
        text={"ENVIAR"}
        color={"#cca926"}
        onClick={() => {}}
      ></ButtonSend>
    </Stack>
  );
}
