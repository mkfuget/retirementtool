import {combineReducers} from 'redux'
import configurationsReducer from './confingurationsReducer'
import optionsReducer from './optionsReducer'
import choicesReducer from './choicesReducer'
import lineDataReducer from './lineDataReducer'
import activeConfigurationReducer from './activeConfigurationReducer'
import graphDataReducer from './graphDataReducer'
const rootReducer = combineReducers({
    configurationsReducer: configurationsReducer,
    optionsReducer: optionsReducer,
    choicesReducer: choicesReducer,
    activeConfigurationReducer: activeConfigurationReducer,
    graphDataReducer: graphDataReducer
})

export default rootReducer;