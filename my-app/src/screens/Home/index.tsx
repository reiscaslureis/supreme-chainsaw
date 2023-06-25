import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import { Settings } from "../Settings";
import { Dashboard } from "../Dashboard";

const Tab = createBottomTabNavigator()

export function Home() {

    return (

        <Tab.Navigator>
            <Tab.Screen name="Settings" component={Settings} options={{headerShown: false}} />
            <Tab.Screen name="Dashboard" component={Dashboard} options={{headerShown: false}} />
        </Tab.Navigator>

    
    )

}