import { Stack } from "@mui/material";
import Rating from "@mui/material/Rating";

export default function StarsRow({ value, onChange }) {
  return (
    <Stack alignItems={"center"} paddingBottom={4}>
      <Rating
        precision={1}
        sx={{ fontSize: "100px" }}
        value={value}
        onChange={onChange}
      />
    </Stack>
  );
}
