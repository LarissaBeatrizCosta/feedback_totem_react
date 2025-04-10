import { Button } from "@mui/material";

export default function ButtonSend({ color, onClick }) {
  return (
    <Button
    onClick={onClick}
    sx={{
        backgroundColor: color,
        color: "white",
        width: "100px",
        height: "50px",
        borderRadius: "20px",
        fontWeight: "bold",
      }}
    >
      Enviar
    </Button>
  );
}
