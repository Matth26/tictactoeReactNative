import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import Style from '../view/Style';
import * as game from './GameActions';
import { X, O } from './ConstSymbols';
import XSymbol from './XSymbol';
import OSymbol from './OSymbol';
import EmptyCell from './EmptyCell';

class Board extends Component {
  componentWillMount() {
    console.log('BOARD component will mount');
    this.props.startAgain();
  }

  getSymbol(rowIndex, position, symbol) {
    if (symbol === X) {
      return <XSymbol key={position} position={position} />;
    }
    if (symbol === O) {
      return <OSymbol key={position} position={position} />;
    }
    return (
      <EmptyCell
        key={position}
        addSymbol={this.addSymbol.bind(this, rowIndex, position)}
        turn={this.props.turn}
      />
    );
  }

  addSymbol(rowIndex, position, symbol) {
    return !this.props.won && this.props.addSymbol(rowIndex, position, symbol);
  }

  displayLine(board, rowIndex) {
    return board[rowIndex].map((symbol, position) =>
            this.getSymbol(rowIndex, position, symbol),
        );
  }

  displayBoard(board) {
    return Object.keys(board.toJS()).map(rowIndex => (
      <View key={rowIndex} style={styles.line}>
        {this.displayLine(board.toJS(), rowIndex)}
      </View>
        ));
  }

  displayResults(won, draw) {
    if (won) return <View><Text>Win !</Text></View>;
    else if (draw) return <View><Text>Draw !</Text></View>;
  }

  render() {
    return (
      <View style={Style.component}>
        <View>
          {this.displayBoard(this.props.board)}
        </View>
        <View>
          {this.displayResults(this.props.won, this.props.draw)}
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  board: {
    width: 312,
    height: 312,
    borderWidth: 3,
    borderColor: '#000',
    backgroundColor: '#006',
  },
  line: {
    flexDirection: 'row',
  },
  cell: {
    width: 104,
    height: 104,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#006',
  },
});

Board.propTypes = {
  board: React.PropTypes.object.isRequired,
  turn: React.PropTypes.string.isRequired,
  won: React.PropTypes.string,
  draw: React.PropTypes.bool.isRequired,
  wonLine: React.PropTypes.string,
  addSymbol: React.PropTypes.func.isRequired,
  startAgain: React.PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  board: state.getIn(['game', 'board']), // game is the name of the reducer in combineReducers
  turn: state.getIn(['game', 'turn']), // http://stackoverflow.com/questions/35402389/combinereducers-causes-code-to-break
  won: state.getIn(['game', 'won']),
  draw: state.getIn(['game', 'draw']),
  wonLine: state.getIn(['game', 'wonLine']),
});

const mapDispatchToProps = dispatch => ({
  addSymbol(rowIndex, position, symbol) {
    dispatch(game.addSymbol(rowIndex, position, symbol));
  },
  startAgain() {
    dispatch(game.startAgain());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
