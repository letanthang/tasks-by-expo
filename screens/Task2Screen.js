import React, { Component } from "react";
import { View, Platform, TouchableOpacity, Button, Text, SectionList } from 'react-native';
import { connect } from 'react-redux';
import { CheckBox } from 'react-native-elements';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { STATUS_BAR_HEIGHT } from '../constants';
import { styles, colors } from '../styles';
import { init } from '../actions'


class TaskScreen extends Component {
  state = { completed: false }
  static navigationOptions = ({navigation}) => ({
    title: `Nhiệm vụ bàn giao #${navigation.state.params.task.taskID}`,
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
      <TouchableOpacity
        onPress={() => navigation.navigate('Scanner')}
      >
        <FontAwesome
          name='qrcode'
          size={30}
          color='#fff'
          style={styles.rightIconStyle}
        />
      </TouchableOpacity>
    )
  });

  componentWillMount() {
    this.task = this.props.navigation.state.params.task;
    const ids = [this.task.order.orderCode, this.task.positionCode];
    this.props.init(ids);
  }
  
  componentWillReceiveProps(nextProps) {
    console.log('cwrp');
    const { ids, checkList } = nextProps;
    if (checkList !== this.props.checkList) {

      console.log(ids.length);
      console.log(Object.keys(checkList).length)
      if (ids.length === Object.keys(checkList).length) {
        this.setState({ completed: true });
      }
    }
  }

  render() {
    const task = this.task;
    const order = task.order;
    const { checkList } = this.props;
    console.log('render');

    return (
      <View style={styles.contentStyle}>
        <View style={{ flex: 1 }}>
          <View style={styles.taskItemStyle}>
            <View style={styles.taskColBigStyle}>
              <Text style={{ color: colors.text2, fontWeight: 'bold' }}>DH: {order.orderCode}</Text>
              <Text style={{ color: colors.textBlue }}>COD: {order.costCOD}</Text>
              <Text style={{ color: colors.textNormal }}>{order.weight}g | {order.length}x{order.width}x{order.height}</Text>
            </View>
            <View style={styles.taskCol3Style}>
              <CheckBox
                right
                iconRight
                containerStyle={{ marginRight: 0, padding: 0, backgroundColor: '#fff', borderColor: '#fff' }}
                checked={checkList[order.orderCode]}
              />
            </View>
          </View>
          <View style={styles.taskItemStyle}>
            <View style={styles.taskColBigStyle}>
              <Text>Mã rổ A1</Text>
            </View>
            <View style={styles.taskCol3Style}>
              <CheckBox
                right
                iconRight
                containerStyle={{ marginRight: 0, padding: 0, backgroundColor: '#fff', borderColor: '#fff' }}
                checked={checkList[task.positionCode]}
              />
            </View>
          </View>
        </View>
        <View style={{ }}>
          <TouchableOpacity
            onPress={() => {
              if (this.state.completed) {
                this.props.navigation.goBack();
              }
            }}
            style={this.state.completed ? styles.taskButtonStyle : styles.taskButtonStyle0}
          >
            <Text style={this.state.completed ? styles.taskButtonTextStyle : styles.taskButtonTextStyle0}>Nhiệm vụ hoàn thành</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ CheckItems }) => {
  const { ids, checkList } = CheckItems;
  return { ids, checkList };
}

export default connect(mapStateToProps, { init })(TaskScreen);
