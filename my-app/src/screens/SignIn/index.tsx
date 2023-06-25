import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import { styles } from './styles'
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { AntDesign, Entypo  } from '@expo/vector-icons'; 
import { Settings } from "../Settings";
import axios, { AxiosResponse } from 'axios';
import api from '../apiService';
import { Home } from "../Home";

const sing_in = () => {
    api.post('/api/auth', { username: 'usersname', password: 'password' })
        .then((response: AxiosResponse) => {
            console.log(response.status)
        })
      .catch((reason: AxiosError) => {
        if (reason.response!.status === 401) {
            console.log(401)
        } else {
          // Handle else
        }
  });
}

export function SignIn() {
    const navigation = useNavigation()

    return (
        <View style = {styles.container}>

            <View style = {styles.header}>
                <Text></Text>
            </View>

            <View style = {styles.body}>

                <Text style = {styles.txt1}>Sign in</Text>

                <TextInput style = {styles.txtin1} autoCorrect={false} placeholder = 'username'/>

                <TextInput style = {styles.txtin1} autoCorrect={false} placeholder = 'password'/>

                <TouchableOpacity onPress={() => navigation.navigate('Home')} style = {styles.btn1}>
                    <Text style = {styles.btnt1}>SIGN IN</Text>
                </TouchableOpacity>
                
            </View>

            <View style = {styles.footer}>
                <Text>Don't have an account?
                    <Text style = {styles.txt2} onPress={() => navigation.navigate('SignUp')}> Sign up</Text>        
                </Text>

            </View>


        </View>
    )
} 