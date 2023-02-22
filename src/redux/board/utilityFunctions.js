import { drawObject } from "../../components/Canvas/utilities.js";
import { types } from "./types.js";

function newDirection(character, direction) {
  let xdirectionParameter = character.x;
  let ydirectionParameter = character.y;
  if (direction === types.MOVE_UP) ydirectionParameter -= 10;
  else if (direction === types.MOVE_RIGHT) xdirectionParameter += 10;
  else if (direction === types.MOVE_DOWN) ydirectionParameter += 10;
  else if (direction === types.MOVE_LEFT) xdirectionParameter -= 10;
  return { x: xdirectionParameter, y: ydirectionParameter };
}

export function moveCharacter(state, action, direction) {
  const board = state.board;
  const character = state.character;
  let gold = state.board.filter((boardCard) => boardCard.isGold);

  if (character.goldCount > 4 && !state.gameLost)
    return { ...state, gameWon: true };

  if (
    board.filter(
      (card) =>
        card.x === newDirection(character, direction).x &&
        card.y === newDirection(character, direction).y &&
        card.isWall
    ).length > 0
  )
    return state;

  if (
    state.bullets.filter(
      (bullet) => character.x === bullet.x && character.y === bullet.y
    ).length > 0
  ) {
    return { ...state, gameLost: true };
  }

  if (
    gold !== undefined &&
    gold.filter(
      (goldie) =>
        goldie.x === newDirection(character, direction).x &&
        goldie.y === newDirection(character, direction).y
    ).length > 0
  ) {
    character.goldCount += 1;

    gold = [
      ...gold.filter(
        (goldie) =>
          goldie.x !== newDirection(character, direction).x ||
          goldie.y !== newDirection(character, direction).y
      ),
    ];
  }

  action.context.clearRect(character.x, character.y, 10, 10);
  character.y = newDirection(character, direction).y;
  character.x = newDirection(character, direction).x;
  drawObject(action.context, character);
  drawObject(action.context, board);

  return {
    ...state,
    character: character,
    board: [...board.filter((boardCard) => !boardCard.isGold), ...gold],
  };
}

export function moveBullets(state) {
  const bullets = state.bullets;

  let gameLost = state.gameLost;

  bullets.forEach((bullet) => {
    if (
      state.board.filter(
        (boardCard) =>
          boardCard.x === bullet.x &&
          boardCard.y === bullet.y &&
          boardCard.isWall
      ).length > 0
    ) {
      bullet.x = bullet.originalX;
      bullet.y = bullet.originalY;
    } else {
      if (bullet.direction === "up") bullet.y -= 10;
      if (bullet.direction === "down") bullet.y += 10;
      if (bullet.direction === "left") bullet.x -= 10;
      if (bullet.direction === "right") bullet.x += 10;
    }
    if (bullet.x === state.character.x && bullet.y === state.character.y) {
      gameLost = true;
    }
  });

  return {
    ...state,
    bullets: [...bullets],
    gameLost: gameLost,
  };
}
