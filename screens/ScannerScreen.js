import React, { Component } from 'react';
import { View, Platform, Text, TouchableOpacity } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { STATUS_BAR_HEIGHT } from '../constants';
import { styles, colors } from '../styles';

class ScannerScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Quét mã QR',
    headerStyle: {
      height: Platform.OS === 'android' ? 54 + STATUS_BAR_HEIGHT : 54,
      backgroundColor: '#000'
    },
    headerTitleStyle: {
      marginTop: Platform.OS === 'android' ? STATUS_BAR_HEIGHT : 0,
      color: 'white'
    },
    headerLeft: (
      <TouchableOpacity
        onPress={() => navigation.goBack()}
      >
        <Ionicons 
        name='ios-arrow-back'
        size={30}
        color='#fff'
        style={styles.leftIconStyle}
      />
      </TouchableOpacity>
    )
  });

  state = {
    hasCameraPermission: null
  };

  componentDidMount() {
    this._requestCameraPermission();
  }

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  };

  _handleBarCodeRead = data => {
    Alert.alert(
      'Scan successful!',
      JSON.stringify(data)
    );
  };

  render() {
    return (
      <View style={styles.contentStyle}>
        {this.state.hasCameraPermission === null ?
            <Text>Requesting for camera permission</Text> :
            this.state.hasCameraPermission === false ?
              <Text>Camera permission is not granted</Text> :
              <View style={styles.centerStyle}>
                <BarCodeScanner
                  onBarCodeRead={this._handleBarCodeRead}
                  style={{ height: 200, width: 200 }}
                />
                <View style={styles.guideStyle}>
                  <Text style={styles.centerTextStyle}>Di chuyển camera đến vùng chứa mã QR để quét</Text>
                </View>
                
              </View>
          }
      </View>
    );
  }
}

export default ScannerScreen;