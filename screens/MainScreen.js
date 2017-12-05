import React, { Component } from 'React';
import { View, Platform, Image, FlatList, Text, Button } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { STATUS_BAR_HEIGHT } from '../constants';
import { styles } from '../styles';
import icon from '../assets/icons/search-128.png';

const items = [
  {
    taskID: 12,
    taskType: 'move',
    taskName: 'Đi lấy ĐH ABC123 trong trip XX',
    totalNum: 10,
    totalCOD: 100500,
    shopName: 'Shop UyenToys',
    address: '70 Lữ Gia, P.15, Q.10',
    orders: [
      {
        orderID: 1,
        orderCode: 'ABC',
        costCOD: 12000,
        weight: 100,
        length: 20,
        width: 20,
        height: 20
      },
      {
        orderID: 2,
        orderCode: 'BCD',
        costCOD: 15500,
        weight: 200,
        length: 20,
        width: 30,
        height: 30,
      }
    ]
  },
  {
    taskID: 34,
    taskType: 'move',
    taskName: 'Đi lấy ĐH JKH123 trong trip XY',
    totalNum: 15,
    totalCOD: 50500
  }
];

class MainScreen extends Component {
  static navigationOptions = () => ({
    title: 'Task TX',
    headerStyle: {
      height: Platform.OS === 'android' ? 54 + STATUS_BAR_HEIGHT : 54,
      backgroundColor: '#005939'
    },
    headerTitleStyle: {
      marginTop: Platform.OS === 'android' ? STATUS_BAR_HEIGHT : 0,
      color: 'white'
    },
    headerLeft: (
      <MaterialCommunityIcons 
        name='magnify'
        size={30}
        color='#fff'
        style={styles.leftIconStyle}
      />
    ),
    headerRight: (
      <FontAwesome
        name='qrcode'
        size={30}
        color='#fff'
        style={styles.rightIconStyle}
      />
    )
  });
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#ccc' }}>
        <FlatList 
          data={items}
          renderItem={({ item }) => (
            <View style={styles.rowStyle}>
              <View style={styles.col1Style}>
                <FontAwesome 
                  name='flag'
                  size={30}
                  color='#a00'
                />
              </View>
              <View style={styles.col2Style}>
                <Text>{item.taskName}</Text>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                  <Text style={{ flex: 0.3 }}>SL: {item.totalNum} ĐH</Text>
                  <Text style={{ flex: 0.7 }}>Tổng thu: {item.totalCOD}đ </Text>
                </View>
              </View>
              <View style={styles.col3Style}>
                <Button 
                  title='Nhận'
                  color='#009E0F'
                  onPress={() => this.props.navigation.navigate('Task', { task: item })}
                />
              </View>
            </View>
          )}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}



export default MainScreen;