import * as React from 'react';
import { TextInput, Text, Alert, Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import * as App from './../App.js';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this._onPress = this._onPress.bind(this)
  }
  
  

  _onPress() {
    this.props.navigation.navigate('Login', {});
  }
  
  render() {
    return (
      <View style={styles.logincontainer}>
        <Text>
        Home
        </Text>

        <TouchableOpacity
          onPress={this._onPress}>
          <View style={{backgroundColor:'blue', height: 50, width: 100, justifyContent:'center', alignItems:'center'}}>
            <Text style={{}}>
              Log Out
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
  }
});
