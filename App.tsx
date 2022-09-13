/**
 * React Native - Typescript
 * Trivia App - G2i
 */

import React from 'react'

//Redux
import { Provider } from 'react-redux';
import { store } from './src/redux';

//Navigation
import AppNavigator from './src/navigation/AppNavigator'

export default function App(): JSX.Element {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  )
}