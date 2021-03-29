import { combineReducers } from 'redux'
import userReducer from './userReducer'

const Reducers = combineReducers({
    user: userReducer
})

export default Reducers