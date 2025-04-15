import { Stack } from "@mui/material";
import ButtonSend from "./components/buttonSend";
import CpfInput from "./components/cpfInput";
import { useNavigate } from "react-router-dom";
import useStarsStore from "../store/useStarsStore";


export default function RegisterCpf() {
  const navigate = useNavigate();
  const cpf = useStarsStore((state) => state.cpfUser);

  return (
    <Stack sx={{ gap: 4, alignItems: "center", paddingTop: 8 }}>
      <CpfInput></CpfInput>
      <ButtonSend
        text={"ENVIAR"}
        color={"#cca926"}
        onClick={() => {
          cpf != null ? navigate("/"): null;
        }}
      ></ButtonSend>
    </Stack>
  );
}
