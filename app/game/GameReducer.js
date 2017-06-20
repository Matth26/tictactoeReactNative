import { fromJS } from 'immutable';
import * as game from './GameActions';
import { X, O } from './ConstSymbols';

import { resultForSymbol } from './Logic';

const defaultState = fromJS({
  board: {
    0: fromJS(['', '', '']),
    1: fromJS(['', '', '']),
    2: fromJS(['', '', '']),
  },
  won: undefined,
  wonLine: undefined,
  draw: false,
  turn: O,
});

export default function (state = defaultState, action) {
  switch (action.type) {
    case game.ADD_SYMBOL: {
      console.log('aaaaaaaaaaaaaaaaaaaahhhhhhhhhhh');
      console.log(action);
      const { symbol, row, position } = action;

      let newState = state.setIn(['board', row.toString(), position], symbol);

      const newBoard = newState.get('board').toJS();

      const xResult = resultForSymbol(X, newBoard);
      const oResult = resultForSymbol(O, newBoard);

      if (xResult.won) {
        newState = newState.set('won', X);
        newState = newState.set('wonLine', xResult.line);
      }

      if (oResult.won) {
        newState = newState.set('won', O);
        newState = newState.set('wonLine', oResult.line);
      }

      if (!newState.get('won')) {
        const newTurn = newState.get('turn') === O ? X : O;
        newState = newState.set('turn', newTurn);
      }

      const boardIsFull =
        [...newBoard[0], ...newBoard[1], ...newBoard[2]].filter(symbol => symbol !== '').length ===
        9;

      if (boardIsFull && !newState.get('won')) {
        newState = newState.set('draw', true);
      }

      return newState;
    }
    case game.START_AGAIN: {
      return defaultState;
    }
    default: {
      return state;
    }
  }
}
