export const ADD_NEW_EMPTY_CONFIGURATION = (configurationId) =>
{
    return {
        type: 'ADD_NEW_EMPTY_CONFIGURATION',
        payload: configurationId
    }
}

export const EDIT_ACTIVE_CONFIGURATION = (configurationId) =>
{
    return {
        type: 'EDIT_ACTIVE_CONFIGURATION',
        payload: configurationId
    }
}

export const ADD_NEW_CHOICE = (choiceId, configurationId) =>
{
    return {
        type: 'ADD_NEW_CHOICE',
        payload: 
        {
            choiceId: choiceId,
            configurationId: configurationId
        }
    }
} 

export const ADD_NEW_OPTION = (name, optionId, choiceId) =>
{
    return {
        type: 'ADD_NEW_OPTION',
        payload:
        {
            name: name,
            optionId: optionId,
            choiceId: choiceId    
        }
    }
} 

export const EDIT_OPTION_NAME = (optionId, newName) =>
{
    return {
        type: 'EDIT_OPTION_NAME',
        payload:
        {        
            optionId: optionId,
            name: newName
        }
    }
}

export const EDIT_INITIAL_GAIN = (optionId, newInitialGain) =>
{
    return {
        type: 'EDIT_INITIAL_GAIN',
        payload:
        {
            optionId: optionId,
            initialGain: newInitialGain    
        }
    }
}

export const EDIT_MONTHLY_GAIN = (optionId, newMonthlyGain) =>
{
    return {
        type: 'EDIT_MONTHLY_GAIN',
        payload:
        {
            optionId: optionId,
            monthlyGain: newMonthlyGain    
        }
    }
}

export const EDIT_START_DATE = (optionId, newStartDate) =>
{
    return {
        type: 'EDIT_START_DATE',
        payload:
        {
            optionId: optionId,
            startDate: newStartDate    
        }
    }
}

export const EDIT_DURATION = (optionId, newDuration) =>
{
    return {
        type: 'EDIT_DURATION',
        payload:
        {
            optionId: optionId,
            duration: newDuration    
        }
    }
}

export const EDIT_ACTIVE_OPTION = (optionId, choiceId) =>
{
    return {
        type: 'EDIT_ACTIVE_OPTION',
        payload:
        {
            optionId: optionId,
            choiceId: choiceId, 
        } 
    }
}

export const EDIT_RATE_OF_RETURN = (rateOfReturn, configurationId) =>
{
    return {
        type: 'EDIT_RATE_OF_RETURN',
        payload: 
        {
            rateOfReturn: rateOfReturn,
            configurationId: configurationId
        }
    }
}

export const EDIT_CASH_ASSETS = (cashAssets, configurationId) =>
{
    return {
        type: 'EDIT_CASH_ASSETS',
        payload: 
        {
            cashAssets: cashAssets,
            configurationId: configurationId
        }
    }
}

export const EDIT_SPENDING = (spending, configurationId) =>
{
    return {
        type: 'EDIT_SPENDING',
        payload: 
        {
            spending: spending,
            configurationId: configurationId
        }
    }
}

export const EDIT_LINE_DATA = (newLineData, configurationId) =>
{
    return {
        type: 'EDIT_LINE_DATA',
        payload: 
        {
            configurationId: configurationId,
            initialChanges: newLineData.initialChanges,
            monthlyChanges: newLineData.monthlyChanges,
            graphData: newLineData.graphData
        }
    }
}

export const EDIT_CONFIGURATION_NAME = (name) =>
{
    return {
        type: 'EDIT_CONFIGURATION_NAME',
        payload: name
    }
}

export const DELETE_OPTION = (optionId) =>
{
    return {
        type: 'DELETE_OPTION',
        payload:optionId
    }
} 

export const REMOVE_OPTION_FROM_CHOICE = (optionId, choiceId) =>
{
    return {
        type: 'REMOVE_OPTION_FROM_CHOICE',
        payload:
        {
            optionId: optionId,
            choiceId: choiceId, 
        } 
    }
}

export const DELETE_CHOICE = (choiceId) =>
{
    return{
        type: 'DELETE_CHOICE',
        payload: choiceId
    } 
}

export const DELETE_OPTION_LIST = (optionList) =>
{
    return {
        type: 'DELETE_OPTION_LIST',
        payload: optionList
    }
}

export const DELETE_CHOICE_LIST = (choiceList) =>
{
    return {
        type: 'DELETE_CHOICE_LIST',
        payload: choiceList
    }
}


export const REMOVE_CHOICE_FROM_CONFIGURATION = (choiceId, configurationId) =>
{
    return {
        type: 'REMOVE_CHOICE_FROM_CONFIGURATION',
        payload:
        {
            choiceId: choiceId,
            configurationId: configurationId
        }
    }
}

export const DELETE_CONFIGURATION = (configurationId) =>
{
    return {
        type: 'DELETE_CONFIGURATION',
        payload: configurationId
    }
}

export const EDIT_HOVER_TOOLTIP_VALUE = (tooltipValue) =>
{
    return {
        type: 'EDIT_HOVER_TOOLTIP_VALUE',
        payload: tooltipValue
    }
}