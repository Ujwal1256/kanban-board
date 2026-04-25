import { configureStore } from "@reduxjs/toolkit";
import boardReducer from "../features/boardSlice";
import { loadState, saveState } from "../utils/localStorage";

const persisted = loadState();

export const store = configureStore({
  reducer: {
    board: boardReducer,
  },
  preloadedState: persisted
    ? {
        board: {
          past: [],
          present: persisted,
          future: [],
        },
      }
    : undefined,
});

store.subscribe(() => {
  const state = store.getState().board.present;
  saveState(state);
});