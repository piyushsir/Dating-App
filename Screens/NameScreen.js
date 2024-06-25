import { StyleSheet, Text, View,SafeAreaView ,Image,TextInput,TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

import { SaveScreenProgress,GetScreenProgress } from '../Utils';

const NameScreen = () => {

  const [firstName,setFirstName] = useState("")
  const [lastName,setLastName] = useState("")
  const navigation=useNavigation()

  useEffect(()=>{

    GetScreenProgress('name').then(Data=>{
      if(Data)
        {
          console.log(Data)
          setFirstName(Data || '')
        }
    })

  },[])
  return (
    <SafeAreaView>
      <Text style={{marginTop:80, textAlign:'center'}}>No Background Checks are Conducted</Text>
      <View>
        <View style={{flexDirection:'row' , alignItems:'center', marginLeft:15}}>
          <View style={{borderRadius:22,borderWidth:2,height:44,width:44}}>
            <MaterialCommunityIcons style={{textAlign:'center',marginTop:3}} name='newspaper-variant-outline' size={30} color={'black'}/>
          </View>
          <Image style={{height:100,width:100}}
          source={{uri:'https://cdn-icons-png.flaticon.com/128/10613/10613685.png'}}>

          </Image>
        </View>
        <View style={{marginLeft:15}}>
          <Text style={{fontSize:30 , fontWeight:'bold' , color:'black'}}>
            What's Your Name ?
          </Text>
          <TextInput 
          value={firstName}
          autoFocus= {true}

          placeholder='First Name(Required)' 
          style={{ borderBottomColor:'black',
            borderBottomWidth:4 , 
            marginRight:30,marginTop:10,
          fontSize:firstName?22:22,
        fontFamily:'sans-serif-light'}}
             onChangeText={(e)=>setFirstName(e)}>

          </TextInput>

          <TextInput 
          value={lastName}
          

          placeholder='Last Name' 
          style={{ borderBottomColor:'black',
            borderBottomWidth:4 , 
            marginRight:30,marginTop:10,
          fontSize:lastName?22:22,
        fontFamily:'sans-serif-light',
      marginTop:18}}
             onChangeText={(e)=>setLastName(e)}>

          </TextInput>
          <Text style={{marginTop:4,marginLeft:3}}>Last Name is optional</Text>
        </View>
      </View>

      <TouchableOpacity onPress={()=>{

        if(firstName.trim()!=='')
          {
            SaveScreenProgress('name',firstName)
          }
        navigation.navigate('email')

      }}>

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

export default NameScreen

const styles = StyleSheet.create({})