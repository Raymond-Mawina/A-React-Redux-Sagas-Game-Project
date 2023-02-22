import { Box, Typography } from "@mui/material";
import { instructions } from "./utilities.js";

function Instructions() {
  return (
    <Box data-testid="Instructions" margin={"auto"}>
      {instructions.map((instruction) => (
        <Typography
          fontSize={"18px"}
          textAlign={"center"}
          fontWeight={"bold"}
          key={instruction}
        >
          {instruction}
        </Typography>
      ))}
    </Box>
  );
}

export default Instructions;
