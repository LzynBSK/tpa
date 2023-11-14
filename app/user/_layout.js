import { Stack } from "expo-router";
import { StyleSheet } from "react-native"

import { Ionicons } from '@expo/vector-icons';

export default function TabStack(){
    return(
    <Stack screenOptions={{ tabBarActiveTintColor: "#266F5F", headerShown: false, tabBarLabelStyle: styles.txtBar }}>
        <Stack.Screen
        name="signUp"
        options={{
            tabBarIcon:({color, size})=>(<Ionicons name="person-add-outline" size={size} color={color} />),
            tabBarLabel:"Cadastro"
        }}
        />
        <Stack.Screen
        name="signIn"
        options={{
            tabBarIcon:({color, size})=>(<Ionicons name="log-in-outline" size={size} color={color} />),
            tabBarLabel:"Login"
        }}
        />
    </Stack>
    );
}

const styles = StyleSheet.create({
    
})