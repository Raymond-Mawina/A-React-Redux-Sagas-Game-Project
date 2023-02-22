import { types } from "./types.js";

export const moveupAction = (context) => ({
  type: types.MOVE_UP,
  context: context,
});

export const moverightAction = (context) => ({
  type: types.MOVE_RIGHT,
  context: context,
});

export const movedownAction = (context) => ({
  type: types.MOVE_DOWN,
  context: context,
});

export const moveleftAction = (context) => ({
  type: types.MOVE_LEFT,
  context: context,
});

export const movebulletsAction = () => ({
  type: types.MOVE_BULLETS,
});

export const startgameAction = () => ({
  type: types.START_GAME,
});
