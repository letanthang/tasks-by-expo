import React, { Component } from 'react-native'
import NavBar, { NavGroup, NavButton, NavButtonText, NavTitle } from 'react-native-nav'

export default class NavBarAndroidLight extends Component {
  render() {
    return (
      <NavBar>
        <NavTitle>
          {"App"}
        </NavTitle>
        <NavGroup>
          <NavButton onPress={() => alert('hi')}>
            <NavButtonText>
              {"Button"}
            </NavButtonText>
          </NavButton>
          <NavButton onPress={() => alert('hi')}>
            <NavButtonText>
              {"Button"}
            </NavButtonText>
          </NavButton onPress={() => alert('hi')}>
          <NavButton>
            <NavButtonText>
              {"Button"}
            </NavButtonText>
          </NavButton>
        </NavGroup>
      </NavBar>
    )
  }
}
