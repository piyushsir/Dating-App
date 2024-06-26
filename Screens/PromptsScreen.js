import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useRoute } from '@react-navigation/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { GetScreenProgress, SaveScreenProgress } from '../Utils'

const PromptsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [pr,setPr]=useState([]);

  

  useEffect(()=>{
    console.log(pr[0])
    console.log(pr[1])
    console.log(pr[2])

  },[])
  return (
    <SafeAreaView>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 70, marginLeft: 15 }}>
        <View style={{ borderRadius: 22, borderWidth: 2, height: 44, width: 44 }}>
          <MaterialCommunityIcons name='eye-outline' style={{ textAlign: 'center', marginTop: 3 }} size={34} color='black' />
        </View>

        <Image style={{ height: 100, width: 100 }}
          source={{ uri: 'https://cdn-icons-png.flaticon.com/128/10613/10613685.png' }}>

        </Image>
      </View>

      <View style={{ marginTop: -10 }}>
        <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'black', marginLeft: 15 }} >Enter Prompts</Text>
        <Text style={{ marginLeft: 17, marginRight: 15, marginTop: 15 }}>Tell people about yourself to get better matches </Text>
      </View>

      <View>
        <Pressable

          onPress={()=>navigation.navigate('showprompts')}
          style={{
            borderStyle: 'dashed',
            borderWidth: 2, 
            borderRadius: 8, 
            height: 80, 
            marginLeft: 20, 
            marginTop: 20, 
            marginRight: 20
          }}>


{route?.params?.prompt[0]?( 
  <View style={{flex:1,marginTop:4,marginLeft:20}}>
                <Text style={{fontSize:17}}>
                  {route?.params?.prompt[0]?.question}
                </Text>

                <Text style={{fontSize:20,color:'black'}}>
                  {route?.params?.prompt[0]?.answer}
                </Text>
                </View>
            )

          :(
            <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:18,color:'black'}}>
                  Choose a Prompt and Answer it
                </Text>
                </View>
          )}

        </Pressable>


        <Pressable

          onPress={()=>navigation.navigate('showprompts')}
          style={{
            borderStyle: 'dashed',
            borderWidth: 2, 
            borderRadius: 8, 
            height: 80, 
            marginLeft: 20, 
            marginTop: 20, 
            marginRight: 20
          }}>

     
{route?.params?.prompt?(
            <View style={{flex:1,marginTop:4,marginLeft:20}}>
            <Text style={{fontSize:17}}>
              {route?.params?.prompt[1]?.question}
            </Text>

            <Text style={{fontSize:20,color:'black'}}>
              {route?.params?.prompt[1]?.answer}
            </Text>
            </View>

          ):(
            <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:18,color:'black'}}>
                  Choose a Prompt and Answer it
                </Text>
                </View>
          )}

        </Pressable>


        <Pressable

          onPress={()=>navigation.navigate('showprompts')}
          style={{
            borderStyle: 'dashed',
            borderWidth: 2, 
            borderRadius: 8, 
            height: 80, 
            marginLeft: 20, 
            marginTop: 20, 
            marginRight: 20
          }}>


{route?.params?.prompt?(
            <View style={{flex:1,marginTop:4,marginLeft:20}}>
            <Text style={{fontSize:17}}>
              {route?.params?.prompt[2]?.question}
            </Text>

            <Text style={{fontSize:20,color:'black'}}>
              {route?.params?.prompt[2]?.answer}
            </Text>
            </View>
          ):(
            <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:18,color:'black'}}>
                  Choose a Prompt and Answer it
                </Text>
                </View>
          )}

        </Pressable>


      </View>


      <TouchableOpacity onPress={() => {
        if(route?.params?.prompt?.length!=0)
          {
            route?.params?.prompt?.map((val)=>{
              
             const newVal = `${val.question}+${val.answer}`
             console.log(newVal)
              setPr([...pr,newVal])
             

            })

            
            SaveScreenProgress('prompts',pr);
          }
        navigation.navigate('prefinal')}} style={{ marginTop: 20 }}>
        <MaterialCommunityIcons

          style={{
            textAlign: 'center',
            marginTop: 14, marginLeft: 'auto', marginRight: 15,
          }}
          name='arrow-right-circle'
          size={50}
          color={'black'} />
      </TouchableOpacity>

    </SafeAreaView>
  )
}

export default PromptsScreen

const styles = StyleSheet.create({})