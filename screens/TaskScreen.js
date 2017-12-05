import React, { Component } from "react";
import { View, Platform, TouchableOpacity, Button, FlatList, Text } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { STATUS_BAR_HEIGHT } from '../constants';
import { styles } from '../styles';


class TaskScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: `Task detail ${navigation.state.params.task.taskID}`,
    headerStyle: {
      height: Platform.OS === 'android' ? 54 + STATUS_BAR_HEIGHT : 54,
      backgroundColor: '#005939'
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

  componentWillMount() {
    this.task = this.props.navigation.state.params.task;
  }
  
  componentWillReceiveProps(nextProps) {
    console.log('cwrp');
    this.task = this.props.navigation.state.params.task;
    console.log(task);
  }

  render() {
    const task = this.task;
    console.log('render');
    console.log(task);
    console.log(this.props.navigation.state.params.task);
    return (
      <View style={styles.contentStyle}>
        <View style={{ height: 70 }}>
          <View style={styles.taskItemStyle}>
            <View style={styles.taskCol1Style}>
            </View>
            <View style={styles.taskCol2Style}>
              <Text>{task.shopName}</Text>
              <Text>Địa chỉ: {task.address}</Text>
            </View>
            <View style={styles.taskCol3Style}>
            </View>
          </View>
        </View>
        <View style={styles.wrapperStyle}>
          <FlatList
            data={task.orders}
            keyExtractor={(item, index) => item.orderID}
            renderItem={({item}) => (
              <View style={styles.taskItemStyle}>
                <View style={styles.taskCol1Style}>
                </View>
                <View style={styles.taskCol2Style}>
                  <Text>ĐH: {item.orderCode}</Text>
                  <Text>Phí: {item.costCOD}</Text>
                  <Text>{item.weight}g | {item.length}x{item.width}x{item.height}</Text>
                </View>
                <View style={styles.taskCol3Style}>
                </View>
              </View>
            )}
          />
        </View>
        
      </View>
    );
  }
}

export default TaskScreen;
