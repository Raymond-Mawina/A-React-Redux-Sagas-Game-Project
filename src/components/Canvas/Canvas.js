import React, { useRef, useEffect, useState, useCallback } from "react";
import { connect } from "react-redux";
import { clearBoard, drawObject } from "./utilities.js";
import {
  moveupAction,
  moverightAction,
  movedownAction,
  moveleftAction,
  movebulletsAction,
  startgameAction,
} from "../../redux/board/actions.js";
import Message from "../Message/Message.js";
import { Box, Grid, Typography } from "@mui/material";
import Instructions from "../Instructions/Instructions.js";

const Canvas = ({
  startgame,
  moveup,
  movedown,
  moveleft,
  moveright,
  gamewon,
  gamelost,
  board,
  character,
  bullets,
}) => {
  const canvasRef = useRef(null);
  const [context, setContext] = useState(null);

  const handleKeyUp = useCallback(
    (event) => {
      switch (event.key) {
        case "w":
          moveup(context);
          break;
        case "s":
          movedown(context);
          break;
        case "a":
          moveleft(context);
          break;
        case "d":
          moveright(context);
          break;
        case "ArrowUp":
          moveup(context);
          break;
        case "ArrowDown":
          movedown(context);
          break;
        case "ArrowLeft":
          moveleft(context);
          break;
        case "ArrowRight":
          moveright(context);
          break;
        default:
          break;
      }
    },
    [context, movedown, moveleft, moveright, moveup]
  );

  useEffect(() => {
    startgame();
  }, [startgame]);

  useEffect(() => {
    clearBoard(context);
    if (!gamewon && !gamelost) {
      setContext(canvasRef.current.getContext("2d"));
      drawObject(context, board);
      drawObject(context, character);
      drawObject(context, bullets);
    }
  }, [context, board, character, bullets, gamewon, gamelost]);

  useEffect(() => {
    document.addEventListener("keyup", handleKeyUp, false);

    return () => {
      document.removeEventListener("keyup", handleKeyUp, false);
    };
  }, [handleKeyUp]);

  return (
    <Box
      data-testid="Canvas"
      marginTop={"30px"}
      height={300}
      width={500}
      margin={"auto"}
    >
      {!gamewon && !gamelost ? (
        <Grid container>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <canvas
              ref={canvasRef}
              style={{
                border: "black 3px solid",
                backgroundColor: "grey",
                marginBottom: "15px",
              }}
              width={500}
              height={300}
            />
          </Grid>
          <Typography
            variant="h5"
            textAlign={"center"}
            style={{ fontSize: "24px", fontWeight: "bold" }}
            margin={"auto"}
          >
            {character.goldCount}/5 Gold Bars Collected
          </Typography>
          <Instructions />
        </Grid>
      ) : gamewon ? (
        <Grid item xs={12}>
          <Message result="won" />
        </Grid>
      ) : (
        <Grid item xs={12}>
          <Message result="lost" />
        </Grid>
      )}
    </Box>
  );
};

const mapStateToProps = (state) => ({
  board: state.board,
  character: state.character,
  gamewon: state.gameWon,
  gamelost: state.gameLost,
  bullets: state.bullets,
});

const mapDispatchToProps = (dispatch) => ({
  moveup: (context) => dispatch(moveupAction(context)),
  moveright: (context) => dispatch(moverightAction(context)),
  movedown: (context) => dispatch(movedownAction(context)),
  moveleft: (context) => dispatch(moveleftAction(context)),
  movebullets: () => dispatch(movebulletsAction()),
  startgame: () => dispatch(startgameAction()),
});

export const CanvasContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Canvas);
