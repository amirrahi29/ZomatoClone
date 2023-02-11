import { View, Image, StyleSheet } from 'react-native'
import React from 'react';
import CommonCss from '../GlobalEquipments/css/CommonCss';
import AllIcons from '../GlobalEquipments/AllIcons';
import { AllDimensions } from '../GlobalEquipments/AllDimensions';

const Login = () => {
  return (
    <View style={CommonCss.container}>
        <Image source={AllIcons.food1} style={styles.imageStyle} />
    </View>
  )
}

export default Login;

const styles = StyleSheet.create({
  imageStyle:{
    height:300,
    width:'100%',
    borderBottomLeftRadius:Platform.OS != 'IOS'?16:0,
    borderBottomRightRadius:Platform.OS != 'IOS'?16:0,
  }
});