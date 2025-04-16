import { Stack, Typography } from "@mui/material";
import useTotalRatings from "../store/useTotalRatingsStore";

export default function Feedback() {
  // const list = useTotalRatings((state) => state.totalRatings);

  // const printItems = () => {
  //   console.log("Itens na lista totalRatings:");
  //   list.forEach((item, index) => {
  //     console.log(`Índice ${index}:`, item);
  //   });
  // };
  return (
    <Stack sx={{ alignItems: "center" }}>
      {/* <div>
        <h1>Lista de Avaliações</h1>
        <button onClick={printItems}>Imprimir Itens</button>
      </div>{" "} */}
      <Typography sx={{ typography: "h1Gray" }}>Obrigado!</Typography>
      <Typography sx={{ typography: "h2Large" }}>
        Seus dados foram enviados com{" "}
        <Typography sx={{ typography: "h2Yellow", display: "inline" }}>
          sucesso{" "}
        </Typography>
        !
      </Typography>
    </Stack>
  );
}
