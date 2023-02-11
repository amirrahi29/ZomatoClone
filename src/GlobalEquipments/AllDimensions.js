const { Dimensions } = require("react-native");

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const AllDimensions = {
    one: '1.0',
    eight: '8.0',
    twelve: '12.0',
    fourteen: '14.0',
    sixteen: '16.0',
    twenty: '20.0',
    twentyFour: '24.0',
    twentyEight: '28.0',
    thirtyTwo: '32.0',
    fourty: '40.0',
    fourtyEight: '48.0',
    fifty: '50.0',
    fiftyFive: '55.0',
    sixty: '60.0',
    sixtyFour: '64.0',
    seventy: '70.0',
    eighty: '80.0',
    eightyFour: '84.0',
    hundred: '100.0',
}

const Orientation = {
    'vertical': 'column',
    'horizontal': 'row',
}

export {
    deviceHeight,
    deviceWidth,
    AllDimensions,
    Orientation
}