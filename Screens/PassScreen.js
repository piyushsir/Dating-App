import { StyleSheet, Text, View,TouchableOpacity,TextInput,SafeAreaView,Image, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'
const PassScreen = () => {
  const [password,setPassword]=useState("");
  const [confirmPassword,setConfirmPassword] = useState("")
  const navigation = useNavigation();
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
          
          <TextInput 
          value={password}
          autoFocus= {true}
          secureTextEntry={true}
          placeholder='Password(Required)' 
          style={{ borderBottomColor:'black',
            borderBottomWidth:4 , 
            marginRight:30,marginTop:18,
          fontSize:password?22:22,
        fontFamily:'sans-serif-light'}}
             onChangeText={(e)=>setPassword(e)}>


          </TextInput>

          


          <TextInput 
          value={confirmPassword}
          secureTextEntry={true}

          placeholder='Confirm Password' 
          style={{ borderBottomColor:'black',
            borderBottomWidth:4 , 
            marginRight:30,marginTop:18,
          fontSize:password?22:22,
        fontFamily:'sans-serif-light'}}
             onChangeText={(e)=>setConfirmPassword(e)}>


          </TextInput>

          
          <Text style={{marginTop:4,marginLeft:3}}>Both Passwords must Match</Text>
        </View>
      </View>

      <TouchableOpacity onPress={()=> (password===confirmPassword && password!==" ")?(navigation.navigate('birth')):(ToastAndroid.show('Password and Confirm Password does not match enter again',ToastAndroid.SHORT))}>

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