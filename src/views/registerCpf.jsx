import { Stack } from "@mui/material";
import ButtonSend from "./components/buttonSend";
import CpfInput from "./components/cpfInput";

export default function RegisterCpf() {
  return (
    <Stack sx={{ gap: 4, alignItems: "center", paddingTop: 8 }}>
    <CpfInput></CpfInput>
      <ButtonSend
        text={"ENVIAR"}
        color={"#cca926"}
        onClick={() => {}}
      ></ButtonSend>
    </Stack>
  );
}
