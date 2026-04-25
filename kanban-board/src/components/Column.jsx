import { useSelector } from "react-redux";
import Card from "./Card";

const Column = ({ column }) => {
  const cards = useSelector((state) => state.board.cards);

  return (
    <div
      style={{
        width: "250px",
        background: "#f4f5f7",
        padding: "10px",
        borderRadius: "8px",
      }}
    >
      <h3>{column.title}</h3>

      {column.cardIds.map((id) => (
        <Card key={id} card={cards[id]} />
      ))}
    </div>
  );
};

export default Column;