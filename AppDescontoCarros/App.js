import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import DescontoScreen from './src/screens/DescontoScreen';
import CarrosScreen from './src/screens/CarrosScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Desconto" component={DescontoScreen} />
        <Stack.Screen name="Carros" component={CarrosScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
