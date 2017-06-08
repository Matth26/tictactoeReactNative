import React, { PropTypes } from 'react';
import { Text } from 'react-native';

const Symbol = (props) => {
  return (
    <Text>{props.symbol}</Text>
  );
};

Symbol.propTypes = {
  position: React.PropTypes.symbol.isRequired
};

export default Symbol;
