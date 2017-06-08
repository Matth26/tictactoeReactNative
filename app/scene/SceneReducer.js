import { Map } from 'immutable'; // Immutable Map is an unordered Iterable.Keyed of (key, value) pairs
import { ActionConst } from 'react-native-router-flux'; // It's just a bunch of constants represent real values
import * as SceneConst from './Const';

const defaultState = Map({
  state: SceneConst.MAIN_SCENE,
});

// Whenever a new scene comes into focus due to push, pop, or replace, the action
// type of ActionConst.FOCUS will be dispatched with payload of scene. This scene
// is an object containing all the information regarding currently focused scene.
// If you are only interested in the key props of the Scene, then you can simply
// choose to only store scene.sceneKey

export default function (state = defaultState, action) {
  switch (action.type) {
        // focus action is dispatched when a new screen comes into focus
    case ActionConst.FOCUS:
      return state.set('state', action.scene.sceneKey);
    default:
      return state;
  }
}
