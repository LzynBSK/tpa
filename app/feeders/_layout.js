import { Stack } from 'expo-router';

const StackRoutes = () => {
return(
<Stack >
    <Stack.Screen
    name='comedouros'
    options={{
        headerShown: false
    }}
    />
</Stack>
);}
export default StackRoutes;