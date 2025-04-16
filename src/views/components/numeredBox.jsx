import { Box, Button, Typography } from "@mui/material";

function NumeredBox({ number, isSelected, onClick }) {
  const colorMap = {
    0: "#5A2318",
    1: "#A12017",
    2: "#E74C3C",
    3: "#F36B22",
    4: "#F89E1B",
    5: "#FCD43E",
    6: "#FFE349",
    7: "#B9D74B",
    8: "#C9D985",
    9: "#4BA048",
    10: "#0B8C4C",
  };

  return (
    <Button onClick={onClick} sx={{ padding: 0 }}>
      <Box
        sx={{
          backgroundColor: colorMap[number],
          border: isSelected ? 4 : 0,
          width: 58,
          height: 62,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 4,
        }}
      >
        <Typography sx={{ color: "white", fontWeight: "bold", fontSize: 35 }}>
          {number}
        </Typography>
      </Box>
    </Button>
  );
}

export default NumeredBox;
