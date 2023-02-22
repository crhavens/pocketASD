import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenerScreen from '../screens/ScreenerScreen';
import QuestionScreen from '../screens/QuestionScreen';
import ResultsScreen from '../screens/ResultsScreen'

const Stack = createNativeStackNavigator();

const ScreenerNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='Screener'
    >
      <Stack.Screen options={{ headerShown: false }} name='Question' component={QuestionScreen} />
      <Stack.Screen options={{ headerShown: false }} name='Screener' component={ScreenerScreen} />
      <Stack.Screen options={{ headerShown: false }} name='Results' component={ResultsScreen} />
    </Stack.Navigator>
  )
}

export { ScreenerNavigator }