

// Actions describe the fact that something happened, but don't specify how the
// application's state changes in response. This is the job of reducers.

import { combineReducers } from 'redux-immutable';
import sceneReducer from '../scene/SceneReducer';
import gameReducer from '../game/GameReducer';

// two reducers to combine, the one managing the ble and the one managing the routes!
export default combineReducers({
  route: sceneReducer,
  game: gameReducer,
});

/* Those two functions are the same
const reducer = combineReducers({
  a: doSomethingWithA,
  b: processB,
  c: c
})
function reducer(state = {}, action) {
  return {
    a: doSomethingWithA(state.a, action),
    b: processB(state.b, action),
    c: c(state.c, action)
  }
}
*/
