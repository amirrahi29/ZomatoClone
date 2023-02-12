import { View, Text, StyleSheet, Dimensions, StatusBar, FlatList } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import Video from 'react-native-video';
import VideosList from '../GlobalEquipments/VideosList';
import AllIcons from '../GlobalEquipments/AllIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SwiperFlatList from 'react-native-swiper-flatlist';

const { height, width } = Dimensions.get('window');

const InstaReels = () => {

    const videoRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(()=>{
        if(!!videoRef.current){
            videoRef.current.seek(0)
        }
    },[currentIndex]);

    const onBuffer = () => {
        console.log('Buffering...............');
    }
    const onError = () => {
        console.log('Error...............');
    }

    const onChangeIndex=({index})=>{
        setCurrentIndex(index);
    }

    const renderItem = ({item,index}) => {
        return (
            <View style={{ flex: 1 }}>
                <Video
                    source={{ uri: item.url[0] }}
                    ref={videoRef}
                    poster={item.thumb}
                    resizeMode='cover'
                    onBuffer={onBuffer}
                    onError={onError}
                    paused={currentIndex !== index}
                    repeat
                    style={styles.backgroundVideo} />

                <View style={{ position: 'absolute', bottom: 50 }}>
                    <Text style={{ marginLeft: 8, marginRight: 8, fontSize: 20, fontWeight:'bold' }}>{item.title}</Text>
                    <Text style={{ marginLeft: 8, marginRight: 8, fontSize: 12 }}>{item.description}</Text>
                </View>

            </View>
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>

            <StatusBar barStyle='light-content' />

            <SwiperFlatList
                vertical={true}
                data={VideosList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
                onChangeIndex={onChangeIndex}
            />


        </View>
    )
}

export default InstaReels

// Later on in your styles..
var styles = StyleSheet.create({
    backgroundVideo: {
        height: height,
        width: width,
    },
});