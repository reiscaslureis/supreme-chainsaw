import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { styles } from './styles'
import { useNavigation } from "@react-navigation/native";

export function SignUp() {
    const navigation = useNavigation()

    return (
        <View style = {styles.container}>

            <View style = {styles.header}>
                <Text></Text>
            </View>

            <View style = {styles.body}>

                <Text style = {styles.txt1}>Sign up</Text>

                <TextInput style = {styles.txtin1} autoCorrect={false} placeholder = 'username'/>

                <TextInput style = {styles.txtin1} autoCorrect={false} placeholder = 'email'/>
                
                <TextInput style = {styles.txtin1} autoCorrect={false} placeholder = 'password'/>

                <TextInput style = {styles.txtin1} autoCorrect={false} placeholder = 'confirm password'/>

                <TouchableOpacity style = {styles.btn1}>
                    <Text style = {styles.btnt1} >SIGN UP</Text>
                </TouchableOpacity>

            </View>


            <View style = {styles.footer}>
                <Text>Have a account?
                    <Text style = {styles.txt2} onPress={() => navigation.navigate('SignIn')}> Sign in</Text>        
                </Text>

            </View>




        </View>
    )
} 