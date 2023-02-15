import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import { MainDrawerNavigator } from './DrawerNavigator';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
            <Stack.Screen options={{ headerShown: false }} name="Home" component={MainDrawerNavigator} />
        </Stack.Navigator>
    )
}

export { MainStackNavigator }