import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button } from './components/common';
import LoginForm from './components/LoginForm.js';


class App extends Component {
  componentWillMount() {
    state = { loggedIn: false };

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
        this.setState({ loggedIn: false});
      }
    });
  }

  renderContent() {
    if (this.state.loggedIn) {
      return (
        <Button>
          Log out
        </Button>
      );
    }

    return <LoginForm />;
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
