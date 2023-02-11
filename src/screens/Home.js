import React, { useState } from "react";
import { Dimensions, Text, TouchableOpacity, View, Image, FlatList } from "react-native";
import Modal from "react-native-modal";
import Carousel from 'react-native-reanimated-carousel';
import AllIcons from "../GlobalEquipments/AllIcons";

const Home = () => {

  const [isModalVisible, setModalVisible] = useState(false);
  const [isBottomModalVisible, setBottomModalVisible] = useState(false);

  const [isSelected, setIsSelected] = useState(1);

  const [languages, setLanguages] = useState([
    {
      id:1,
      language: 'English',
    },
    {
      id:2,
      language: 'हिंदी',
    },
    {
      id:3,
      language: 'मराठी',
    },
    {
      id:4,
      language: 'उर्दू',
    },
    {
      id:5,
      language: 'तेलुगु',
    }
  ]);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const toggleBottomModal = () => {
    setBottomModalVisible(!isBottomModalVisible);
  }


  const data = [
    {
      id: 1,
      title: 'banner1',
      image: AllIcons.food1
    },
    {
      id: 2,
      title: 'banner2',
      image: AllIcons.food2
    },
    {
      id: 3,
      title: 'banner3',
      image: AllIcons.food1
    },
    {
      id: 4,
      title: 'banner4',
      image: AllIcons.food2
    },
  ];

  const width = Dimensions.get('window').width;

  return (
    <View style={{ flex: 1 }}>

      <TouchableOpacity onPress={toggleModal} style={{ backgroundColor: 'green', margin: 32, borderRadius: 16 }}>
        <Text style={{ color: 'white', padding: 12, alignSelf: 'center' }}>Open model</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={toggleBottomModal} style={{ backgroundColor: 'green', margin: 32, borderRadius: 16 }}>
        <Text style={{ color: 'white', padding: 12, alignSelf: 'center' }}>Open bottom sheet</Text>
      </TouchableOpacity>

      <Modal
        isVisible={isModalVisible}
        hasBackdrop={true}
      >
        <TouchableOpacity onPress={toggleModal} style={{
          flex: 1,
          justifyContent: 'center', alignItems: 'center'
        }}>

          <View style={{
            alignItems: 'center',
            height: 200,
            borderRadius: 16,
            alignSelf: 'center',
            backgroundColor: 'white', width: '100%', padding: 16
          }}>
            <Text style={{ color: 'black' }}>Heloooooooo</Text>
          </View>


        </TouchableOpacity>
      </Modal>


      <Modal
        isVisible={isBottomModalVisible}
        hasBackdrop={true}
        animationIn='slideInUp'
        style={{
          margin: 0
        }}
      >
        <TouchableOpacity onPress={toggleBottomModal} style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>

          <View style={{
            height: 400,
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            backgroundColor: 'white',
            width: '100%',
            padding: 16
          }}>
            <Text style={{
              color: 'black', fontSize: 24, fontWeight: 'bold',
              marginBottom: 32,
              borderBottomColor: 'grey'
            }}>Select Language</Text>
            <FlatList
              data={languages}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity
                    onPress={()=>setIsSelected(item.id)}
                    style={{ backgroundColor: 'pink', marginBottom: 4, padding: 8, borderRadius: 8, flexDirection:'row' }}>

                    <Image source={
                     isSelected === item.id?AllIcons.check: AllIcons.uncheck} style={{height:20,width:20,alignSelf:'center'}}/>

                    <Text style={{ color: 'black', fontSize: 20, marginBottom: 8,marginLeft:8 }}>{item.language}</Text>
                  </TouchableOpacity>
                )
              }}
            />
          </View>
        </TouchableOpacity>
      </Modal>


      <Carousel
        loop
        width={width}
        height={width / 2}
        autoPlay={true}
        data={data}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => console.log('current index:', index)}
        renderItem={({ item, index }) => (
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              justifyContent: 'center',
            }}
          >
            <Image source={item.image} style={{
              resizeMode: 'cover'
            }} />

            <Text style={{
              textAlign: 'center', fontSize: 30, color: 'black',
              position: 'absolute', bottom: 0
            }}>
              {item.title}
            </Text>

          </View>
        )}
      />






    </View>
  )
}

export default Home