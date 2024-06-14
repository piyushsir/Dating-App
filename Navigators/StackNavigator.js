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
const StackNavigator2 = () => {

    const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();

    function BottomNavigator()
        {
            return(
            <Tab.Navigator>
                <Tab.Screen 
                name='Home'
                component={HomeScreen}
                options={{
                  tabBarStyle:{backgroundColor:'#101010'},
                    tabBarLabelStyle:{color:'#008397'},
                    headerShown:false,
                    tabBarIcon:({focused})=>
                        focused ? ( <MaterialCommunityIcons name='alpha' size={26} color='white'/>)
                    :( <MaterialCommunityIcons name='alpha' size={26} color='#989898'/>),
                    
                }}
                />
                <Tab.Screen
                 name='Like' 
                 component={LikesScreen}
                 options={{
                    tabBarStyle:{backgroundColor:'#101010'},
                      tabBarLabelStyle:{color:'#008397'},
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
                      tabBarLabelStyle:{color:'#008397'},
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
                      tabBarLabelStyle:{color:'#008397'},
                      headerShown:false,
                      tabBarIcon:({focused})=>
                          focused ? ( <Ionicons name='person-circle-outline' size={26} color='white'/>)
                      :( <Ionicons name='person-circle-outline' size={26} color='#989898'/>),
                      
                  }}
                  />
            </Tab.Navigator>
            );
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
        <MainStack/>
       </NavigationContainer>
      )
}

export default StackNavigator2

const styles = StyleSheet.create({})