import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import NavBar, { NavGroup, NavButton, NavButtonText, NavTitle } from 'react-native-nav'
import NavBarIOSLight from './NavBarIOSLight';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NavBarIOSLight />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
