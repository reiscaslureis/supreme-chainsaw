import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import { styles } from './styles'
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import React from "react";
import { AntDesign, Entypo  } from '@expo/vector-icons'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function SignIn() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }

export function Settings() {
    const navigation = useNavigation()
    const Tab = createBottomTabNavigator();

    return (
        <View style = {styles.container}>

            <View style = {styles.header}>
                <Text>Settings</Text>
            </View>

            <View style = {styles.body}>
                <Text>Settings</Text>
            </View>

            <View style = {styles.footer}>
                <Text>Settings</Text>
            </View>

        </View>
    )
} 