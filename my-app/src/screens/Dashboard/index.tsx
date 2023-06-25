import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import { styles } from './styles'
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import React from "react";
import { AntDesign, Entypo  } from '@expo/vector-icons'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

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
        <View style = {styles.container}>

            <View style = {styles.header}>
                <Text>Dashboard</Text>
            </View>

            <View style = {styles.body}>
                <Text>Dashboard</Text>
            </View>

            <View style = {styles.footer}>
                <Text>Dashboard</Text>
            </View>

        </View>
    )
} 