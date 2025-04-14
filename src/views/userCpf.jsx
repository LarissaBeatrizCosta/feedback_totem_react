import { Box, Stack, Typography } from "@mui/material";
import ButtonSend from "./components/buttonSend";
import { useNavigate } from "react-router-dom";

export default function UserCpf() {
  const navigate = useNavigate();

  return (
    <Stack sx={{ alignItems: "center" }}>
      <Typography sx={{ typography: "h1", paddingBottom: 4 }}>
        Gostaria de informar o seu CPF?
      </Typography>
      <Box sx={{ display: "flex", gap: 8 }}>
        <ButtonSend
          text={"SIM"}
          onClick={() => {
            navigate("/");
          }}
          color={"#006400"}
        ></ButtonSend>
        <ButtonSend
          text={"NÃO"}
          onClick={() => {
            navigate("/Feedback");
          }}
          color={"#cca926"}
        ></ButtonSend>
      </Box>
    </Stack>
  );
}
