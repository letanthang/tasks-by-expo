import { Notifications } from 'expo';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation'
import store from './store';
import registerForPushNotificationsAsync from './registerForPushNotificationsAsync';
import MainScreen from './screens/MainScreen';
import TaskScreen from './screens/TaskScreen';

export default class App extends React.Component {
  state = { notification: { origin: 'mock', data: 'mock-data' } }
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

    const MainNavigator = StackNavigator({
      Main: { screen: MainScreen },
      Task: { screen: TaskScreen }
    });

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <MainNavigator />
        </View>
      </Provider>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
