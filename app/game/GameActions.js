// Actions:
export const ADD_SYMBOL = 'ADD_SYMBOL';
export const START_AGAIN = 'START_AGAIN';

// Action creators:
export const addSymbol = (row, position, symbol) => ({
  type: 'ADD_SYMBOL',
  symbol,
  row,
  position,
});

export const startAgain = () => ({
  type: 'START_AGAIN',
});
