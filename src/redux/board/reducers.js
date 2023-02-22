import { types } from "./types.js";
import { board, boardCardObject, bullets } from "./utilityObjects.js";
import { moveBullets, moveCharacter } from "./utilityFunctions.js";

export const initialState = {
  board: [...board()],
  character: {
    ...boardCardObject,
    x: 440,
    y: 240,
    isCharacter: true,
    color: "green",
  },
  gameWon: false,
  gameLost: false,
  bullets: [...bullets],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.MOVE_UP:
      return moveCharacter(state, action, types.MOVE_UP);
    case types.MOVE_RIGHT:
      return moveCharacter(state, action, types.MOVE_RIGHT);
    case types.MOVE_DOWN:
      return moveCharacter(state, action, types.MOVE_DOWN);
    case types.MOVE_LEFT:
      return moveCharacter(state, action, types.MOVE_LEFT);
    case types.MOVE_BULLETS:
      return moveBullets(state);
    default:
      return state;
  }
};
