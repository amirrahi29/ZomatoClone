import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import AllColors from "../AllColors";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: AllColors.themeColor,
    },
    logo: {
        width: responsiveWidth(70),
        height: responsiveHeight(30),
        resizeMode:'contain'
    }
});