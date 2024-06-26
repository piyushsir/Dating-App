import { StyleSheet, Text, View,SafeAreaView,Image,TouchableOpacity, ScrollView,TextInput } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useState,useEffect } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GetScreenProgress,SaveScreenProgress } from '../Utils'
const HomeTown = () => {

  const [home,setHome]=useState("")
  const navigation=useNavigation();

  useEffect(()=>{
    GetScreenProgress('HomeTown').then((Data)=>{
      if(Data)
        {
          setHome(Data);
          console.log(Data)
        }
    })
  })
  return (
  
  
<SafeAreaView style={{height:'100%'}}>

<View style={{flexDirection:'row',alignItems:'center',marginTop:70 , marginLeft:15}}>
      <View style={{borderRadius:22,borderWidth:2, height:44,width:44}}>
        <MaterialCommunityIcons name='heart-outline' style={{textAlign:'center',marginTop:3}} size={34} color='black'/>
      </View>

      <Image style={{ height: 100, width: 100 }}
        source={{ uri: 'https://cdn-icons-png.flaticon.com/128/10613/10613685.png' }}>

      </Image>
    </View>
    <View style={{marginTop:-10}}>
        <Text style={{fontSize:30,fontWeight:'bold',color:'black',marginLeft:15}} >Choose Your Home Town?</Text>
        <Text style={{ marginLeft:15, marginRight:15,marginTop:15}}>This is Piyush Dating App and This is Going to be a Thing in Comming Years</Text>
      </View>
  <View style={{marginLeft:15 , marginRight:15,marginTop:20}} onChangeText={(e)=>setHome(e)}>
      <GooglePlacesAutocomplete

    
      fetchDetails={true}

      
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'AIzaSyAu6plyI9HY736-kFdBGo2zhb2aVWKF0Q8',
        language: 'en',
      }}
    />
    </View>

    <View>
      <TextInput value={home} onChangeText={(e)=>setHome(e) } placeholder='Search' style={{borderRadius:8,borderWidth:2,marginLeft:15,marginRight:15}}/>
    </View>
    
    <TouchableOpacity onPress={()=>{
      if(home!=='')
        {
          SaveScreenProgress('HomeTown',home)
        }
      navigation.navigate('photos')}} style={{marginTop:20}}>
        <MaterialCommunityIcons 

style={{textAlign:'center',
  marginTop:14,marginLeft:'auto',marginRight:15,}}
   name='arrow-right-circle'
    size={50} 
color={'black'}/>

        </TouchableOpacity>
    </SafeAreaView>
  
  )
}

export default HomeTown

const styles = StyleSheet.create({})