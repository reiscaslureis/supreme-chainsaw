import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import { styles } from './styles'
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { AntDesign, Entypo  } from '@expo/vector-icons'; 
import { Devices } from "../Devices";
import axios, { AxiosResponse } from 'axios';
import api from '../apiService';
import { Home } from "../Home";

export function SignIn() {

    const sing_in = () => {
        api.post('/api/auth/signin', { username: username, password: password })
            .then((response: AxiosResponse) => {
                navigation.navigate('Home')
            })
          .catch((reason: AxiosError) => {
            if (reason.response!.status === 401) {
                console.log(401)
            } else {
              // Handle else
            }
      });
    }

    const navigation = useNavigation()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style = {styles.container}>

            <View style = {styles.header}>
                <Text></Text>
            </View>

            <View style = {styles.body}>

                <Text style = {styles.txt1}>Sign in</Text>

                <TextInput onChangeText={text => setUsername(text)} value={username} style = {styles.txtin1} autoCorrect={false} placeholder = 'username'/>

                <TextInput onChangeText={text => setPassword(text)} value={password} style = {styles.txtin1} autoCorrect={false} placeholder = 'password'/>

                <TouchableOpacity onPress={sing_in} style = {styles.btn1}>
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