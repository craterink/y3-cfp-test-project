import * as React from 'react';
import { TextInput, Text, Alert, Image, View, StyleSheet, TouchableOpacity, AsyncStorage } from 'react-native';
import * as App from './../App.js';
import * as MyAsync from './async.js';

export default class DeepScreen extends React.Component {  
  constructor(props) {
    super(props);
  }

  state = {
    user : '',
    pass : ''
  }

  getUserData = async () => {
    let usern = await MyAsync._retrieveData('user');
    let passw = await MyAsync._retrieveData('pass');
    if (usern != null && passw != null) {
      this.setState({user:usern, pass: passw});
    }
  }

  componentDidMount = async () => {
    await this.getUserData();
  }

  _onPress = () => {
    this.props.navigation.navigate('Shallow', {
        });
  }

  render() {
    return (
      <View style={styles.logincontainer}>
        <Text> ~ Deep Screen ~ </Text>
        <Text> Username: {this.state.user} </Text>
        <Text> Password: {this.state.pass} </Text>
        <TouchableOpacity
          onPress={this._onPress}>
          <View style={{backgroundColor:'blue', height: 50, width: 100, justifyContent:'center', alignItems:'center'}}>
            <Text style={{}}>
              Go back
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
