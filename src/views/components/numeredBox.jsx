import { Box, Button, Typography } from "@mui/material";

/**
 * NumeredBox renders a button with a numerical value and a background color based
 * on the rating (low, medium, high).
 *
 * @param {{ number: number, isSelected: boolean, onClick: function }} props
 *
 * @returns {React.ReactElement} The component to be rendered.
 */
function NumeredBox({ number, isSelected, onClick }) {
  const colorMap = {
    low: "red",
    medium: "#f4d03f",
    high: "green",
  };

  const color = number < 6 ? "low" : number < 8 ? "medium" : "high";

  return (
    <Button onClick={onClick} sx={{ padding: 0 }}>
      <Box
        sx={{
          backgroundColor: colorMap[color],
          border: isSelected ? 4 : 0,
          width: 70,
          height: 70,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
        }}
      >
        <Typography
          sx={{ color: "white", fontWeight: "bold", fontSize: 25 }}
        >
          {number}
        </Typography>
      </Box>
    </Button>
  );
}

export default NumeredBox;
