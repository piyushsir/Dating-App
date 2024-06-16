import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity,PermissionsAndroid} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MapView, { Marker } from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation'
import Geocoder from 'react-native-geocoding'
const LocationScreen = () => {
  Geocoder.init('AIzaSyAb_RYPnd_b6zR6ZVCSWzOxF8b7ZV-H9OM')
  const Permission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your Location ' +
            'so you can take awesome Locations.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the Location');
        Geolocation.getCurrentPosition(Position=>{
          const {latitude,longitude} = Position.coords;
          setRegion({...region,latitude,longitude})
          
         
          let val=latitude + ',' + longitude;

          setLocation(val)
          
        },err=>console.log("loda ka error " ,{err}))
    
      
        
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  
  const [location,setLocation] = useState("")
  const [region,setRegion] = useState({
    latitude:0 ,
    longitude: 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [coordinates] = useState([{latitude:28.70405920 ,longitude:77.10249020},{latitude: 28.70405920, longitude:77.10249020}])
  const navigation =useNavigation();
   const handleDragEnd=coordinate=>{
   let val = coordinate.latitude + ',' + coordinate.longitude
   console.log('kjsb')
   setLocation(val);
   }
  useEffect(()=>{
    
    Permission()
  },[])

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 65, marginLeft: 15 }}>

        <View style={{ borderRadius: 22, borderWidth: 2, height: 44, width: 44 }}>
          <MaterialCommunityIcons style={{ textAlign: 'center', marginTop: 3 }} name='location-enter' size={30} color={'black'} />
        </View>
        <Image style={{ height: 100, width: 100 }}
          source={{ uri: 'https://cdn-icons-png.flaticon.com/128/10613/10613685.png' }}>

        </Image>

      </View>

      <View style={{marginTop:-15}}>
      <Text style={{fontSize:30,fontWeight:'bold',color:'black',marginLeft:15}}>
            Enter Your Location
          </Text>
      </View>
  <View style={{flexDirection:'row',justifyContent:'center',borderRadius:8}}>
   <MapView style={{height:380
    , width:'95%',borderRadius:5,
   marginTop:20
    }} initialRegion={{
    latitude:28.70405920 ,
    longitude: 77.10249020,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }}>
    <Marker onDragEnd={e => setLocation(e.nativeEvent.coordinate)} draggable coordinate={coordinates[1]}>
      <View style={{borderRadius:20,borderWidth:1,backgroundColor:'black',padding:12}}>
        <Text style={{textAlign:'center' ,fontSize:14,fontWeight:500,color:'white'}}>
          {location}
        </Text>
      </View>
    </Marker>
    </MapView>      
    </View>

    <TouchableOpacity onPress={()=> navigation.navigate('gender')}>

<MaterialCommunityIcons 

style={{textAlign:'center',
  marginTop:14,marginLeft:'auto',marginRight:15,}}
   name='arrow-right-circle'
    size={40} 
color={'black'}/>
</TouchableOpacity>

      
    </SafeAreaView>
  )
}

export default LocationScreen

const styles = StyleSheet.create({})