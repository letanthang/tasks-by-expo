import React, { Component } from 'React';
import { View, Platform, Image, FlatList, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { MaterialIcons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { STATUS_BAR_HEIGHT } from '../constants';
import { styles } from '../styles';
import icon from '../assets/icons/search-128.png';

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
          data={this.props.tasks}
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
                  onPress={() => {
                    switch(item.taskType) {
                      case 'pick':
                        this.props.navigation.navigate('Task', { task: item });
                        break;
                      case 'check':
                        this.props.navigation.navigate('Task1', { task: item });
                        break;
                      case 'receive':
                        this.props.navigation.navigate('Task2', { task: item });
                        break;
                      case 'deliver':
                        this.props.navigation.navigate('Task3', { task: item });
                        break;
                      default:
                        this.props.navigation.navigate('Task', { task: item });
                    }
                  }}
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

const mapStateToProps = ({ Tasks }) => {
  const { tasks } = Tasks;
  return { tasks };
};

export default  connect(mapStateToProps)(MainScreen);