import { combineReducers } from 'redux'
import counterReducer from './counter'
import projectReducer from './projects'
import userReducer from './users'
const reducers = combineReducers({
    counter:counterReducer,
    projects:projectReducer,
    users:userReducer
  })
  export default reducers;


