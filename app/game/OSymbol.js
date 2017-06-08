import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cell: {
    width: 104,
    height: 104,
    borderWidth: 1,
    borderColor: '#000',
  },
  symbol: {
    fontSize: 80,
    fontWeight: 'bold',
  },
});

const OSymbol = () => (
  <View style={styles.cell}>
    <Text style={styles.symbol}> O </Text>
  </View>
);

OSymbol.propTypes = {
  position: React.PropTypes.number.isRequired,
};

export default OSymbol;
