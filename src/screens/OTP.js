import { StyleSheet, Image, TouchableOpacity, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import CommonCss from '../GlobalEquipments/css/CommonCss'
import AllIcons from '../GlobalEquipments/AllIcons';
import { ScrollView } from 'moti';
import Toast from 'react-native-simple-toast';

const OTP = () => {

    //otp filed
    const [otp, setOtp] = useState('');

    //navigation 
    const navigation = useNavigation();

    return (
        <ScrollView style={[CommonCss.container]}>
            <Image source={AllIcons.food1} style={styles.imageStyle} />
            <OTPInputView
                color="red"
                style={{ width: '80%', height: 50, alignSelf: 'center', marginTop: 50 }}
                pinCount={4}
                code={otp}
                onCodeChanged={code => setOtp(code)}
                autoFocusOnLoad={false}
                codeInputFieldStyle={styles.underlineStyleBase}
                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                onCodeFilled={(code) => {
                    console.log(`Code is ${code}, you are good to go!`)
                }}
            />

            <TouchableOpacity
                onPress={() => {
                    Toast.show('This is a styled toast', Toast.LONG, { backgroundColor: 'pink' });
                }}
                style={{
                    marginLeft: 8,
                    marginRight: 8,
                    backgroundColor: AllColors.themeColor, flex: 1,
                    borderRadius: 8, marginTop: 16,
                    justifyContent: 'center', alignItems: 'center'
                }}>
                <Text style={{ color: AllColors.white, fontSize: 24, padding: 8 }}>Show Toast</Text>
            </TouchableOpacity>


            <TouchableOpacity
                onPress={() => navigation.replace('Home')}
                style={{
                    marginLeft: 8,
                    marginRight: 8,
                    backgroundColor: AllColors.themeColor, flex: 1,
                    borderRadius: 8, marginTop: 16,
                    justifyContent: 'center', alignItems: 'center'
                }}>
                <Text style={{ color: AllColors.white, fontSize: 24, padding: 8 }}>Go to Home</Text>
            </TouchableOpacity>

        </ScrollView>
    )
}

export default OTP



const styles = StyleSheet.create({
    imageStyle: {
        height: 300,
        width: '100%',
        borderBottomLeftRadius: Platform.OS != 'IOS' ? 16 : 0,
        borderBottomRightRadius: Platform.OS != 'IOS' ? 16 : 0,
    },
    borderStyleBase: {
        width: 30,
        height: 45,
    },

    borderStyleHighLighted: {
        borderColor: "#ff0000"
    },

    underlineStyleBase: {
        width: 50,
        height: 60,
        borderWidth: 1,
        borderBottomWidth: 1,
        color: 'white',
        borderRadius: 8,
        backgroundColor: 'red'
    },

    underlineStyleHighLighted: {
        borderColor: "green",
        borderWidth: 1
    },
});
