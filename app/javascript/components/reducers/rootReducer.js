import {combineReducers} from 'redux'
import configurationsReducer from './confingurationsReducer'
import optionsReducer from './optionsReducer'
import choicesReducer from './choicesReducer'

const rootReducer = combineReducers({
    configurationsReducer: configurationsReducer,
    optionsReducer: optionsReducer,
    choicesReducer: choicesReducer
})

export default rootReducer;