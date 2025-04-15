import { Container, TextField, Grid } from "@mui/material";
import CpfButtonInput from "../components/cpfButtonInput";
import useRegisterCpf from "../../store/useRegisterCpfStore";

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

  const setCpfUser = useRegisterCpf((state) => state.setCpfUser);

  const deleteDigiteCpf = useRegisterCpf((state) => state.deleteDigit);

  return (
    <Container
      style={{
        border: "4px solid #1E6F9F",
        height: "45vh",
        width: "60vh",
        borderRadius: "20px",
        padding: 0,
        paddingTop: 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <TextField
        fullWidth
        variant="standard"
        value={cpfValue}
        sx={{
          "& .MuiInput-input": {
            textAlign: "right",
          },
        }}
        slotProps={{
          input: {
            readOnly: true,
            disableUnderline: true,
            style: {
              borderBottom: "4px solid #1E6F9F",
              paddingRight: "20px",
              textAlign: "right",
              fontSize: "40px",
              fontWeight: "bold",
              color: "#1E6F9F",
            },
          },
        }}
      />

      <Grid
        container
        style={{
          paddingLeft: "40px",
          marginTop: 20,
          display: "grid",
          gridTemplateColumns: "repeat(3, 150px)",
          alignItems: "center",
        }}
      >
        {buttonsCpfInput.map((button, index) => {
          if (index === buttonsCpfInput.length - 2) {
            return (
              <>
                <div style={{ visibility: "hidden" }}></div>
                <CpfButtonInput
                  text={button}
                  onClick={() => {
                    button === "⌫" ? deleteDigiteCpf() : setCpfUser(button);
                  }}
                />
              </>
            );
          }
          return (
            <CpfButtonInput
              key={index}
              text={button}
              onClick={() => {
                button === "⌫" ? deleteDigiteCpf() : setCpfUser(button);
              }}
            />
          );
        })}
      </Grid>
    </Container>
  );
}