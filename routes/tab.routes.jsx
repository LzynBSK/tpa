import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import LoginScreen from '../components/signIn';
import { SignUpScreen } from '../components/signUp';

const Tab = createBottomTabNavigator();

export default function TabRoutes(){
    return(
        <Tab.Navigator screenOptions={{ tabBarActiveTintColor: "#266F5F", headerShown: false, tabBarLabelStyle: styles.txtBar}}>
            <Tab.Screen 
            name='cadastro' 
            component={SignUpScreen} 
            options={{
                tabBarIcon:({color, size})=>(<Ionicons name="person-add" size={size} color={color} />),
                tabBarLabel: 'Cadastro'
                }}/>

            <Tab.Screen 
            name='login' 
            component={LoginScreen} 
            options={{
                tabBarIcon:({color, size})=>(<SimpleLineIcons name="login" size={size} color={color} />),
                tabBarLabel:'Login'
                }}/>
        </Tab.Navigator>
    );
}const styles = StyleSheet.create({
    txtBar:{
      fontSize: 15,
    },
    
  });