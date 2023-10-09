
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/1';
import Agendamento from './screens/2';
import Consulta from './screens/3';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="1" component={Home} />
        <Stack.Screen name="2" component={Agendamento} />
        <Stack.Screen name="3" component={Consulta} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
