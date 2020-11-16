import {MAX_TIMELINE, INITIAL_TIMELINE} from '../Constants'

const configurationsReducer = (state =
    {
        currentId: 1, 
        activeConfiguration: 0,
        data: 
        {
            0:
            {
                configurationId: 0,
                rateOfReturn: 0,
                cashAssets: 0,
                spending: 0,
                lineData:
                {
                    initialChanges: Array(MAX_TIMELINE).fill(0),
                    monthlyChanges: Array(MAX_TIMELINE).fill(0),
                    graphData: Array(MAX_TIMELINE).fill({x:0, y:0}),                    
                },
                name: 'config-0',
                choices: Array()    
            }
        }
    }, action) =>
{
    switch(action.type)
    {
        case "ADD_NEW_EMPTY_CONFIGURATION":
            return {
                ...state,
                    data: {
                        ...state.data,
                        [state.currentId] :
                        {
                            configurationId: state.currentId,
                            rateOfReturn: 0,
                            cashAssets: 0,
                            spending: 0,
                            lineData:
                            {
                                initialChanges: Array(MAX_TIMELINE).fill(0),
                                monthlyChanges: Array(MAX_TIMELINE).fill(0),
                                graphData: Array(MAX_TIMELINE).fill({x:0, y:0}),                    
                            },
                            name: `config-${state.currentId}`,
                            choices: Array()
                        } 
                    },
                    activeConfiguration: state.currentId,
                    currentId : state.currentId+1
            }
        case "EDIT_ACTIVE_CONFIGURATION":
        {
            return {
                ...state,
                activeConfiguration: action.payload
            }
        }
        case "ADD_NEW_CHOICE":
            return {
                ...state,
                data : {
                    ...state.data,
                    [action.payload.configurationId] :
                    {
                        ...state.data[action.payload.configurationId],
                        choices: 
                            [...state.data[action.payload.configurationId].choices, action.payload.choiceId]
                    }
                }
            }
        case "EDIT_RATE_OF_RETURN":
            return {
                ...state,
                data : {
                    ...state.data,
                    [action.payload.configurationId] :
                    {
                        ...state.data[action.payload.configurationId],
                        rateOfReturn: action.payload.rateOfReturn
                    }
                }
            }
        case "EDIT_CASH_ASSETS":
            return {
                ...state,
                data : {
                    ...state.data,
                    [action.payload.configurationId] :
                    {
                        ...state.data[action.payload.configurationId],
                        cashAssets: action.payload.cashAssets
                    }
                }
            }
        case "EDIT_SPENDING":
            return {
                ...state,
                data : {
                    ...state.data,
                    [action.payload.configurationId] :
                    {
                        ...state.data[action.payload.configurationId],
                        spending: action.payload.spending
                    }
                }
            }
        case 'EDIT_LINE_DATA':
            return {
                ...state,
                data : {
                    ...state.data,
                    [action.payload.configurationId] :
                    {
                        ...state.data[action.payload.configurationId],
                        lineData:
                        {
                            initialChanges: action.payload.initialChanges,
                            monthlyChanges: action.payload.monthlyChanges,
                            graphData: action.payload.graphData    
                        }
                    }
                }
            }
        case "EDIT_CONFIGURATION_NAME":
            return {
                ...state,
                data : {
                    ...state.data,
                    [action.payload.configurationId] :
                    {
                        ...state.data[action.payload.configurationId],
                        name: action.payload.name
                    }
                }
            }
        case "REMOVE_CHOICE_FROM_CONFIGURATION":
        {
            const currentChoices = state.data[action.payload.configurationId].choices;
            const newChoices = currentChoices.filter(choice => choice !== action.payload.choiceId)
            return {
                ...state,
                data : {
                    ...state.data,
                    [action.payload.configurationId] :
                    {
                        ...state.data[action.payload.choiceId],
                        choices: newChoices
                    }
                }
            }
        }
        case "DELETE_CONFIGURATION":
        {
            let newData = {...state.data};
            delete newData[action.payload]
            return {
                ...state,
                data: newData
            }
        }
default: return state;
    }
}

export default configurationsReducer;