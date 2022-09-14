/**
 * en-US.ts
 * Holds the app navigation logic
 */

import * as React from 'react'
import { StatusBar } from 'expo-status-bar'

// Navigation
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ParamListBase, RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

// Screens
import HomeScreen from '../screens/HomeScreen'
import QuizScreen from '../screens/QuizScreen'
import ResultsScreen from '../screens/ResultsScreen'

export interface IStackScreenProps {
  navigation: StackNavigationProp<any>
  route: RouteProp<ParamListBase, any>
}

const Stack = createNativeStackNavigator()

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar/>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Quiz"
          component={QuizScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Results"
          component={ResultsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
