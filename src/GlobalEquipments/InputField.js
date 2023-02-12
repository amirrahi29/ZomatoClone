import React  from "react";
import { View,TextInput,Text } from "react-native";

const InputField = ({ value, label, name, placeholder, type, onChange }) => (
  <View className="form-group">
    <TextInput
      type={type}
      name={name}
      value={value}
      className="form-control"
      placeholder={placeholder}
      placeholderTextColor='white'
      style={{
        backgroundColor:'grey'
      }}
      onChange={onChange}
    />
  </View>
);

export default InputField;