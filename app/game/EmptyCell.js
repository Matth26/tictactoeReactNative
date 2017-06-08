import React, { PropTypes } from 'react';
import { TouchableWithoutFeedback, View, StyleSheet } from 'react-native';

const EmptyCell = props => (
  <TouchableWithoutFeedback onPress={() => props.addSymbol(props.turn)}>
    <View style={styles.cell} />
  </TouchableWithoutFeedback>
);

EmptyCell.propTypes = {
    // position: React.PropTypes.number.isRequired,
  addSymbol: React.PropTypes.func.isRequired,
};

let styles = StyleSheet.create({
  cell: {
    width: 104,
    height: 104,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#FFF',
  },
});

export default EmptyCell;
