import { StyleSheet, Text, View,Image,TouchableOpacity,SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useState,useEffect} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { GetScreenProgress,SaveScreenProgress } from '../Utils';
const TypeScreen = () => {
  const navigation=useNavigation();
  const [type,setType] = useState('')
  useEffect(()=>{
    GetScreenProgress('type').then((Data)=>{
      if(Data)
        {
            setType(Data);
            console.log(Data)
        }
    })
  },[])
  return (
    <SafeAreaView>
      <View style={{flexDirection:'row',alignItems:'center',marginTop:70 , marginLeft:15}}>
        <View style={{borderRadius:22,borderWidth:2, height:44,width:44}}>
          <MaterialCommunityIcons name='newspaper-variant-outline' style={{textAlign:'center',marginTop:3}} size={34} color='black'/>
        </View>

        <Image style={{ height: 100, width: 100 }}
          source={{ uri: 'https://cdn-icons-png.flaticon.com/128/10613/10613685.png' }}>

        </Image>
      </View>
      <View style={{marginTop:-10}}>
        <Text style={{fontSize:30,fontWeight:'bold',color:'black',marginLeft:15}} >Whats Your Sexuality ?</Text>
        <Text style={{ marginLeft:15, marginRight:15,marginTop:15}}>Sexuality is very Important part of ones life .Everybody has the right to choose their Sexuality</Text>
      </View>
      <View style={{marginTop:15}}>
        <View style={{marginLeft:17 , flexDirection:'row' , justifyContent:'space-between',marginRight:15}}>
        <Text style={{fontSize:20,color:'black'}}>Straight</Text>
        <MaterialCommunityIcons onPress={()=>setType('st')} name='circle' size={24} color={type==='st'?'grey':'black'}/>
        </View>


        <View style={{marginLeft:17 , flexDirection:'row' , justifyContent:'space-between',marginRight:15,marginTop:15}}>
        <Text style={{fontSize:20,color:'black'}}>Lesbian</Text>
        <MaterialCommunityIcons onPress={()=>setType('ls')} name='circle' size={24} color={type==='ls'?'grey':'black'}/>
        </View>

        <View style={{marginLeft:17 , flexDirection:'row' , justifyContent:'space-between',marginRight:15,marginTop:15}}>
        <Text style={{fontSize:20,color:'black'}}>Gay</Text>
        <MaterialCommunityIcons onPress={()=>setType('gy')} name='circle' size={24} color={type==='gy'?'grey':'black'}/>
        </View>

        <View style={{marginLeft:17 , flexDirection:'row' , justifyContent:'space-between',marginRight:15,marginTop:15}}>
        <Text style={{fontSize:20,color:'black'}}>BiSexual</Text>
        <MaterialCommunityIcons onPress={()=>setType('bs')} name='circle' size={24} color={type==='bs'?'grey':'black'}/>
        </View>
        

       

        <TouchableOpacity onPress={()=>{
          if(type!=='')
            {
              SaveScreenProgress('type',type)
            }
          navigation.navigate('dating')}} style={{marginTop:20}}>
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

export default TypeScreen

const styles = StyleSheet.create({})