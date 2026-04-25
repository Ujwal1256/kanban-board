const Card = ({ card }) => {
  return (
    <div
      style={{
        background: "#fff",
        padding: "10px",
        margin: "8px 0",
        borderRadius: "6px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
      }}
    >
      {card.title}
    </div>
  );
};

export default Card;