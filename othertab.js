import * as React from 'react';
import { TextInput, Text, Alert, Image, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class OtherTabScreen extends React.Component {  
  constructor(props) {
    super(props);
    this._onPress = this._onPress.bind(this)
  }
  
  state = {
    user: '',
    pass: '',
  };

  _onPress() {
    this.props.navigation.navigate('Deep', {
        });
  }

  render() {
    return (
      <View style={styles.logincontainer}>
        <Text> Other Tab </Text>
        <TouchableOpacity
          onPress={this._onPress}>
          <View style={{backgroundColor:'blue', height: 50, width: 100, justifyContent:'center', alignItems:'center'}}>
            <Text style={{}}>
              Go to deep screen
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logincontainer: {
    flex: 1,
    flexDirection: 'vertical',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  loginfield: {
    textAlign: 'center',
    padding:15
  },
});
