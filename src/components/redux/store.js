import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import { thunk } from 'redux-thunk'

import apiReducer from './api-reducer'
import filterReducer from './filter-reducer'
import sortReducer from './sort-reducer'

const reducers = combineReducers({
  apiReducer,
  filterReducer,
  sortReducer,
})

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))