import React, { Component } from 'react';
import { StyleSheet, } from 'react-native';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav';

export default class NavBarIOSLight extends Component {
  render() {
    return (
      <NavBar
        style={style}
        statusBar={StatusBarConfig}
      >
        <NavButton onPress={() => alert('hi')}>
          <NavButtonText>
            {"Button"}
          </NavButtonText>
        </NavButton>
        <NavTitle>
          {"App"}
        </NavTitle>
        <NavButton onPress={() => alert('hi')}>
          <NavButtonText>
            {"Button"}
          </NavButtonText>
        </NavButton>
      </NavBar>
    )
  }
}

const IOS_STATUS_BAR_HEIGHT = 20;
const ANDROID_STATUS_BAR_HEIGHT =20;
const IOS_NAV_BAR_HEIGHT = 64;
const ANDROID_NAV_BAR_HEIGHT = 54;

const style = StyleSheet.create({
  statusBar: {
    // StatusBar styles here (all view styles are valid)

    // default iOS styles:
    height: IOS_STATUS_BAR_HEIGHT,
    backgroundColor: '#f5f5f5',

    // default Android styles:
    height: ANDROID_STATUS_BAR_HEIGHT,
    backgroundColor: '#f5f5f5',
  },
  navBarContainer: {
    // NavBarContainer styles here (all view styles are valid)
    // unlikely that you will need to add any styles here
  },
  navBar: {
    // NavBar styles here (all view styles are valid)

    // default shared styles:
    borderTopWidth: 0,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    // default iOS styles:
    backgroundColor: '#f5f5f5',
    height: IOS_NAV_BAR_HEIGHT,
    paddingLeft: 8,
    paddingRight: 8,

    // default Android styles:
    backgroundColor: '#f5f5f5',
    height: ANDROID_NAV_BAR_HEIGHT,
    padding: 16,
  }
})

const StatusBarConfig = {
  // put any configuration for the StatusBar here

  // default iOS configuration:
  animated: true,
  hidden: false,
  barStyle: 'default',
  networkActivityIndicatorVisible: false,
  showHideTransition: 'fade',

  // default Android configuration:
  animated: true,
  hidden: false,
  showHideTransition: 'fade',
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
  translucent: true,  // I recommend you leave this true by default and
                      // set the backgroundColor to a non-translucent
                      // color if you don't want translucency
}

