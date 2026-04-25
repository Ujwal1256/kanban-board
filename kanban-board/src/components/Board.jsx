import { useSelector } from "react-redux";
import Column from "./Column";

const Board = () => {
  const { columns, columnOrder } = useSelector(
    (state) => state.board.present
  );

  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      {columnOrder.map((colId) => (
        <Column key={colId} column={columns[colId]} />
      ))}
    </div>
  );
};

export default Board;