import { useFonts } from 'expo-font';
import { useCallback } from "react";
import * as SplashScreen from 'expo-splash-screen';
import { FONTS } from './constants/fonts';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Detail, Welcome } from './screens';
import BottomTabNavigation from './navigations/BottomTabNavigation';

const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts(FONTS);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }


  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen
            name="Welcome"
            component={Welcome}
          />
          <Stack.Screen
            name="Detail"
            component={Detail}
          />
          <Stack.Screen
            name="Main"
            component={BottomTabNavigation}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

