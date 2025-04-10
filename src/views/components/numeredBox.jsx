import { Box, Button, Typography } from "@mui/material";

function NumeredBox({ number, isSelected, onClick }) {
  let colorMap = {
    1: "red",
    2: "#f4d03f",
    3: "green",
  };

  let color = number < 6 ? 1 : number < 8 ? 2 : 3;

  return (
    <Button onClick={onClick} sx={{ padding: "0px" }}>
      <Box
        sx={{
          backgroundColor: colorMap[color],
          border: isSelected ? "5px solid black" : "none",
          width: "70px",
          height: "70px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "10px",
        }}
      >
        <Typography
          sx={{ color: "white", fontWeight: "bold", fontSize: "25px" }}
        >
          {number}
        </Typography>
      </Box>
    </Button>
  );
}

export default NumeredBox;
