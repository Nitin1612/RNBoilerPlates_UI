import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { StartupContainer } from '@/Containers'
import { useTheme } from '@/Hooks'
import MainNavigator from './Main'
import { ExampleContainer} from '@/Containers'
import { navigationRef } from './utils'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { SecondContainer } from '@/Containers'
const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme()
  const { colors } = NavigationTheme

  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: colors.card }]}>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
        <Drawer.Navigator screenOptions={{ headerShown: false }}>
          <Drawer.Screen name="Startup" component={StartupContainer} />
          <Drawer.Screen
            name="Main"
            component={ExampleContainer}
            options={{
              animationEnabled: false
            }}
          />
          <Drawer.Screen
            name="Second"
            component={SecondContainer}
            options={{
              animationEnabled: false,
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default ApplicationNavigator
