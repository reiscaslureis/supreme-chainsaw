import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import { Devices } from "../Devices";
import { Dashboard } from "../Dashboard";

const Tab = createBottomTabNavigator()

export function Home() {

    return (

        <Tab.Navigator>
            <Tab.Screen name="Devices" component={Devices} />
            <Tab.Screen name="Dashboard" component={Dashboard}  />
        </Tab.Navigator>

    
    )

}