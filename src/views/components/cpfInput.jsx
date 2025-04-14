import { Container, TextField, Grid, Array, Item } from "@mui/material";

export default function CpfInput() {
  return (
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
  );
}
