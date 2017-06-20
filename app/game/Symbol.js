import React from 'react';
import { Text } from 'react-native';

const Symbol = props => <Text>{props.symbol}</Text>;

Symbol.propTypes = {
  position: React.PropTypes.symbol.isRequired,
};

export default Symbol;
