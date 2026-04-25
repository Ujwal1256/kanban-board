import { createSlice } from "@reduxjs/toolkit";

const presentState = {
  columns: {
    todo: { id: "todo", title: "Todo", cardIds: ["1", "2"] },
    progress: { id: "progress", title: "In Progress", cardIds: ["3"] },
    done: { id: "done", title: "Done", cardIds: [] },
  },
  cards: {
    "1": { id: "1", title: "Learn React" },
    "2": { id: "2", title: "Build Kanban UI" },
    "3": { id: "3", title: "Setup Redux" },
  },
  columnOrder: ["todo", "progress", "done"],
};

const initialState = {
  past: [],
  present: {
    ...presentState,
    searchQuery: "",
    draggingCardId: null,
  },
  future: [],
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.present.searchQuery = action.payload;
    },

    setDragging: (state, action) => {
      state.present.draggingCardId = action.payload;
    },

    moveCard: (state, action) => {
      const { sourceCol, destCol, cardId, destIndex } = action.payload;

      // save to history
      state.past.push(JSON.parse(JSON.stringify(state.present)));
      state.future = [];

      const columns = state.present.columns;

      columns[sourceCol].cardIds =
        columns[sourceCol].cardIds.filter((id) => id !== cardId);

      columns[destCol].cardIds.splice(destIndex, 0, cardId);
    },

    undo: (state) => {
      if (state.past.length === 0) return;

      const previous = state.past.pop();
      state.future.unshift(JSON.parse(JSON.stringify(state.present)));
      state.present = previous;
    },

    redo: (state) => {
      if (state.future.length === 0) return;

      const next = state.future.shift();
      state.past.push(JSON.parse(JSON.stringify(state.present)));
      state.present = next;
    },
  },
});

export const { setSearch, setDragging, moveCard, undo, redo } =
  boardSlice.actions;

export default boardSlice.reducer;