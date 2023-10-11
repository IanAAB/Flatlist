
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import screen1 from './screens/1';
import screen2 from './screens/2';
import screen3 from './screens/3';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="1">
        <Stack.Screen name="1" component={screen1} />
        <Stack.Screen name="2" component={screen2} />
        <Stack.Screen name="3" component={screen3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
