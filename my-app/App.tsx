import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn } from './src/screens/SignIn';
import { SignUp } from './src/screens/SignUp';
import { Settings } from './src/screens/Settings';

export default function App() {

    const stack = createNativeStackNavigator()

    return (
        
        <NavigationContainer>

          <stack.Navigator>

            <stack.Screen 
                name = 'SignIn' 
                component = { SignIn } 
                options = {{ headerShown: false, animation: 'none' }}
            />
            
            <stack.Screen 
                name='SignUp'
                component = { SignUp }
                options = {{ headerShown: false, animation: 'none' }}
            />

            <stack.Screen 
                name='Settings'
                component = { Settings }
                options = {{ headerShown: false, animation: 'none' }}
            />
            
          </stack.Navigator>

        </NavigationContainer>
    );
}
