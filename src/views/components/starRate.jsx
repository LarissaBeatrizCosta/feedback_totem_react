import React from "react";
import { Stack } from "@mui/material";
import starlight from "../../assets/images/starlight.png";
import activeStar from "../../assets/images/estrela_active.png";

export default function StarRate({ value, onStarClick }) {
  return (
    <Stack direction={"row"}>
      {[1, 2, 3, 4, 5].map((num) => (
        <img
          key={num}
          onClick={() => onStarClick(num)}
          src={value >= num ? activeStar : starlight}
          alt={`star-${num}`}
          style={{
            height: "100px",
            paddingRight: "30px",
            paddingBottom: "50px",
            cursor: "pointer",
          }}
        />
      ))}
    </Stack>
  );
}