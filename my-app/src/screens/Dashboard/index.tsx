import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import { styles } from './styles'
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import React from "react";
import { AntDesign, Entypo  } from '@expo/vector-icons'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Draggable from 'react-native-draggable';

function SignIn() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Dashboard!</Text>
      </View>
    );
  }

export function Dashboard() {
    const navigation = useNavigation()
    const Tab = createBottomTabNavigator();
    const Stack = createStackNavigator();

    return (
        <View style={{backgroundColor: 'blue', flex: 1}} >
            <Draggable 
                renderSize={80} 
                x={200}
                y={300}
                onLongPress={()=>console.log('long press')}
                onShortPressRelease={()=>console.log('press drag')}
                onPressIn={()=>console.log('in press')}
                onPressOut={()=>console.log('out press')}
            />  
        </View>
    );  
    
} 