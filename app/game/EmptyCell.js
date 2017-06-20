import React from 'react';
import { TouchableWithoutFeedback, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cell: {
    width: 104,
    height: 104,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#FFF',
  },
});

const EmptyCell = props =>
  (<TouchableWithoutFeedback onPress={() => props.addSymbol()}>
    <View style={styles.cell} />
  </TouchableWithoutFeedback>);

EmptyCell.propTypes = {
  addSymbol: React.PropTypes.func.isRequired,
};

export default EmptyCell;
