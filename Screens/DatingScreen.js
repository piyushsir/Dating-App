import { StyleSheet, Text, View ,SafeAreaView,TouchableOpacity,Image, ToastAndroid} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import React from 'react'
import { GetScreenProgress, SaveScreenProgress } from '../Utils'

const DatingScreen = () => {

  const navigation=useNavigation();
  const [datePrefer,setDatePrefer]= useState([])

  const handleSelect=(option)=>{

      if(datePrefer.includes(option))
        {
            setDatePrefer(datePrefer.filter(itm=>itm!==option))
        }
        else{
            setDatePrefer([...datePrefer,option])
        }

  }

  useEffect(()=>{
    GetScreenProgress('dating').then((Data)=>{
      if(Data)
      {
        setDatePrefer(Data);
      }
    })
  },[])
  return (
    <SafeAreaView>
    <View style={{flexDirection:'row',alignItems:'center',marginTop:70 , marginLeft:15}}>
      <View style={{borderRadius:22,borderWidth:2, height:44,width:44}}>
        <MaterialCommunityIcons name='heart-outline' style={{textAlign:'center',marginTop:3}} size={34} color='black'/>
      </View>

      <Image style={{ height: 100, width: 100 }}
        source={{ uri: 'https://cdn-icons-png.flaticon.com/128/10613/10613685.png' }}>

      </Image>
    </View>
    <View style={{marginTop:-10}}>
      <Text style={{fontSize:30,fontWeight:'bold',color:'black',marginLeft:15}} >Who would you like to date ?</Text>
      <Text style={{ marginLeft:15, marginRight:15,marginTop:15}}>Knowing the Gender of your Date is really important </Text>
    </View>
    <View style={{marginTop:15}}>
      <View style={{marginLeft:17 , flexDirection:'row' , justifyContent:'space-between',marginRight:15}}>
      <Text style={{fontSize:20,color:'black'}}>Men</Text>
      <MaterialCommunityIcons onPress={()=>handleSelect('Men')} name='circle' size={24} color={datePrefer.includes('Men')?'grey':'black'}/>
      </View>

      <View style={{marginLeft:17 ,marginTop:15, flexDirection:'row' , justifyContent:'space-between',marginRight:15}}>
      <Text style={{fontSize:20,color:'black'}}>Women</Text>
      <MaterialCommunityIcons onPress={()=>handleSelect('Women')} name='circle' size={24} color={datePrefer.includes('Women')?'grey':'black'}/>
      </View>

      

      <View style={{marginLeft:17 ,marginTop:15, flexDirection:'row' , justifyContent:'space-between',marginRight:15}}>
      <Text style={{fontSize:20,color:'black'}}>EveryOne</Text>
      <MaterialCommunityIcons onPress={()=>handleSelect('Everyone')} name='circle' size={24} color={datePrefer.includes('Everyone')?'grey':'black'}/>
      </View>



      

      <TouchableOpacity onPress={()=>{
        if(datePrefer.length!=0)
          {
            SaveScreenProgress('dating',datePrefer);
          }
        datePrefer.length===0?ToastAndroid.show('you must choose an option',ToastAndroid.SHORT):navigation.navigate('lookingfor')

      }} style={{marginTop:20}}>
      <MaterialCommunityIcons 

style={{textAlign:'center',
marginTop:14,marginLeft:'auto',marginRight:15,}}
 name='arrow-right-circle'
  size={50} 
color={'black'}/>
      </TouchableOpacity>
    </View>


  </SafeAreaView>
  )
}

export default DatingScreen

const styles = StyleSheet.create({})