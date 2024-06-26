import { StyleSheet, Text, View ,SafeAreaView,Image,TouchableOpacity,ToastAndroid} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { GetScreenProgress, SaveScreenProgress } from '../Utils'

const LookingFor = () => {
  const navigation=useNavigation();
  const [lookingfor,setLookingFor]=useState('');
  useEffect(()=>{
    GetScreenProgress('lookingfor').then((Data)=>{
      if(Data)
        {
          setLookingFor(Data);
          console.log(Data)
        }
    })
  })
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
      <Text style={{fontSize:30,fontWeight:'bold',color:'black',marginLeft:15}} >What Kind of Relationship,are you looking for?</Text>
      <Text style={{ marginLeft:15, marginRight:15,marginTop:15}}>Make Your Intensions clear </Text>
    </View>
    <View style={{marginTop:15}}>
      <View style={{marginLeft:17 , flexDirection:'row' , justifyContent:'space-between',marginRight:15}}>
      <Text style={{fontSize:20,color:'black'}}>Life Partner</Text>
      <MaterialCommunityIcons onPress={()=>setLookingFor('lifepart')} name='circle' size={24} color={lookingfor=='lifepart'?'grey':'black'}/>
      </View>

      <View style={{marginLeft:17 ,marginTop:15, flexDirection:'row' , justifyContent:'space-between',marginRight:15}}>
      <Text style={{fontSize:20,color:'black'}}>Long term and Open to short</Text>
      <MaterialCommunityIcons onPress={()=>setLookingFor('lts')} name='circle' size={24} color={lookingfor==='lts'?'grey':'black'}/>
      </View>

      

      <View style={{marginLeft:17 ,marginTop:15, flexDirection:'row' , justifyContent:'space-between',marginRight:15}}>
      <Text style={{fontSize:20,color:'black'}}>Only Long Term</Text>
      <MaterialCommunityIcons onPress={()=>setLookingFor('olt')} name='circle' size={24} color={lookingfor==='olt'?'grey':'black'}/>
      </View>

      <View style={{marginLeft:17 ,marginTop:15, flexDirection:'row' , justifyContent:'space-between',marginRight:15}}>
      <Text style={{fontSize:20,color:'black'}}>Short term Relationship</Text>
      <MaterialCommunityIcons onPress={()=>setLookingFor('str')} name='circle' size={24} color={lookingfor==='str'?'grey':'black'}/>
      </View>

      <View style={{marginLeft:17 ,marginTop:15, flexDirection:'row' , justifyContent:'space-between',marginRight:15}}>
      <Text style={{fontSize:20,color:'black'}}>Short Term and Open to Long</Text>
      <MaterialCommunityIcons onPress={()=>setLookingFor('stotl')} name='circle' size={24} color={lookingfor==='stotl'?'grey':'black'}/>
      </View>



      

      <TouchableOpacity onPress={()=>{
        if(lookingfor!=='')
          {
            SaveScreenProgress('lookingfor',lookingfor);
          }
        lookingfor===''?ToastAndroid.show('you must choose an option',ToastAndroid.SHORT):navigation.navigate('HomeTown')}
    } style={{marginTop:20}}>
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

export default LookingFor

const styles = StyleSheet.create({})