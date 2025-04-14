import { Stack, Typography } from "@mui/material";
export default function Feedback() {
  return (
    <Stack sx={{ alignItems: "center" }}>
      <Typography sx={{ typography: "h1Gray" }}>Obrigado!</Typography>
      <Typography sx={{ typography: "h2" }}>
        Seus dados foram enviados com <Typography sx={{typography: "h2Yellow", display: "inline"}}>sucesso </Typography>!
      </Typography>
    </Stack>
  );
}
