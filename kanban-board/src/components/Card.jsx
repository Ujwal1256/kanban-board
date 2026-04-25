import React from "react";
import { useDispatch } from "react-redux";
import { setDragging } from "../features/boardSlice";

const Card = ({ card, columnId }) => {
  const dispatch = useDispatch();

  const handleDragStart = (e) => {
    dispatch(setDragging(card.id));

    e.dataTransfer.setData(
      "text/plain",
      JSON.stringify({
        cardId: card.id,
        sourceCol: columnId,
      })
    );

    e.currentTarget.style.opacity = "0.5";
  };

  const handleDragEnd = (e) => {
    dispatch(setDragging(null));
    e.currentTarget.style.opacity = "1";
  };

  return (
    <div
      data-card-id={card.id}
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      style={{
        background: "#fff",
        padding: "10px",
        margin: "8px 0",
        borderRadius: "6px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
        cursor: "grab",
      }}
    >
      {card.title}
    </div>
  );
};

export default React.memo(Card);