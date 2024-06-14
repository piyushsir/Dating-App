import { StyleSheet, Text, View,SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
const BasicInfo = (props) => {

  //const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
      <View style={{marginTop:100}}>
        <Text style={{
          fontWeight:'bold',
          fontSize:30,
          fontFamily:'Poppins',
          color:'black',
          marginLeft:20
        }}>You're a Great Human .. </Text>
        <Text style={{
          fontWeight:'bold',
          fontSize:30,
          fontFamily:'Poppins',
          color:'black',
          marginLeft:20,
          marginTop:13}}>Make an Attractive Profile to Go on .... </Text>
      </View>

      <View>
          <LottieView style={{height:300 , width:300 , marginLeft:55 , marginTop:-10}}
          source={require('../Assets/love.json')}
          autoPlay
          loop={true}
          speed={0.7}/>
      </View>

      <Pressable style={
      {backgroundColor:'#900C3F',
        height:45,
        marginTop:42

      }}
      onPress={()=>props.navigation.navigate('name')}>
        <Text style={{color:'white',padding:5,textAlign:'center',fontSize:20}}>
          Enter Basic Info to Proceed
        </Text>

      </Pressable>
    </SafeAreaView>
  )
}

export default BasicInfo

const styles = StyleSheet.create({})