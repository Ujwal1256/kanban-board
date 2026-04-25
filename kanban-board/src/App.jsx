import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { undo, redo } from "./features/boardSlice";
import Board from "./components/Board";
import SearchBar from "./components/SearchBar";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKey = (e) => {
      if (e.ctrlKey && e.key === "z") {
        dispatch(undo());
      }
      if (e.ctrlKey && e.key === "y") {
        dispatch(redo());
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Kanban Board</h2>
      <SearchBar />
      <Board />
    </div>
  );
}

export default App;