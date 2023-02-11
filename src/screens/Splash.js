import { View, Image, StatusBar } from 'react-native';
import React, { useEffect } from 'react';
import SplashCss from '../GlobalEquipments/css/SplashCss';
import AllIcons from '../GlobalEquipments/AllIcons';
import { useNavigation } from '@react-navigation/native'
import AllColors from '../GlobalEquipments/AllColors';

const Splash = () => {

  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);
  }, [])

  return (
    <View style={SplashCss.container}>
      <StatusBar backgroundColor={AllColors.themeColor} barStyle={'light-content'} />
      <Image source={AllIcons.logo} style={SplashCss.logo} />
    </View>
  )
}

export default Splash;