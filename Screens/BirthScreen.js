import { StyleSheet, Text, View,SafeAreaView,Image,TouchableOpacity,TextInput} from 'react-native'
import React, { useEffect } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useState,useRef } from 'react'
import { useNavigation } from '@react-navigation/native'
import { GetScreenProgress, SaveScreenProgress } from '../Utils'

const BirthScreen = () => {
  const [day,setDay]=useState('')
  const [month,setMonth]=useState('')
  const [year,setYear] = useState('')
  const yearinfo = useRef(null)
  const monthinfo = useRef(null)
  const navigation = useNavigation();

  const handleDay=(text)=>
    {
      setDay(text);
      if(text.length===2)
        {
          monthinfo.current.focus();
        }
    }

    const handleMonth=(text)=>
      {
        setMonth(text);
        if(text.length===2)
          {
            yearinfo.current.focus();
          }
      }

      const handleYear=(text)=>
        {
          setYear(text);
        }

        useEffect(()=>{
          GetScreenProgress('birth').then((Data)=>{
            if(Data){
            const [d,m,y] = Data.split('/');
            console.log(d+ m+ y)

            setDay(d)
            setMonth(m)
            setYear(y)
            }

          })
        },[])
  return (
    <SafeAreaView>
      <View style={{marginTop:100}}>
      <View style={{flexDirection:'row' , alignItems:'center', marginLeft:15}}>
          <View style={{borderRadius:22,borderWidth:2,height:44,width:44}}>
            <MaterialCommunityIcons style={{textAlign:'center',marginTop:3}} name='cake-variant-outline' size={30} color={'black'}/>
          </View>
          <Image style={{height:100,width:100}}
          source={{uri:'https://cdn-icons-png.flaticon.com/128/10613/10613685.png'}}>

          </Image>
        </View>


        <View>

          <Text style={{fontSize:30,fontWeight:'bold',color:'black',marginLeft:15}}>
            Enter Your Date of Birth
          </Text>

          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:20}}>

            <TextInput maxLength={2} 
             keyboardType='numeric'
              placeholder= {day===''?'DD':day}
              autoFocus={true}
              onChangeText={(e)=>handleDay(e)}
              style={{borderBottomColor:'black',borderBottomWidth:2,fontSize:22,marginRight:10}}></TextInput>
            <TextInput ref={monthinfo}
             maxLength={2}
              placeholder={month===''?'MM':month}
               keyboardType='numeric' 
               onChangeText={(e)=>handleMonth(e)} 
               style={{borderBottomColor:'black',borderBottomWidth:2,fontSize:22,marginRight:10}}></TextInput>
            <TextInput ref={yearinfo} 
            maxLength={4} 
            placeholder={year===''?'YYYY':year}
            keyboardType='numeric'
            onChangeText={(e)=>handleYear(e)}
             style={{borderBottomColor:'black',borderBottomWidth:2,fontSize:22,marginRight:10}}></TextInput>

          </View>


        </View>

        <TouchableOpacity onPress={()=> {
          if(day.trim()!=='' && month.trim()!=='' && year.trim()!=='')
            {
              const dob = `${day}/${month}/${year}`
              SaveScreenProgress('birth',dob);
              console.log(dob)
            }
          navigation.navigate('Location')}}>

<MaterialCommunityIcons 

style={{textAlign:'center',
  marginTop:14,marginLeft:'auto',marginRight:15,}}
   name='arrow-right-circle'
    size={40} 
color={'black'}/>
</TouchableOpacity>
      </View>
      
    </SafeAreaView>
  )
}

export default BirthScreen

const styles = StyleSheet.create({})