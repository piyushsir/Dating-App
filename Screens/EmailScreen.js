import { StyleSheet, Text, View,SafeAreaView,Image,TextInput,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';
import { SaveScreenProgress,GetScreenProgress } from '../Utils';

const EmailScreen = () => {
  const [email,setEmail]=useState("");
  const navigation = useNavigation();

  useEffect(()=>
  {
    GetScreenProgress('email').then((Data)=>{
      if(Data)
        {
          setEmail(Data || '')
        }
      }
    )
    
  },[])
  return (
    <SafeAreaView>
      <View style={{marginTop:100}}>
        <View style={{flexDirection:'row' , alignItems:'center', marginLeft:15}}>
          <View style={{borderRadius:22,borderWidth:2,height:44,width:44}}>
            <MaterialCommunityIcons style={{textAlign:'center',marginTop:3}} name='email-outline' size={30} color={'black'}/>
          </View>
          <Image style={{height:100,width:100}}
          source={{uri:'https://cdn-icons-png.flaticon.com/128/10613/10613685.png'}}>

          </Image>
        </View>
        <View style={{marginLeft:15}}>
          <Text style={{fontSize:30 , fontWeight:'bold' , color:'black'}}>
            Please Enter a Valid Email.
          </Text>
          <Text>Important updates and Security Reasons</Text>
          <TextInput 
          value={email}
          autoFocus= {true}
          keyboardType="email-address"
          placeholder='Valid Email(Required)' 
          style={{ borderBottomColor:'black',
            borderBottomWidth:4 , 
            marginRight:30,marginTop:18,
          fontSize:email?22:22,
        fontFamily:'sans-serif-light'}}
             onChangeText={(e)=>setEmail(e)}>

          </TextInput>

          
          <Text dynamicTypeRamp='email' style={{marginTop:4,marginLeft:3}}>Email Verification is necessary</Text>
        </View>
      </View>

      <TouchableOpacity onPress={()=>{
       
        if(email.trim()!=='')
          {
            SaveScreenProgress('email',email)
          }
          navigation.navigate('password')
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

export default EmailScreen

const styles = StyleSheet.create({})