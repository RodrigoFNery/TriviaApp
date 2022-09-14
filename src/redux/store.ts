import { createStore, applyMiddleware, Store } from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from './reducers'

function configureStore (): Store {
  const store = createStore(rootReducer, undefined, applyMiddleware(thunk))
  return store
}
const store = configureStore()

export { store }

export type AppDispatch = typeof store.dispatch
