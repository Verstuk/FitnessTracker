/**
 * @file: navigationConfig.js
 * @description: Конфигурация навигации приложения
 * @dependencies: @react-navigation/stack
 * @created: 2023.10.15
 */

import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import TimerSetupScreen from '../screens/TimerSetupScreen';
import TimerScreen from '../screens/TimerScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createStackNavigator();

export default function NavigationConfig() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: '#4A90E2' },
        headerTintColor: '#FFFFFF',
        animation: 'slide_from_right'
      }}
    >
      <Stack.Screen 
        name="Home" 
        component={HomeScreen}
        options={{ title: 'Ваше имя' }}
      />
      <Stack.Screen 
        name="TimerSetup" 
        component={TimerSetupScreen}
        options={{ title: 'Настройка таймера' }}
      />
      <Stack.Screen 
        name="Timer" 
        component={TimerScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="Settings" 
        component={SettingsScreen}
        options={{ title: 'Настройки' }}
      />
    </Stack.Navigator>
  );
}