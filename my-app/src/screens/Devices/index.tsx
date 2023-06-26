import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import { styles } from './styles'
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import React from "react";
import { AntDesign, Entypo  } from '@expo/vector-icons'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { DeviceList } from "../../components/DeviceList";

export function Devices() {
    const navigation = useNavigation()
    const Tab = createBottomTabNavigator();
    const Stack = createStackNavigator();

    return (
        <DeviceList/>
    )
} 