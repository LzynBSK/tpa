import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabRoutes from './tab.routes';
import FeedersList from '../components/feederList';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false}}>
      <Stack.Screen 
      name="home" 
      component={FeedersList} 
      />
    </Stack.Navigator>
  );
}