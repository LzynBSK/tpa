import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Parse from 'parse/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import LoginScreen from './components/signIn';
import { SignUpScreen } from './components/signUp';
import FeedersList from './components/feederList';


const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();



Parse.setAsyncStorage(AsyncStorage);
Parse.initialize('sSMkcKsHdQhweSrUkvYNCDQazT9wmIxyAHmLMIhH', 'ZzP3KgYiYrqljgZABJ2JjvX7up8wlGep1O1MHk10'); // replace with your App Id and Javascript Key
Parse.serverURL = 'https://parseapi.back4app.com/'
export default function App() {
  return(
    <NavigationContainer>
    <Tabs.Navigator screenOptions={{ headerStyle:{ backgroundColor: "#266F5F" },tabBarActiveTintColor: "#266F5F", headerTitleStyle:{ color: "#FFF", fontWeight:"100"}, headerTitleAlign: "center", tabBarLabelStyle: styles.txtBar}}>
      <Tabs.Screen name='Cadastro' component={SignUpScreen} options={{tabBarIcon:({color, size})=>(<Ionicons name="person-add" size={size} color={color} />)}}/>
      <Tabs.Screen name='Login' component={LoginScreen} options={{tabBarIcon:({color, size})=>(<SimpleLineIcons name="login" size={size} color={color} />)}}/>
      <Tabs.Screen name='Comedouros' component={FeedersList} options={{tabBarIcon:({color, size})=>(<SimpleLineIcons name="login" size={size} color={color} />)}}/>
  </Tabs.Navigator>
  </NavigationContainer>
);
}

const styles = StyleSheet.create({
  txtBar:{
    fontSize: 15,
  },
  
});