import { useDispatch, useSelector } from "react-redux";
import { moveCard } from "../features/boardSlice";
import Card from "./Card";

const Column = ({ column }) => {
  const dispatch = useDispatch();

  const cards = useSelector((state) => state.board.present.cards);
  const searchQuery = useSelector((state) => state.board.present.searchQuery);
  const draggingCardId = useSelector(
    (state) => state.board.present.draggingCardId
  );

  const handleDrop = (e) => {
    e.preventDefault();

    const data = JSON.parse(e.dataTransfer.getData("text/plain"));
    const { cardId, sourceCol } = data;

    const children = Array.from(
      e.currentTarget.querySelectorAll("[data-card-id]")
    );

    let destIndex = children.length;

    for (let i = 0; i < children.length; i++) {
      const rect = children[i].getBoundingClientRect();
      const midY = rect.top + rect.height / 2;

      if (e.clientY < midY) {
        destIndex = i;
        break;
      }
    }

    dispatch(
      moveCard({
        sourceCol,
        destCol: column.id,
        cardId,
        destIndex,
      })
    );
  };

  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      style={{
        width: "250px",
        background: "#f4f5f7",
        padding: "10px",
        borderRadius: "8px",
        minHeight: "200px",
      }}
    >
      <h3>{column.title}</h3>

      {column.cardIds
        .filter((id) =>
          cards[id].title
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
        .map((id) => (
          <Card key={id} card={cards[id]} columnId={column.id} />
        ))}
    </div>
  );
};

export default Column;