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
    title: `Nhiệm vụ giao hàng #${navigation.state.params.task.taskID}`,
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
    const ids = this.task.orders.map(o => o.orderCode);
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
    const { checkList } = this.props;
    console.log('render');

    return (
      <View style={styles.contentStyle}>
        <SectionList
          sections={[
            { data: task.orders, shopName: task.shopName, address: task.address }
          ]}
          keyExtractor={(item, index) => item.orderID}
          extraData={checkList}
          renderSectionHeader={({section}) => (
            <View
              style={styles.taskItemStyle}
            >
              <View style={styles.taskCol1Style}>
                <Ionicons 
                  name='ios-call'
                  size={40}
                  color='#2978E4'
                />
              </View>
              <View style={styles.taskCol2Style}>
                <Text style={{ color: colors.text1, fontWeight: 'bold' }}>{section.shopName} ({section.data.length})</Text>
                <Text style={{ color: colors.textNormal }}>{section.address}</Text>
              </View>
              <View style={styles.taskCol3Style}>
                <FontAwesome
                  name='caret-up'
                  size={30}
                  color='#000'
                  style={{ marginTop: -15 }}
                />
              </View>
            </View>
          )}
          renderItem={({item}) => {
            console.log('renderItem');
            console.log(checkList);
            console.log(item.taskCode);
            console.log(checkList[item.taskCode]);
            return (
            <View style={styles.taskItemStyle}>
              <View style={styles.taskCol1Style} />
              <View style={styles.taskCol2Style}>
                <Text style={{ color: colors.text2, fontWeight: 'bold' }}>DH: {item.orderCode}</Text>
                <Text style={{ color: colors.textBlue }}>Phi: {item.costCOD}</Text>
                <Text style={{ color: colors.textNormal }}>{item.weight}g | {item.length}x{item.width}x{item.height}</Text>
              </View>
              <View style={styles.taskCol3Style}>
                <CheckBox
                  right
                  iconRight
                  containerStyle={{ marginRight: 0, padding: 0, backgroundColor: '#fff', borderColor: '#fff' }}
                  checked={checkList[item.orderCode]}
                />
              </View>
            </View>
          )}}
        />
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
