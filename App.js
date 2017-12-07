import { Notifications } from 'expo';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { StackNavigator, TabNavigator } from 'react-navigation'
import { Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import store from './store';
import registerForPushNotificationsAsync from './registerForPushNotificationsAsync';
import MainScreen from './screens/MainScreen';
import TaskScreen from './screens/TaskScreen';
import ScannerScreen from './screens/ScannerScreen';

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
      Task: { screen: TaskScreen },
      Scanner: { screen: ScannerScreen }
    });

    const HistoryNavigator = StackNavigator({
      Main: { screen: MainScreen },
      Task: { screen: TaskScreen },
      Scanner: { screen: ScannerScreen }
    });
    
    const InformationNavigator = StackNavigator({
      Main: { screen: MainScreen },
      Task: { screen: TaskScreen },
      Scanner: { screen: ScannerScreen }
    });

    const StacksInTabs = TabNavigator({
      MainTab: {
        screen: MainNavigator,
        path: '/',
        navigationOptions: {
          tabBarLabel: 'Công việc',
          tabBarIcon: ({ tintColor, focused }) => (
            <Ionicons
              name={focused ? 'ios-list-box' : 'ios-list-box-outline'}
              size={26}
              style={{ color: tintColor }}
            />
          ),
        },
      },
      HistoryTab: {
        screen: HistoryNavigator,
        path: '/settings',
        navigationOptions: {
          tabBarLabel: 'Lịch sử ',
          tabBarIcon: ({ tintColor, focused }) => (
            <Ionicons
              name={focused ? 'ios-clock' : 'ios-clock-outline' }
              size={26}
              style={{ color: tintColor }}
            />
          ),
        },
      },
      InformationTab: {
        screen: InformationNavigator,
        path: '/settings',
        navigationOptions: {
          tabBarLabel: 'Thông tin',
          tabBarIcon: ({ tintColor, focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'account' : 'account-outline'}
              size={26}
              style={{ color: tintColor }}
            />
          ),
        },
      }
    });

    

    return (
      <Provider store={store}>
          <StacksInTabs />
      </Provider>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
