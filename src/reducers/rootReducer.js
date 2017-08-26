import {combineReducers} from 'redux'
import app from './appReducer'
import account from './accountReducer'

const rootReducer = combineReducers({
    app,
    account
})
export default rootReducer