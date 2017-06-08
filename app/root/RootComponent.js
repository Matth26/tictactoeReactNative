import React, { Component } from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import * as SceneConst from '../scene/Const';
import MenuComponent from '../menu/MenuComponent';
import Board from '../game/Board';

// According to redux, the entire state of the application should live within the redux store.
// One of the big advantages of connecting the Router to redux store is that your connected
// Components can easily know the current focused scene.
const RouterWithRedux = connect()(Router);

class RootComponent extends Component {
  static onBack() {
    Actions.pop();
  }

  render() {
    return (
      <RouterWithRedux>
        <Scene key="root">
          <Scene
            key={SceneConst.MAIN_SCENE}
            component={MenuComponent}
            title="Menu"
            initial
          />
          <Scene
            key={SceneConst.GAME_SCENE}
            component={Board}
            title="Game"
            onBack={super.onBack}
          />
        </Scene>
      </RouterWithRedux>
    );
  }
}

// [mapStateToProps(state, [ownProps]): stateProps] (Function): If this argument
// is specified, the new component will subscribe to Redux store updates. This
// means that any time the store is updated, mapStateToProps will be called.
const mapStateToProps = state => ({
  sceneState: state.getIn(['route', 'state']), // get the value state of the "route" key in state (immutable Map)
});

// [mapDispatchToProps(dispatch, [ownProps]): dispatchProps] (Object or Function):
// If an object is passed, each function inside it is assumed to be a Redux action creator.
// An object with the same function names, but with every action creator wrapped
// into a dispatch call so they may be invoked directly, will be merged into the
// component’s props. If a function is passed, it will be given dispatch. If you
// don't want to subscribe to store updates, pass null or undefined in place of
// mapDispatchToProps.
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(RootComponent);
