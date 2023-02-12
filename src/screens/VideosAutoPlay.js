import { View, Text } from 'react-native'
import React from 'react'

const VideosAutoPlay = () => {


    const data = [
        {
            type:'image',
            url:'https://www.edrawsoft.com/templates/images/promotional-banner.png'
        },
        {
            type:'video',
            url:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
        },
        {
            type:'video',
            url:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
        },
        {
            type:'image',
            url:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
        },
        {
            type:'video',
            url:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4'
        },
        {
            type:'image',
            url:'https://www.edrawsoft.com/templates/images/promotional-banner.png'
        },,
        {
            type:'image',
            url:'https://www.edrawsoft.com/templates/images/promotional-banner.png'
        },
        {
            type:'video',
            url:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4'
        },
    ]

  return (
    <View>
      <Text>VideosAutoPlay</Text>
    </View>
  )
}

export default VideosAutoPlay;