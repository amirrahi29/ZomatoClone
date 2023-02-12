import { View, Text } from 'react-native'
import React from 'react'
import { MotiView } from 'moti';

const AnimationsScreen = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

            <MotiView
                from={{
                    scale: 0,
                    opacity:.5
                }}
                animate={{
                    scale: 1,
                    opacity:1,
                }}
                transition={{
                    type:'timing',
                    duration:1500
                }}
                style={{
                    width: 150,
                    height: 150,
                    backgroundColor: 'green',
                    borderRadius: 16
                }}>
            </MotiView>

                <View style={{margin:16}}></View>

            <MotiView
                from={{
                    scale: 0,
                    opacity:.5,
                    transform:[{translateX:100}]
                }}
                animate={{
                    scale: 1,
                    opacity:1,
                }}
                transition={{
                    type:'timing',
                    duration:1500,
                    transform:[{translateX:-100}]
                }}
                style={{
                    width: 150,
                    height: 150,
                    backgroundColor: 'green',
                    borderRadius: 16
                }}>
            </MotiView>


            


        </View>
    )
}

export default AnimationsScreen;