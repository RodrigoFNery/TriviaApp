/**
 * index.ts
 * Provides the root Reducer
 */

// Redux
import { combineReducers } from 'redux'
import { AppReducer } from './appReducer'

const rootReducer = combineReducers({
  appReducer: AppReducer
})

export type RootState = ReturnType<typeof rootReducer>

export { rootReducer }
