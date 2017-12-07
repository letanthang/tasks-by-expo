import React, { Component } from 'react';
import { View, Platform, Text, TouchableOpacity, Alert, StyleSheet, Dimensions } from 'react-native';
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
    hasCameraPermission: null,
    scanning: true
  };
  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({hasCameraPermission: status === 'granted'});
  }

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
    this.setState({ scanning: false })
  };

  render() {
    const { width, height } = Dimensions.get('window');
    return (
      <View style={styles.contentStyle}>
        {this.state.hasCameraPermission === null ?
            <Text>Requesting for camera permission</Text> :
            this.state.hasCameraPermission === false ?
              <Text>Camera permission is not granted</Text> :
              
                <BarCodeScanner
                  
                  onBarCodeRead={this._handleBarCodeRead}
                  style={StyleSheet.absoluteFill}
                >
                  <View style={styles.centerStyle}>
                    <View
                      style={{ width: width - 32 , height: width - 32, borderWidth: 1, backgroundColor: 'transparent' }} 
                    />
                    <View style={styles.guideStyle}>
                      <Text style={styles.centerTextStyle}>Di chuyển camera đến vùng chứa mã QR để quét</Text>
                    </View>
                  </View>
                </BarCodeScanner>
          }
      </View>
    );
  }
}

export default ScannerScreen;