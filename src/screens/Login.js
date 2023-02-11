import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import CommonCss from '../GlobalEquipments/css/CommonCss';
import AllIcons from '../GlobalEquipments/AllIcons';
import CommonInputField from '../GlobalEquipments/CommonInputField';
import Checkbox from 'expo-checkbox';
import { ScrollView } from 'moti';


const Login = () => {

  const [gender, setGender] = useState(false);

  return (
    <View style={CommonCss.container}>
      <Image source={AllIcons.food1} style={styles.imageStyle} />

      <ScrollView style={{
        margin: 8
      }}>

        <CommonInputField placeholder={'Enter mobile number'} onchangeMobileText={{}} />
        
        <View style={{ marginTop: 16 }}></View>

        <TouchableOpacity onPress={()=>setGender(!gender)} style={{flexDirection:'row'}}>

          <Checkbox
            style={{color:'black'}}
            value={gender}
            onValueChange={setGender}
            color={gender ? '#4630EB' : undefined}
          />

          <Text style={{color:'black',marginLeft:16}}>Male {gender}</Text>

        </TouchableOpacity>

      </ScrollView>

    </View>
  )
}

export default Login;

const styles = StyleSheet.create({
  imageStyle: {
    height: 300,
    width: '100%',
    borderBottomLeftRadius: Platform.OS != 'IOS' ? 16 : 0,
    borderBottomRightRadius: Platform.OS != 'IOS' ? 16 : 0,
  }
});