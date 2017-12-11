import { Platform } from "react-native";

export const colors = {
  text1: '#222236',
  text2: '#333336',
  textNormal: '#444446',
  textBlue: '#046FE4'
}


export const styles = {
  //common
  leftIconStyle: {
    // borderWidth: 1,
    // borderColor: 'red',
    marginTop: Platform.OS === 'android' ? 20 : 0,
    marginLeft: 16,
  },
  rightIconStyle: {
    marginTop: Platform.OS === 'android' ? 20 : 0,
    marginRight: 10,
  },
  imageStyle: {
    marginTop: 20,
    marginLeft: 16,
    width: 24,
    height: 24
  },
  contentStyle: {
    flex: 1,
    backgroundColor: '#ddd'
  },
  wrapperStyle: {
    backgroundColor: '#fff'
  },
  // MainScreen
  rowStyle: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 24,
    paddingBottom: 24,
    marginBottom: 2
  },
  col1Style: {
    flex: 0.15,
  },
  col2Style: {
    flex: 0.72
  },
  col3Style: {
    flex: 0.23,
  },
  // TaskScreen
  taskSeparator: {
    height: 10,
    bottomBorderWidth: 1,
    marginLeft: 100,
    paddingLeft: 50,
    backgroundColor: '#fff'
  },
  taskItemStyle: {
    flexDirection: 'row',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#fff',
  },
  taskCol1Style: {
    flex: 0.125,
  },
  taskCol2Style: {
    flex: 0.75,
  },
  taskColBigStyle: {
    flex: 0.875,
  },
  taskCol3Style: {
    flex: 0.125,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  taskButtonStyle: { 
    backgroundColor: '#009E0F', 
    marginLeft: 16, 
    marginRight: 16, 
    marginBottom: 8, 
    alignItems: 'center', 
    padding: 8, 
    borderRadius: 2 
  },

  taskButtonStyle0: {
    backgroundColor: '#ccc',
    marginLeft: 16, 
    marginRight: 16, 
    marginBottom: 8, 
    alignItems: 'center', 
    padding: 8, 
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#aaa'
    
  },

  taskButtonTextStyle: { 
    color: '#fff' 
  },

  taskButtonTextStyle0: {
    color: '#000'
  },

  //ScannerScreen
  centerStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50,
  },

  centerTextStyle: {
    textAlign: 'center',
    color: '#fff'
  },

  guideStyle: {
    marginTop: 20,
    paddingLeft: 64,
    paddingRight: 64,
    backgroundColor: 'transparent'
  },
  dataStyle: {
    marginTop: 20,
    backgroundColor: '#00000033',
    marginLeft: 32,
    marginRight: 32,
    padding: 32,
    paddingTop: 16,
    paddingBottom: 16
  }

};
