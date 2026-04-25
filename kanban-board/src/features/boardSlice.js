import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
  searchQuery: "",
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { setSearch } = boardSlice.actions;
export default boardSlice.reducer;