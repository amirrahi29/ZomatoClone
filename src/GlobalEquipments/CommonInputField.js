import { View, Image } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { Orientation } from './AllDimensions'
import AllIcons from './AllIcons'

const CommonInputField = ({ placeholder, onchangeMobileText }) => {
    return (
        <View style={{
            height: 60,
            borderColor: 'black',
            borderRadius: 8,
            padding: 8,
            borderWidth: 1,
            flexDirection: Orientation.horizontal
        }}>

            <Image source={AllIcons.logo} style={{ flex: 1, height: 50, alignSelf: 'center' }} />

            <TextInput
                style={{
                    flex: 5,
                    color: 'black'
                }}
                placeholder={placeholder}
                placeholderTextColor={'black'}

            />

        </View>
    )
}

export default CommonInputField