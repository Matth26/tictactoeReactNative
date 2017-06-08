'use strict';

import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux'
import * as SceneConst from '../scene/Const'
import { Actions } from 'react-native-router-flux'
import Style from '../view/Style'

class MenuComponent extends Component {

  _onClickPlayButton() {
      Actions[SceneConst.GAME_SCENE]();
  }

  render() {
    return (
      <View style={Style.component}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onClickPlayButton.bind(this)}
            title="PLAY"
            color="#0000ff"
          />
        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  buttonContainer: {
    flex:1,
    maxHeight: 100,
    flexDirection: 'column',
    justifyContent: 'space-around',
  }
});

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = () => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(MenuComponent)
