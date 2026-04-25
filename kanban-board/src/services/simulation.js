import { moveCard } from "../features/boardSlice";

export const startSimulation = (store) => {
  setInterval(() => {
    const state = store.getState().board.present;

    const allCards = Object.keys(state.cards);
    if (!allCards.length) return;

    const randomCardId =
      allCards[Math.floor(Math.random() * allCards.length)];

    const sourceCol = Object.values(state.columns).find((col) =>
      col.cardIds.includes(randomCardId)
    )?.id;

    const columns = state.columnOrder;
    const destCol = columns[Math.floor(Math.random() * columns.length)];

    if (!sourceCol || sourceCol === destCol) return;

    store.dispatch(
      moveCard({
        sourceCol,
        destCol,
        cardId: randomCardId,
        destIndex: 0,
      })
    );
  }, 10000);
};