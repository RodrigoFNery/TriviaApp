import * as React from 'react';
import { Platform, LogBox } from 'react-native';
import { StatusBar } from 'expo-status-bar'

//Translation
import { translate } from "../locales";

//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import HomeScreen from '../screens/HomeScreen';
import QuizScreen from '../screens/QuizScreen';
import ResultsScreen from '../screens/ResultsScreen';

//Styling
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { QuestionProps } from '../api/api';


// if (Platform.OS !== 'web') {
//   LogBox.ignoreLogs(['Require cycle:']);
// }

const Stack = createNativeStackNavigator();

export type NavigatorParamList = RouteProp<RootStackParamList, 'Profile'>;

export type NavigatorParamList = {
  questions: QuestionProps[]
}

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
  );
}

export default AppNavigator
