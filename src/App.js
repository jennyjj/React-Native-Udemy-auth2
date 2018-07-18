import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm.js';


class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    const firebase = require("firebase");
    //Firebase initialization
    firebase.initializeApp({
      apiKey: 'AIzaSyAguvgKNiLBgdt0IpyuO7FuAaGtOhbILS4',
      authDomain: 'auth2-4b5c9.firebaseapp.com',
      databaseURL: 'https://auth2-4b5c9.firebaseio.com',
      storageBucket: 'auth2-4b5c9.appspot.com',
      messagingSenderId: '451983838117'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    const firebase = require("firebase");

    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}


export default App;
