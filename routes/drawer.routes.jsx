import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons, Feather } from '@expo/vector-icons';


import TabRoutes from './tab.routes';
import StackRoutes from './stack.routes';

const Drawer = createDrawerNavigator();


export default function DrawerRoutes() {
  return (
    <Drawer.Navigator screenOptions={{ title: '', drawerActiveTintColor:"#266f5f", drawerStyle:{backgroundColor:"#95D6Be"},  headerStyle:{ backgroundColor: "#266F5F" }, headerTitleStyle:{ color: "#FFF", fontWeight:"100"}, headerTitleAlign: "center",}}>
      <Drawer.Screen 
      name="home" 
      component={TabRoutes} 
      options={{
        drawerIcon: ({color, size}) => (<Ionicons name="home" size={size} color={color} />),
        drawerLabel: 'Início'
      }}
      />
      <Drawer.Screen 
      name="comedouros" 
      component={StackRoutes} 
      options={{
        drawerIcon: ({color, size}) => (<Feather name="user" size={size} color={color} />),
        drawerLabel: 'Comedouros'
      }}
      />
    </Drawer.Navigator>
  );
}