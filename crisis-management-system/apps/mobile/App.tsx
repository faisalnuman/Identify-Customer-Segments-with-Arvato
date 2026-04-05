import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MobileLoginScreen } from './src/screens/MobileLoginScreen';
import { MobileDashboardScreen } from './src/screens/MobileDashboardScreen';
import { MobileCrisisListScreen } from './src/screens/MobileCrisisListScreen';
import { MobileCrisisDetailScreen } from './src/screens/MobileCrisisDetailScreen';
import { MobileChatScreen } from './src/screens/MobileChatScreen';
import { MobileNotificationsScreen } from './src/screens/MobileNotificationsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={MobileLoginScreen} />
        <Stack.Screen name="Dashboard" component={MobileDashboardScreen} />
        <Stack.Screen name="Crises" component={MobileCrisisListScreen} />
        <Stack.Screen name="CrisisDetails" component={MobileCrisisDetailScreen} />
        <Stack.Screen name="Chat" component={MobileChatScreen} />
        <Stack.Screen name="Notifications" component={MobileNotificationsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
