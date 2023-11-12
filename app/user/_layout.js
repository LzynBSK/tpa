import { Tabs } from "expo-router";
import { StyleSheet } from "react-native"

import { Ionicons } from '@expo/vector-icons';

export default function TabRouter(){
    return(
    <Tabs screenOptions={{ tabBarActiveTintColor: "#266F5F", headerShown: false, tabBarLabelStyle: styles.txtBar }}>
        <Tabs.Screen
        name="signUp"
        options={{
            tabBarIcon:({color, size})=>(<Ionicons name="person-add-outline" size={size} color={color} />),
            tabBarLabel:"Cadastro"
        }}
        />
        <Tabs.Screen
        name="signIn"
        options={{
            tabBarIcon:({color, size})=>(<Ionicons name="log-in-outline" size={size} color={color} />),
            tabBarLabel:"Login"
        }}
        />
    </Tabs>
    );
}

const styles = StyleSheet.create({
    
})