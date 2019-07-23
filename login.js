import * as React from 'react';
import { TextInput, Text, Alert, Image, View, StyleSheet, TouchableOpacity, AsyncStorage } from 'react-native';
import * as App from './../App.js';
import * as MyAsync from './async.js';

export default class LoginScreen extends React.Component {  
  constructor(props) {
    super(props);
  }

  state = {
    user : '',
    pass : ''
  }

  componentDidMount = async () => {
    await this.getUserData();
  }

  getUserData = async () => {
    let user = await MyAsync._retrieveData('user');
    let pass = await MyAsync._retrieveData('pass');
    if (user != null && pass != null) {
      this.setState({user:user, pass: pass});
    }
  }

  _onPress = () => {
    MyAsync._storeData('user', this.state.user);
    MyAsync._storeData('pass', this.state.pass);
    this.props.navigation.navigate('Home', {});
  }

  render() {
    return (
      <View style={styles.logincontainer}>
        <Image
          style={{ height: 80, width: 80,  }}
          source={require('./../images/login.png')}
        />
        <TextInput
          style={styles.loginfield}
          placeholder="Username"
          onChangeText={(user) =>
            this.setState({ user: user })
          }
          value={this.state.user}
        />
        <TextInput
          style={styles.loginfield}
          placeholder="Password"
          onChangeText={pass =>
            this.setState({ user: this.state.user, pass: pass })
          }
          value={this.state.pass}
        />
        <TouchableOpacity
          onPress={this._onPress}>
          <View style={{backgroundColor:'blue', height: 50, width: 100, justifyContent:'center', alignItems:'center'}}>
            <Text style={{}}>
              Login
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
