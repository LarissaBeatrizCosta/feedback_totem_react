import { Button } from "@mui/material";

export default function ButtonSend({ color, onClick, text, width, height, fontSize }) {
  return (
    <Button
      onClick={onClick}
      sx={{
        textTransform: "none",
        backgroundColor: color,
        color: "white",
        width: width || "100px",
        height: height || "50px",
        borderRadius: "20px",
        fontWeight: "bold",
        fontSize: {fontSize} || "14px",
      }}
    >
      {text}
    </Button>
  );
}
