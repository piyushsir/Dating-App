import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity,Image} from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useState } from 'react'
import { GetScreenProgress, SaveScreenProgress } from '../Utils'

const GenderScreen = () => {

  const navigation=useNavigation();
  const [gender,setGender] = useState('')
  useEffect(()=>{
    GetScreenProgress('gender').then((Data)=>{
      if(Data)
        {
            setGender(Data);
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
        <Text style={{fontSize:30,fontWeight:'bold',color:'black',marginLeft:15}} >Which Gender Describes You the Best ?</Text>
        <Text style={{ marginLeft:15, marginRight:15,marginTop:15}}>This is Piyush Dating App and This is Going to be a Thing in Comming Years</Text>
      </View>
      <View style={{marginTop:15}}>
        <View style={{marginLeft:17 , flexDirection:'row' , justifyContent:'space-between',marginRight:15}}>
        <Text style={{fontSize:20,color:'black'}}>Men</Text>
        <MaterialCommunityIcons onPress={()=>setGender('Men')} name='circle' size={24} color={gender==='Men'?'grey':'black'}/>
        </View>

        <View style={{marginLeft:17 ,marginTop:15, flexDirection:'row' , justifyContent:'space-between',marginRight:15}}>
        <Text style={{fontSize:20,color:'black'}}>Women</Text>
        <MaterialCommunityIcons onPress={()=>setGender('Women')} name='circle' size={24} color={gender==='Women'?'grey':'black'}/>
        </View>

        

        <View style={{marginLeft:17 ,marginTop:15, flexDirection:'row' , justifyContent:'space-between',marginRight:15}}>
        <Text style={{fontSize:20,color:'black'}}>TransGender</Text>
        <MaterialCommunityIcons onPress={()=>setGender('trans')} name='circle' size={24} color={gender==='trans'?'grey':'black'}/>
        </View>



        

        <TouchableOpacity onPress={()=>{
          if(gender!=='')
            {
              SaveScreenProgress('gender',gender)
            }
          navigation.navigate('type')}} style={{marginTop:20}}>
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

export default GenderScreen

const styles = StyleSheet.create({})