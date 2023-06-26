import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn } from './src/screens/SignIn';
import { SignUp } from './src/screens/SignUp';
import { Devices } from './src/screens/Devices';
import { Dashboard } from './src/screens/Dashboard';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './src/screens/Home';

export default function App() {

    const Stack = createNativeStackNavigator()

    return (
        
        <NavigationContainer>

          <Stack.Navigator>

            <Stack.Screen 
                name = 'SignIn' 
                component = { SignIn } 
                options = {{ headerShown: false, animation: 'none' }}
            />
            
            <Stack.Screen 
                name='SignUp'
                component = { SignUp }
                options = {{ headerShown: false, animation: 'none' }}
            />

            <Stack.Screen 
                name='Home'
                component = { Home }
                options = {{ headerShown: false, animation: 'none' }}
            />
        
          </Stack.Navigator>

        </NavigationContainer>
        
    );
}
