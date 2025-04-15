import { Container, TextField, Grid } from "@mui/material";
import CpfButtonInput from "../components/cpfButtonInput";
import useRegisterCpf from "../../store/useRegisterCpf";

export default function CpfInput() {
  const buttonsCpfInput = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "⌫",
  ];

  const cpfValue = useRegisterCpf((state) => state.cpfUser);

  const setCpf = useRegisterCpf((state) => state.setCpfUser);

  const getCpf = useRegisterCpf((state) => state.getCpf);

  const deleteDigiteCpf = useRegisterCpf((state) => state.deleteDigit);

  return (
    <Container
      style={{
        border: "4px solid #1E6F9F",
        height: "50vh",
        width: "70vh",
        borderRadius: "20px",
        padding: 0,
        paddingTop: 50,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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

      <Grid
        container
        style={{
          marginTop: 20,
          justifyContent: "flex-end",
          display: "grid",
          gridTemplateColumns: "repeat(3, 150px)",
          alignItems: "center",
        }}
      >
        {buttonsCpfInput.map((button) => (
          <CpfButtonInput
            text={button}
            onClick={() => {
              button == "⌫" ? deleteDigiteCpf(button): getCpf(button)
            }}
          />
        ))}
      </Grid>
    </Container>
  );
}
