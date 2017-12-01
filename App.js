import { Notifications } from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import NavBar, { NavGroup, NavButton, NavButtonText, NavTitle } from 'react-native-nav'
import NavBarIOSLight from './NavBarIOSLight';
import registerForPushNotificationsAsync from './registerForPushNotificationsAsync';

export default class App extends React.Component {
  componentWillMount() {
    registerForPushNotificationsAsync();

    // Handle notifications that are received or selected while the app
    // is open. If the app was closed and then opened by tapping the
    // notification (rather than just tapping the app icon to open it),
    // this function will fire on the next tick after the app starts
    // with the notification data.
    this._notificationSubscription = Notifications.addListener(this._handleNotification);
  }
  _handleNotification = (notification) => {
    this.setState({notification: notification});
  };
  render() {
    return (
      <View style={styles.container}>
        <NavBarIOSLight />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Origin: {this.state.notification.origin}</Text>
          <Text>Data: {JSON.stringify(this.state.notification.data)}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
