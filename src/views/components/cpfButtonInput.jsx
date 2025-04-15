import { Button } from "@mui/material";

export default function CpfButtonInput({ text, onClick }) {
  return (
    <Button
      onClick={onClick}
      sx={{
        backgroundColor: "#1E6F9F",
        fontSize: "30px",
        color: "white",
        width: "70%",
        height: "60%",
        borderRadius: "8px",
        fontWeight: "bold",
      }}
    >
      {text}
    </Button>
  );
}
