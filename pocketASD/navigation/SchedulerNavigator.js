import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SchedulerScreen from '../screens/SchedulerScreen';
import SchedulerConfirmationScreen from '../screens/SchedulerConfirmationScreen';

const Stack = createNativeStackNavigator();

const SchedulerNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='SchedulerScreen'
    >
      <Stack.Screen options={{ headerShown: false }} name='SchedulerScreen' component={SchedulerScreen} />
      <Stack.Screen options={{ headerShown: false }} name='Confirmation' component={SchedulerConfirmationScreen} />
    </Stack.Navigator>
  )
}

export { SchedulerNavigator }