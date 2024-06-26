import { StyleSheet, Text, View,TouchableOpacity,TextInput,SafeAreaView,Image, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'
import { GetScreenProgress, SaveScreenProgress } from '../Utils'
const PassScreen = () => {
  const [password,setPassword]=useState("");
  const [confirmPassword,setConfirmPassword] = useState("")
  const [showPassword,setShowPassword] = useState(false)
  const [showPassword2,setShowPassword2] = useState(false);
  const navigation = useNavigation();

  const togglePass=()=>{
      setShowPassword(!showPassword);
    
  }

  const togglePass2=()=>{
    setShowPassword2(!showPassword2);
  
}

useEffect(()=>{
     GetScreenProgress('password').then((Data)=>{
      if(Data){
      setPassword(Data);
      console.log(Data);
      }

     })
},[])
  return (
    <SafeAreaView>
      <View style={{marginTop:100}}>
        <View style={{flexDirection:'row' , alignItems:'center', marginLeft:15}}>
          <View style={{borderRadius:22,borderWidth:2,height:44,width:44}}>
            <MaterialCommunityIcons style={{textAlign:'center',marginTop:3}} name='lock-outline' size={30} color={'black'}/>
          </View>
          <Image style={{height:100,width:100}}
          source={{uri:'https://cdn-icons-png.flaticon.com/128/10613/10613685.png'}}>

          </Image>
        </View>
        <View style={{marginLeft:15}}>
          <Text style={{fontSize:30 , fontWeight:'bold' , color:'black'}}>
            Please Enter a Strong Password.
          </Text>
          <Text>Atleast 8 digits with special characters</Text>
          <View style={{flexDirection:'row',
            alignItems:'center',
            borderWidth:2,
            borderRadius:8,
            marginRight:20,
            justifyContent:'center',
            marginTop:20
          }}>
          <TextInput 
          value={password}
          autoFocus= {true}
          secureTextEntry={showPassword?true:false}
          placeholder='Password(Required)' 
          style={{  
            marginLeft:-30,marginTop:10,
          fontSize:password?22:22,
        fontFamily:'sans-serif-light',
    
    paddingTop:-30,
  paddingVertical:10}}
             onChangeText={(e)=>setPassword(e)}>


          </TextInput>

          <MaterialCommunityIcons 
                    name={showPassword ? 'eye-off' : 'eye'} 
                    size={24} 
                    color="#aaa"
                    onPress={togglePass} 
                    style={{marginLeft:25,paddingLeft:20}}
                /> 

          </View>

            <View style={{flexDirection:'row',
            alignItems:'center',
            borderWidth:2,
            borderRadius:8,
            marginRight:20,
            justifyContent:'center',
            marginTop:20
          }}>
          <TextInput 
          value={confirmPassword}
          secureTextEntry={showPassword2?true:false}

          placeholder='Confirm Password' 
          style={{
            marginLeft:-30,marginTop:10,
          fontSize:password?22:22,
        fontFamily:'sans-serif-light',
    
    paddingTop:-30,
  paddingVertical:10}}
             onChangeText={(e)=>setConfirmPassword(e)}>


          </TextInput>

          <MaterialCommunityIcons 
                    name={showPassword2 ? 'eye-off' : 'eye'} 
                    size={24} 
                    color="#aaa"
                    onPress={togglePass2} 
                    style={{marginLeft:25,paddingLeft:50}}
                /> 

          </View>

          
          <Text style={{marginTop:4,marginLeft:3}}>Both Passwords must Match</Text>
        </View>
      </View>

      <TouchableOpacity onPress={()=> {

        if(password.trim()!=='')
          {
            SaveScreenProgress('password',password)
          }
        (password===confirmPassword && password!==" ")?(navigation.navigate('birth')):(ToastAndroid.show('Password and Confirm Password does not match enter again',ToastAndroid.SHORT))}}>

            <MaterialCommunityIcons 

            style={{textAlign:'center',
              marginTop:14,marginLeft:'auto',marginRight:15,}}
               name='arrow-right-circle'
                size={40} 
            color={'black'}/>
      </TouchableOpacity>
    </SafeAreaView>)
    }

export default PassScreen

const styles = StyleSheet.create({})