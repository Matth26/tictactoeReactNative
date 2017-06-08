import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Style from '../view/Style';
import Board from './Board';
import * as game from './GameActions';

const styles = StyleSheet.create({
  results: {},
  board: {},
});

class GameComponent extends Component {
  render() {
    return (
      <View style={Style.component}>

        <Board style={styles.board} />
      </View>
    );
  }
}

// <Results style={styles.results}/>

// Container component:
const mapStateToProps = state => ({
  demo: state.get('demo'),
});

const mapDispatchToProps = dispatch => ({
  setDemo: (demo) => {
    dispatch(game.setDemo(demo));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GameComponent);

/* export default connect(
  state => ({
    demo : state.get('demo'),
  }),
  {
    setDemo: catalogue.setDemo,
  })
(CatalogueComponent)*/
