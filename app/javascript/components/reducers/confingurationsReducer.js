const configurationsReducer = (state =
    {
        rateOfReturn: 0,
        timeLine: 480,
        cashAssets: 0,
        spending: 0,
        name: 'SET_NAME'
    }, action) =>
{
    switch(action.type)
    {
        case "EDIT_RATE_OF_RETURN":
        {
            return {
                ...state,
                rateOfReturn: action.rateOfReturn
            }
        }
        case "EDIT_TIMELINE":
        {
            return {
                ...state,
                timeLine: action.timeLine
            }
        }
        case "EDIT_CASH_ASSETS":
        {
            return {
                ...state,
                cashAssets: action.cashAssets
            }
        }
        case "EDIT_SPENDING":
        {
            return {
                ...state,
                spending: action.spending
            }
        }
        case "EDIT_CONFIGURATION_NAME":
            {
                return {
                    ...state,
                    name: action.name
                }
            }    
        default: return state;

    }
}

export default configurationsReducer;