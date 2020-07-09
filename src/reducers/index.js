import userReducer from './userReducers'
import commentReducer from './commentReducers'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    userReducer,
    commentReducer
})

export default rootReducer