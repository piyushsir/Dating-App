import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import LikesScreen from '../Screens/LikesScreen';
import ChatScreen from '../Screens/ChatScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import BasicInfo from '../Screens/BasicInfo';
import NameScreen from '../Screens/NameScreen';
import PassScreen from '../Screens/PassScreen';
import BirthScreen from '../Screens/BirthScreen';
import DatingScreen from '../Screens/DatingScreen';
import EmailScreen from '../Screens/EmailScreen';
import GenderScreen from '../Screens/GenderScreen';
import HomeTown from '../Screens/HomeTown';
import LocationScreen from '../Screens/LocationScreen';
import LookingFor from '../Screens/LookingFor';
import Photos from '../Screens/Photos';
import PreFinalScreen from '../Screens/PreFinalScreen';
import PromptsScreen from '../Screens/PromptsScreen';
import ShowPrompt from '../Screens/ShowPrompt';
import TypeScreen from '../Screens/TypeScreen';
const StackNavigator2 = () => {

    const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();

    function BottomNavigator()
        {
            return(
            <Tab.Navigator screenOptions={()=>({tabBarShowLabel:false})}>
                <Tab.Screen 
                name='Home'
                component={HomeScreen}
                options={{
                  tabBarStyle:{backgroundColor:'#101010'},
                    headerShown:false,
                    tabBarIcon:({focused})=>
                        focused ? ( <MaterialCommunityIcons name='alpha' size={32} color='white'/>)
                    :( <MaterialCommunityIcons name='alpha' size={32} color='#989898'/>),
                    
                }}
                />
                <Tab.Screen
                 name='Like' 
                 component={LikesScreen}
                 options={{
                    tabBarStyle:{backgroundColor:'#101010'},
                      
                      headerShown:false,
                      tabBarIcon:({focused})=>
                          focused ? ( <Entypo name='heart' size={26} color='white'/>)
                      :( <Entypo name='heart' size={26} color='#989898'/>),
                      
                  }}
                 />
                <Tab.Screen 
                name='Chat' 
                component={ChatScreen}
                options={{
                    tabBarStyle:{backgroundColor:'#101010'},
                      
                      headerShown:false,
                      tabBarIcon:({focused})=>
                          focused ? ( <MaterialIcons name='chat-bubble-outline' size={26} color='white'/>)
                      :( <MaterialIcons name='chat-bubble-outline' size={26} color='#989898'/>),
                      
                  }}
                  />
                <Tab.Screen 
                name='Profile' 
                component={ProfileScreen}
                options={{
                    tabBarStyle:{backgroundColor:'#101010'},
                    
                      headerShown:false,
                      tabBarIcon:({focused})=>
                          focused ? ( <Ionicons name='person-circle-outline' size={26} color='white'/>)
                      :( <Ionicons name='person-circle-outline' size={26} color='#989898'/>),
                      
                  }}
                  />
            </Tab.Navigator>
            );
        }
    
    const AuthStack=()=>{
        return (
            <Stack.Navigator>
                <Stack.Screen name='basic'
                component={BasicInfo}
                options={{headerShown:false}}
                />

            <Stack.Screen name='name'
                component={NameScreen}
                options={{headerShown:false}}
                />
            <Stack.Screen name='email'
                component={EmailScreen}
                options={{headerShown:false}}
                />
            <Stack.Screen name='password'
                component={PassScreen}
                options={{headerShown:false}}
                />
            <Stack.Screen name='birth'
                component={BirthScreen}
                options={{headerShown:false}}
                />
            <Stack.Screen name='Location'
                component={LocationScreen}
                options={{headerShown:false}}
                />
            <Stack.Screen name='gender'
                component={GenderScreen}
                options={{headerShown:false}}
                />
            <Stack.Screen name='type'
                component={TypeScreen}
                options={{headerShown:false}}
                />
            <Stack.Screen name='dating'
                component={DatingScreen}
                options={{headerShown:false}}
                />
            <Stack.Screen name='lookingfor'
                component={LookingFor}
                options={{headerShown:false}}
                />
            <Stack.Screen name='HomeTown'
                component={HomeTown}
                options={{headerShown:false}}
                />
            <Stack.Screen name='photos'
                component={Photos}
                options={{headerShown:false}}
                />
            <Stack.Screen name='prompts'
                component={PromptsScreen}
                options={{headerShown:false}}
                />

            <Stack.Screen name='showprompts'
                component={ShowPrompt}
                options={{headerShown:false}}
                />
            <Stack.Screen name='prefinal'
                component={PreFinalScreen}
                options={{headerShown:false}}
                />

            </Stack.Navigator>
        )
    }
    const MainStack=()=>
        {
            return(
            <Stack.Navigator>
                
                <Stack.Screen name="main" component={BottomNavigator} options={{headerShown:false}}/>
            </Stack.Navigator>)
        }
    return (
       <NavigationContainer>
        <AuthStack/>
       </NavigationContainer>
      )
}

export default StackNavigator2

const styles = StyleSheet.create({})