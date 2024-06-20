import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useRoute } from '@react-navigation/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const PromptsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

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


{route?.params?.prompt?(
            route?.params?.prompt.map((itm,key)=>{<>
              <Text>
                {itm.question}
              </Text>

              <Text>
                {itm.answer}

              </Text>
              </>

            })

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
            route?.params?.prompt.map((itm,key)=>{<>
              <Text>
                {itm.question}
              </Text>

              <Text>
                {itm.answer}

              </Text>
              </>

            })

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
            route?.params?.prompt.map((itm,key)=>{<>
              <Text>
                {itm.question}
              </Text>

              <Text>
                {itm.answer}

              </Text>
              </>

            })

          ):(
            <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:18,color:'black'}}>
                  Choose a Prompt and Answer it
                </Text>
                </View>
          )}

        </Pressable>


      </View>


      <TouchableOpacity onPress={() => navigation.navigate('prefinal')} style={{ marginTop: 20 }}>
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