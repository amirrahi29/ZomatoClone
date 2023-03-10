import { View, Image, StyleSheet, Text, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native'
import React, { useState } from 'react';
import CommonCss from '../GlobalEquipments/css/CommonCss';
import AllIcons from '../GlobalEquipments/AllIcons';
import CommonInputField from '../GlobalEquipments/CommonInputField';
import Checkbox from 'expo-checkbox';
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";
import { TextInput } from 'react-native-gesture-handler';
import AllColors from '../GlobalEquipments/AllColors';
import { useNavigation } from '@react-navigation/native'


const Login = () => {

  //checkbox
  const [gender, setGender] = useState(false);

  //radio
  const [current, setCurrent] = useState("Male");

  //navigatio
  const navigate = useNavigation();


  return (
    <View style={CommonCss.container}>
      <Image source={AllIcons.food1} style={styles.imageStyle} />

      <ActivityIndicator
        size='large'
        color={'red'}
        style={{
          height: 100,
          width: 100,
          alignSelf: 'center'
        }} />

      <CommonInputField placeholder={'Enter mobile number'} onchangeMobileText={{}} />




      <ScrollView style={{
        margin: 8
      }}>




        <View style={{ marginTop: 16 }}></View>


        <TouchableOpacity onPress={() => setGender(!gender)} style={{ flexDirection: 'row' }}>
          <Checkbox
            style={{ color: 'black' }}
            value={gender}
            onValueChange={setGender}
            color={gender ? '#4630EB' : undefined}
          />

          <Text style={{ color: 'black', marginLeft: 16 }}>Gender    ||   {gender ? 'Male' : 'Female'}</Text>
        </TouchableOpacity>






        <View style={{ marginTop: 50 }}>
          <RadioButtonGroup
            containerStyle={{ marginBottom: 10 }}
            selected={current}
            onSelected={(value) => setCurrent(value)}
            radioBackground="green"
          >
            <RadioButtonItem
              value="Male"
              label={
                <Text style={{ color: "red" }}>Male</Text>
              } />
            <RadioButtonItem
              value="Female"
              label={
                <Text style={{ color: "red" }}>Female</Text>
              }
            />
          </RadioButtonGroup>
        </View>
        <Text style={{ color: 'red' }}>{current}</Text>


        <Text style={{ marginTop: 50 }}>{current}</Text>


        <TextInput
          placeholder='Enter comments'
          placeholderTextColor={'black'}
          multiline={true}
          numberOfLines={5}
          style={{
            borderWidth: 1,
            borderColor: 'green',
            borderRadius: 16,
            verticalAlign: 'top',
            color: 'black',
            padding: 8
          }}
        />

        <TouchableOpacity
          onPress={() => navigate.replace('OTP')}
          style={{
            backgroundColor: AllColors.themeColor, flex: 1,
            borderRadius: 8, marginTop: 16,
            justifyContent: 'center', alignItems: 'center'
          }}>
          <Text style={{ color: AllColors.white, fontSize: 24, padding: 8 }}>Submit</Text>
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
  },
});
