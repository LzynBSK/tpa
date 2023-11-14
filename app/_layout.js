import { Drawer } from 'expo-router/drawer';
import { Ionicons, Feather } from '@expo/vector-icons';


export default function Layout() {
  return (
    <Drawer screenOptions={{title: '',headerShown: false, drawerActiveTintColor:"#266f5f", drawerStyle:{backgroundColor:"#95D6Be"},  headerStyle:{ backgroundColor: "#266F5F" }, headerTitleStyle:{ color: "#FFF", fontWeight:"100"}, headerTitleAlign: "center",}}>
    <Drawer.Screen
        name="user" // This is the name of the page and must match the url from root
        options={{
            drawerIcon: ({color, size}) => (<Feather name="user" size={size} color={color} />),
            drawerLabel: "Usuário"
        }}
      />
    <Drawer.Screen
        name="feeders" // This is the name of the page and must match the url from root
        options={{
            drawerIcon: ({color, size}) => (<Feather name="list" size={size} color={color} />),
            drawerLabel: "Comedouros"
        }}
      />
  </Drawer>
  );
}
