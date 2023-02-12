import { View, Text, Dimensions, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useRef } from 'react'
import Animated from 'react-native-reanimated';

const { height, width } = Dimensions.get('window');

const Banner = () => {

    const ref = useRef(null);


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

            <Animated.FlatList
                ref={ref}
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
                        <Animated.View style={{
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

                                <Text style={{ color: 'white', fontSize: 24 }}>{item.letter}</Text>

                            </TouchableOpacity>

                        </Animated.View>
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
                            <View
                                key={item.id}
                                style={{
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

            <View style={{ flexDirection: 'row' }}>

                {
                    currentIndex != 0 ?
                        <TouchableOpacity onPress={() => {
                            setCurrentIndex(currentIndex - 1);
                            ref.current.scrollToIndex({ animated: true, index: parseInt(currentIndex) - 1 })
                        }
                        }
                            style={{
                                backgroundColor: 'green', marginLeft: 8, marginRight: 8,
                                marginBottom: 8, borderRadius: 16, width: 150
                            }}>
                            <Text style={{ color: 'white', padding: 12, alignSelf: 'center' }}>Previous</Text>
                        </TouchableOpacity>
                        : null
                }

                {
                    currentIndex != data.length - 1 ? <TouchableOpacity onPress={() => {
                        setCurrentIndex(currentIndex + 1);
                        ref.current.scrollToIndex({ animated: true, index: parseInt(currentIndex) + 1 })
                    }
                    } style={{ backgroundColor: 'green', marginLeft: 8, marginRight: 8, marginBottom: 8, borderRadius: 16, width: 150 }}>
                        <Text style={{ color: 'white', padding: 12, alignSelf: 'center' }}>Next</Text>
                    </TouchableOpacity> : null
                }



            </View>

        </View>
    )
}

export default Banner