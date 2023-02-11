import { View, Image, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react';
import CommonCss from '../GlobalEquipments/css/CommonCss';
import AllIcons from '../GlobalEquipments/AllIcons';
import CommonInputField from '../GlobalEquipments/CommonInputField';
import Checkbox from 'expo-checkbox';
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";
import { TextInput } from 'react-native-gesture-handler';


const Login = () => {

  //checkbox
  const [gender, setGender] = useState(false);

  //radio
  const [current, setCurrent] = useState("Male");

  return (
    <View style={CommonCss.container}>
      <Image source={AllIcons.food1} style={styles.imageStyle} />

      <ScrollView style={{
        margin: 8
      }}>

        <CommonInputField placeholder={'Enter mobile number'} onchangeMobileText={{}} />

        <View style={{ marginTop: 16 }}></View>





        <TouchableOpacity onPress={() => setGender(!gender)} style={{ flexDirection: 'row' }}>
          <Checkbox
            style={{ color: 'black' }}
            value={gender}
            onValueChange={setGender}
            color={gender ? '#4630EB' : undefined}
          />

          <Text style={{ color: 'black', marginLeft: 16 }}>Male {gender}</Text>
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
            borderWidth:1,
            borderColor:'green',
            borderRadius:16,
            verticalAlign:'top',
            color:'black',
            padding:8
          }}
        />


      </ScrollView>

    </View>
  )
}

export default Login;

const styles = StyleSheet.create({
  imageStyle: {
    height: 50,
    width: '100%',
    borderBottomLeftRadius: Platform.OS != 'IOS' ? 16 : 0,
    borderBottomRightRadius: Platform.OS != 'IOS' ? 16 : 0,
  }
});