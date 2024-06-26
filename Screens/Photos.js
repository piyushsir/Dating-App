import { StyleSheet, Text, View, SafeAreaView, Pressable, Image, TouchableOpacity, Alert, ImageBackground } from 'react-native'
import React from 'react'
import { useState ,useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import ImagePicker from 'react-native-image-crop-picker';
import { SaveScreenProgress,GetScreenProgress } from '../Utils'

const Photos = () => {
  const navigation = useNavigation();

  const [imgUrls, setImgUrls] = useState([]);

  const UploadViaGallery = () => {
    console.log('gallery')

    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image);
      setImgUrls([...imgUrls, image.path]);
    });
  }

  const UploadViaCamera = () => {


    console.log('camera')
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setImgUrls([...imgUrls, image.path]);
    });

  }

  const AlertBox = () => {
    Alert.alert('Upload Dialog Box', 'How do you want to Upload Your picture',
      [
        {
          
          text: 'Camera',
          
          onPress: () => UploadViaCamera()
        },
        {
          text: 'Gallery',
          onPress: () => UploadViaGallery()
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
        },
      ]
    )
  }


  useEffect(()=>{
    GetScreenProgress('photos').then((Data)=>{
      if(Data)
        {
          setImgUrls(Data);
          console.log(Data)
        }
    })
  },[])
  return (
    <SafeAreaView>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 70, marginLeft: 15 }}>
        <View style={{ borderRadius: 22, borderWidth: 2, height: 44, width: 44 }}>
          <MaterialCommunityIcons name='image-outline' style={{ textAlign: 'center', marginTop: 3 }} size={34} color='black' />
        </View>

        <Image style={{ height: 100, width: 100 }}
          source={{ uri: 'https://cdn-icons-png.flaticon.com/128/10613/10613685.png' }}>

        </Image>
      </View>

      <View style={{ marginTop: -10 }}>
        <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'black', marginLeft: 15 }} >Upload Your Best Photos</Text>
        <Text style={{ marginLeft: 17, marginRight: 15, marginTop: 15 }}>People see you and gets attracted </Text>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginTop: 20 }}>

        <Pressable key={1} onPress={() => AlertBox()} style={{ borderWidth: imgUrls[0]?0:2, borderRadius: 10, borderStyle: 'dashed', height: 100, width: 100 }}>
          {
            imgUrls[0] ? <Image style={{ height: 100, width: 100 }} source={{uri:imgUrls[0]}}/>
              :
              (<EvilIcons
                style={{
                  textAlign: 'center',
                  paddingVertical: 33
                }}
                name='image' size={22} />)
          }
        </Pressable>

        <Pressable key={2} onPress={() => AlertBox()} style={{ borderWidth: imgUrls[1]?0:2, borderRadius: 10, borderStyle: 'dashed', height: 100, width: 100 }}>
          {
            imgUrls[1] ? <Image style={{ height: 100, width: 100 }} source={{uri:imgUrls[1]}}/>
              :
              (<EvilIcons
                style={{
                  textAlign: 'center',
                  paddingVertical: 33
                }}
                name='image' size={22} />)
          }
        </Pressable>

      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginTop: 20 }}>

      <Pressable key={3} onPress={() => AlertBox()} style={{ borderWidth: imgUrls[2]?0:2, borderRadius: 10, borderStyle: 'dashed', height: 100, width: 100 }}>
          {
            imgUrls[2] ? <Image style={{ height: 100, width: 100 }} source={{uri:imgUrls[2]}}/>
              :
              (<EvilIcons
                style={{
                  textAlign: 'center',
                  paddingVertical: 33
                }}
                name='image' size={22} />)
          }
        </Pressable>

        <Pressable key={4} onPress={() => AlertBox()} style={{ borderWidth: imgUrls[3]?0:2, borderRadius: 10, borderStyle: 'dashed', height: 100, width: 100 }}>
          {
            imgUrls[3] ? <Image style={{ height: 100, width: 100 }} source={{uri:imgUrls[3]}}/>
              :
              (<EvilIcons
                style={{
                  textAlign: 'center',
                  paddingVertical: 33
                }}
                name='image' size={22} />)
          }
        </Pressable>

      </View>

      <Text style={{ marginTop: 20, marginLeft: 17, color: 'grey', fontSize: 18 }}>Upload 4 Photos to get Started and rizz everyone</Text>

      <TouchableOpacity onPress={() => {
        if(imgUrls.length!=0)
          {
            SaveScreenProgress('photos',imgUrls);
          }
          navigation.navigate('prompts')}} style={{ marginTop: 20 }}>
        <MaterialCommunityIcons

          style={{
            textAlign: 'center',
            marginTop: 14, marginLeft: 'auto', marginRight: 15,
          }}
          name='arrow-right-circle'
          size={50}
          color={'black'} />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Photos

const styles = StyleSheet.create({})