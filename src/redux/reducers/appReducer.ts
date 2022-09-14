/**
 * appReducers.ts
 * Holds the app Redux Reducers
 */

// Redux
import * as AppActions from '../actions/appActions'
import { AppAction } from '../actions/appActions'

// Entities
import { QuestionProps } from '../../entities/Question'

// Interfaces
export interface AppState {
  questions: QuestionProps[]
}

const INITIAL_STATE: AppState = {
  questions: []
}

const AppReducer = (appState: AppState = INITIAL_STATE, action: AppAction) => {
  switch (action.type) {
    case AppActions.AppActionConstants.SET_QUESTIONS:
      return {
        ...appState,
        questions: action.questions
      }
    default:
      return appState
  }
}

export { AppReducer }
