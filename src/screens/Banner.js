import { View, Text, Dimensions, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const { height, width } = Dimensions.get('window');

const Banner = () => {


    const [data, setData] = useState([
        {
            id: 1,
            letter: 'one'
        },
        {
            id: 2,
            letter: 'two'
        },
        {
            id: 3,
            letter: 'three'
        },
        {
            id: 4,
            letter: 'four'
        },
        {
            id: 5,
            letter: 'five'
        }
    ]);
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <View style={{ flex: 1 }}>

            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                onScroll={e => {
                    const x = e.nativeEvent.contentOffset.x;
                    setCurrentIndex((x / width).toFixed(0));
                }}
                data={data}
                renderItem={({ item, index }) => {
                    return (
                        <View style={{
                            width: width,
                            height: height / 2,
                            justifyContent: 'center', alignItems: 'center'
                        }}>
                            <TouchableOpacity
                                disabled={true}
                                style={{
                                    width: '90%',
                                    height: '90%',
                                    marginTop: 50,
                                    borderRadius: 10,
                                    backgroundColor: 'green',
                                    alignItems: 'center',
                                    flex: 1,
                                    justifyContent: 'center'
                                }}>

                                <Text style={{ color: 'white' }}>{item.letter}</Text>

                            </TouchableOpacity>

                        </View>
                    )
                }}
            />

            <View style={{
                flex: 1,
                justifyContent: 'center',
                flexDirection: 'row',
                alignItems: 'center',
            }}>

                {
                    data.map((item, index) => {
                        return (
                            <View style={{
                                height: 8, width: currentIndex == index ? 32 : 8,
                                backgroundColor: currentIndex == index ? 'green' : 'grey',
                                borderRadius: 100,
                                marginTop: 16,
                                marginLeft: 2,
                                marginRight: 2,
                                padding: 4
                            }}>
                            </View>
                        )
                    })
                }

            </View>
        </View>
    )
}

export default Banner