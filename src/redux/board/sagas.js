import { movebulletsAction } from "./actions.js";
import { types } from "./types.js";
import { takeLatest, put, delay } from "redux-saga/effects";

export function* moveSaga() {
  while (true) {
    yield put(movebulletsAction());
    yield delay(200);
  }
}

export function* watcherSagas() {
  yield takeLatest([types.START_GAME], moveSaga);
}
