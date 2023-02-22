import { Box, Typography } from "@mui/material";
import React from "react";
import ButtonComponent from "../Button/Button.js";

function Message({ result }) {
  return (
    <Box data-testid="Message" marginTop={"30px"}>
      {result === "won" && (
        <Box
          alignItems="center"
          justifyContent="center"
          width="500px"
          height="100px"
          style={{
            backgroundColor: "limegreen",
            border: "3px black solid",
          }}
        >
          <Typography
            variant="h5"
            textAlign={"center"}
            style={{ fontSize: "38px" }}
          >
            GAME WON
          </Typography>
          <ButtonComponent />
        </Box>
      )}
      {result === "lost" && (
        <Box
          alignItems="center"
          justifyContent="center"
          width="500px"
          height="100px"
          style={{
            backgroundColor: "red",
            border: "3px black solid",
          }}
        >
          <Typography
            variant="h5"
            textAlign={"center"}
            style={{ fontSize: "38px" }}
          >
            GAME LOST
          </Typography>
          <ButtonComponent />
        </Box>
      )}
    </Box>
  );
}

export default Message;
