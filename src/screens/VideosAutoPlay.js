import { View, FlatList, Dimensions, Text } from 'react-native'
import React from 'react'
import {
    OffsetYProvider,
    IndexProvider,
    InCenterConsumer
} from "@n1ru4l/react-in-center-of-screen";
import Video from 'react-native-video';
import { Image } from 'moti';

const VideosAutoPlay = () => {

    const { height: windowHeight } = Dimensions.get("window");
    const boxHeight = windowHeight / 3;

    const data = [
        {
            type: "image",
            src: "https://www.edrawsoft.com/templates/images/promotional-banner.png"
        },
        {
            type: "video",
            src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        },
        {
            type: "video",
            src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
        },
        {
            type: "image",
            src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        },
        {
            type: "video",
            src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
        },
        {
            type: "image",
            src: "https://www.edrawsoft.com/templates/images/promotional-banner.png"
        },
        {
            type: "image",
            src: "https://www.edrawsoft.com/templates/images/promotional-banner.png"
        },
        {
            type: "video",
            src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4"
        },
    ]

    return (
        <OffsetYProvider
            columnsPerRow={1}
            listItemHeight={boxHeight}
            centerYStart={(windowHeight * 1) / 3}
            centerYEnd={(windowHeight * 2) / 3}
        >
            {({ setOffsetY }) => (
                <FlatList
                    data={data}
                    onScroll={ev => {
                        setOffsetY(ev.nativeEvent.contentOffset.y);
                    }}
                    keyExtractor={(item, index) => index}
                    renderItem={({ index, item }) => (
                        <IndexProvider index={index}>
                            {() => (
                                <View style={{ height: boxHeight }}>

                                    {
                                        item.type == 'image' ?
                                            <Image source={{uri:item.src}} style={{ width: '100%', height: '100%' }} /> :
                                            <InCenterConsumer>
                                                {({ isInCenter }) =>
                                                    isInCenter ?
                                                        <Video source={{uri:item.src}}
                                                            paused={false}
                                                            resizeMode='cover'
                                                            style={{ width: '100%', height: '100%' }} />
                                                        : <View style={{flex:1}}>
                                                            <Video source={{uri:item.src}}
                                                            paused={true}
                                                            resizeMode='cover'
                                                            style={{ width: '100%', height: '100%' }} />
                                                            <View style={{backgroundColor:'black',width:'100%',height:'100%'}}>

                                                            </View>
                                                        </View>
                                                }
                                            </InCenterConsumer>
                                    }

                                </View>
                            )}
                        </IndexProvider>
                    )}
                />
            )}
        </OffsetYProvider>
    )
}

export default VideosAutoPlay;