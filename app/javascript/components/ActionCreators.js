export const ADD_NEW_CHOICE = (name) =>
{
    return {
        type: 'ADD_NEW_CHOICE',
        name: name
    }
} 

export const ADD_NEW_OPTION = (name, choiceId) =>
{
    return {
        type: 'ADD_NEW_OPTION',
        name: name,
        choiceId: choiceId
    }
} 

export const EDIT_OPTION_NAME = (optionId, newName) =>
{
    return {
        type: 'EDIT_OPTION_NAME',
        optionId: optionId,
        name: newName
    }
}

export const EDIT_INITIAL_GAIN = (optionId, newInitialGain) =>
{
    return {
        type: 'EDIT_INITIAL_GAIN',
        optionId: optionId,
        initialGain: newInitialGain
    }
}

export const MONTHLY_INITIAL_GAIN = (optionId, newMonthlyGain) =>
{
    return {
        type: 'MONTHLY_INITIAL_GAIN',
        optionId: optionId,
        monthlyGain: newMonthlyGain
    }
}


export const EDIT_INITIAL_GAIN_MODIFIER = (optionId, newInitialGainModifier) =>
{
    return {
        type: 'EDIT_INITIAL_GAIN_MODIFIER',
        optionId: optionId,
        initialGain: newInitialGainModifier
    }
}

export const EDIT_START_DATE = (optionId, newStartDate) =>
{
    return {
        type: 'EDIT_START_DATE',
        optionId: optionId,
        initialGain: newStartDate
    }
}

export const EDIT_DURATION = (optionId, newDuration) =>
{
    return {
        type: 'EDIT_DURATION',
        optionId: optionId,
        duration: newDuration
    }
}

export const EDIT_DURATION = (optionId, newDuration) =>
{
    return {
        type: 'EDIT_DURATION',
        optionId: optionId,
        duration: newDuration
    }
}

export const SET_ACTIVE_OPTION = (optionId) =>
{
    return {
        type: 'SET_ACTIVE_OPTION',
        optionId: optionId
    }
}

export const EDIT_RATE_OF_RETURN = (rateOfReturn) =>
{
    return {
        type: 'EDIT_RATE_OF_RETURN',
        rateOfReturn: rateOfReturn
    }
}

export const EDIT_CASH_ASSETS = (cashAssets) =>
{
    return {
        type: 'EDIT_CASH_ASSETS',
        cashAssets: cashAssets
    }
}


export const EDIT_TIMELINE = (timeLine) =>
{
    return {
        type: 'EDIT_TIMELINE',
        timeLine: timeLine
    }
}

export const EDIT_CONFIGURATION_NAME = (name) =>
{
    return {
        type: 'EDIT_CONFIGURATION_NAME',
        name: name
    }
}