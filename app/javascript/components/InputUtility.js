import {useSelector, useDispatch} from 'react-redux'
import {removeOptionFromLineData, addOptionToLineData, generateGraphData} from './GraphUtility.js'
import { DELETE_CHOICE_LIST, DELETE_CONFIGURATION, REMOVE_CHOICE_FROM_CONFIGURATION, DELETE_CHOICE, DELETE_OPTION_LIST, REMOVE_OPTION_FROM_CHOICE, DELETE_OPTION, EDIT_INITIAL_GAIN, EDIT_ACTIVE_OPTION, EDIT_OPTION_NAME, EDIT_MONTHLY_GAIN, EDIT_START_DATE, EDIT_DURATION, EDIT_LINE_DATA, EDIT_RATE_OF_RETURN, EDIT_SPENDING, EDIT_CASH_ASSETS, ADD_NEW_EMPTY_CONFIGURATION, EDIT_ACTIVE_CONFIGURATION} from './ActionCreators' 
import {RATE_OF_RETURN_ID, SPENDING_ID, CASH_ASSETS_ID, NAME_TEXT_ID, INITIAL_GAIN_TEXT_ID, MONTHLY_GAIN_TEXT_ID, START_DATE_TEXT_ID, DURATION_TEXT_ID} from './Constants'

const documentRateOfReturn = (currentConfigurationId) =>
{
    if(document.getElementById(RATE_OF_RETURN_ID(currentConfigurationId)) !== null)
    {
        return document.getElementById(RATE_OF_RETURN_ID(currentConfigurationId)).value;
    }
    else
    {
        return 0;
    }
}

const documentSpending = (currentConfigurationId) =>
{
    if(document.getElementById(SPENDING_ID(currentConfigurationId)) !== null)
    {
        return document.getElementById(SPENDING_ID(currentConfigurationId)).value;
    }
    else
    {
        return 0;
    }
}

const documentCashAssets = (currentConfigurationId) =>
{
    if(document.getElementById(CASH_ASSETS_ID(currentConfigurationId)) !== null)
    {
        return document.getElementById(CASH_ASSETS_ID(currentConfigurationId)).value;
    }
    else
    {
        return 0;
    }
}

export function addNewEmptyConfigurationInput()
{
    const dispatch = useDispatch();
    const nextConfigurationId = useSelector(state => state.configurationReducer).currentId;
    return () =>
    {
        dispatch(ADD_NEW_EMPTY_CONFIGURATION(nextConfigurationId));
    }
}

export function toggleOption(optionId)
{    
    const dispatch = useDispatch();
    const optionData = useSelector(state => state.optionsReducer);
    const currentOptionData = optionData.data[optionId];
    const currentChoiceId = currentOptionData.choiceId;
    const currentConfigurationId = useSelector(state => state.activeConfigurationReducer).currentConfiguration;
    const currentConfiguration = useSelector(state => state.configurationsReducer).data[currentConfigurationId];

    const currentChoiceData = useSelector(state => state.choicesReducer).data[currentChoiceId];
    const currentActiveOptionId = currentChoiceData.activeOption;
    const currentLineData = currentConfiguration.lineData;
    return () => 
    {
        if(currentActiveOptionId == optionId)// toggle the only active option off
        {
            const outLineData = removeOptionFromLineData(currentOptionData, currentLineData, currentConfiguration);
            dispatch(EDIT_ACTIVE_OPTION(-1, currentChoiceId));
            dispatch(EDIT_LINE_DATA(outLineData, currentConfigurationId));
        }
        else if(currentActiveOptionId == -1)
        {
            const outLineData = addOptionToLineData(currentOptionData, currentLineData, currentConfiguration);
            dispatch(EDIT_ACTIVE_OPTION(optionId, currentChoiceId));
            dispatch(EDIT_LINE_DATA(outLineData, currentConfigurationId));
        }
        else
        {
            const activeOptionData = optionData.data[currentActiveOptionId];
            const nextLineData = removeOptionFromLineData(activeOptionData, currentLineData, currentConfiguration);
            const finalLineData = addOptionToLineData(currentOptionData, nextLineData, currentConfiguration);
            dispatch(EDIT_ACTIVE_OPTION(optionId, currentChoiceId));
            dispatch(EDIT_LINE_DATA(finalLineData, currentConfigurationId));
        }
    }
}

export function editInitialGain(optionId)
{
    const dispatch = useDispatch();
    const optionData = useSelector(state => state.optionsReducer);
    const currentConfigurationId = useSelector(state => state.activeConfigurationReducer).currentConfiguration;
    const currentConfiguration = useSelector(state => state.configurationsReducer).data[currentConfigurationId];
    const choicesData = useSelector(state => state.choicesReducer);
    const currentLineData = currentConfiguration.lineData;
    return() =>
    {
        const currentOptionData = optionData.data[optionId];
        const currentChoiceId = currentOptionData.choiceId;   
        const currentChoiceData = choicesData.data[currentChoiceId];
        const currentActiveOptionId = currentChoiceData.activeOption 
        const newInitialGain = document.getElementById(INITIAL_GAIN_TEXT_ID(optionId)).value;
        dispatch(EDIT_INITIAL_GAIN(optionId, newInitialGain))
        if(currentActiveOptionId == optionId)
        {
            const nextLineData = removeOptionFromLineData(currentOptionData, currentLineData, currentConfiguration)
            const nextOptionData =
            {
                ...currentOptionData,
                initialGain: newInitialGain
            }
            const finalLineData = addOptionToLineData(nextOptionData, nextLineData, currentConfiguration)
            dispatch(EDIT_LINE_DATA(finalLineData, currentConfigurationId))
        }
    }
}

export function editMonthlyGain(optionId)
{
    const dispatch = useDispatch();
    const optionData = useSelector(state => state.optionsReducer);
    const currentConfigurationId = useSelector(state => state.activeConfigurationReducer).currentConfiguration;
    const currentConfiguration = useSelector(state => state.configurationsReducer).data[currentConfigurationId];
    const choicesData = useSelector(state => state.choicesReducer);
    const currentLineData = currentConfiguration.lineData;
    return () =>
    {
        const currentOptionData = optionData.data[optionId];
        const currentChoiceId = currentOptionData.choiceId;   
        const currentChoiceData = choicesData.data[currentChoiceId];
        const currentActiveOptionId = currentChoiceData.activeOption 
        const newMonthlyGain = document.getElementById(MONTHLY_GAIN_TEXT_ID(optionId)).value;
        dispatch(EDIT_MONTHLY_GAIN(optionId, newMonthlyGain))
        if(currentActiveOptionId == optionId)
        {
            const nextLineData = removeOptionFromLineData(currentOptionData, currentLineData, currentConfiguration)
            const nextOptionData =
            {
                ...currentOptionData,
                monthlyGain: newMonthlyGain
            }
            const finalLineData = addOptionToLineData(nextOptionData, nextLineData, currentConfiguration)
            dispatch(EDIT_LINE_DATA(finalLineData, currentConfigurationId))
        }
    }
}

export function editStartDate(optionId)
{
    const dispatch = useDispatch();
    const optionData = useSelector(state => state.optionsReducer);
    const currentConfigurationId = useSelector(state => state.activeConfigurationReducer).currentConfiguration;
    const currentConfiguration = useSelector(state => state.configurationsReducer).data[currentConfigurationId];
    const choicesData = useSelector(state => state.choicesReducer);
    const currentLineData = currentConfiguration.lineData;
    return () =>
    {
        const currentOptionData = optionData.data[optionId];
        const currentChoiceId = currentOptionData.choiceId;   
        const currentChoiceData = choicesData.data[currentChoiceId];
        const currentActiveOptionId = currentChoiceData.activeOption 
        const newStartDate = document.getElementById(START_DATE_TEXT_ID(optionId)).value;
        dispatch(EDIT_START_DATE(optionId, newStartDate))
        if(currentActiveOptionId == optionId)
        {
            const nextLineData = removeOptionFromLineData(currentOptionData, currentLineData, currentConfiguration)
            const nextOptionData =
            {
                ...currentOptionData,
                startDate: newStartDate
            }
            const finalLineData = addOptionToLineData(nextOptionData, nextLineData, currentConfiguration)
            dispatch(EDIT_LINE_DATA(nextLineData, currentConfigurationId))
        }
    }
}

export function editDuration(optionId)
{

    const dispatch = useDispatch();
    const optionData = useSelector(state => state.optionsReducer);
    const currentConfigurationId = useSelector(state => state.activeConfigurationReducer).currentConfiguration;
    const currentConfiguration = useSelector(state => state.configurationsReducer).data[currentConfigurationId];
    const choicesData = useSelector(state => state.choicesReducer);
    const currentLineData = currentConfiguration.lineData;
    return () =>
    {
        const currentOptionData = optionData.data[optionId];
        const currentChoiceId = currentOptionData.choiceId;   
        const currentChoiceData = choicesData.data[currentChoiceId];
        const currentActiveOptionId = currentChoiceData.activeOption ;
        const newDuration = document.getElementById(DURATION_TEXT_ID(optionId)).value;
        dispatch(EDIT_DURATION(optionId, newDuration));
        if(currentActiveOptionId == optionId)
        {
            const nextLineData = removeOptionFromLineData(currentOptionData, currentLineData, currentConfiguration);
            const nextOptionData =
            {
                ...currentOptionData,
                duration: newDuration
            }
            const finalLineData = addOptionToLineData(nextOptionData, nextLineData, currentConfiguration);
            dispatch(EDIT_LINE_DATA(nextLineData, currentConfigurationId))
        }
    }
}

export function editRateOfReturn()
{
    const dispatch = useDispatch();
    const currentConfigurationId = useSelector(state => state.activeConfigurationReducer).currentConfiguration;
    const currentConfiguration = useSelector(state => state.configurationsReducer).data[currentConfigurationId];
    const currentLineData = currentConfiguration.lineData;

    return () =>
    {
        const newRateOfReturn = documentRateOfReturn(currentConfigurationId);
        const nextConfiguration = 
        {
            ...currentConfiguration,
            rateOfReturn: newRateOfReturn
        }    
        const nextLineData = generateGraphData(currentLineData, nextConfiguration);
        dispatch(EDIT_RATE_OF_RETURN(newRateOfReturn, currentConfigurationId));
        dispatch(EDIT_LINE_DATA(nextLineData, currentConfigurationId));
    }
}

export function editSpending()
{
    const dispatch = useDispatch()
    const currentConfigurationId = useSelector(state => state.activeConfigurationReducer).currentConfiguration;
    const currentConfiguration = useSelector(state => state.configurationsReducer).data[currentConfigurationId];
    const currentLineData = currentConfiguration.lineData;

    return () =>
    {
        const newSpending = documentSpending(currentConfigurationId);
        const nextConfiguration = 
        {
            ...currentConfiguration,
            spending: newSpending
        }    
        const nextLineData = generateGraphData(currentLineData, nextConfiguration);
        dispatch(EDIT_SPENDING(newSpending, currentConfigurationId));
        dispatch(EDIT_LINE_DATA(nextLineData, currentConfigurationId));
    }
}

export function editCashAssets()
{
    const dispatch = useDispatch();
    const currentConfigurationId = useSelector(state => state.activeConfigurationReducer).currentConfiguration;
    const currentConfiguration = useSelector(state => state.configurationsReducer).data[currentConfigurationId];
    const currentLineData = currentConfiguration.lineData;

    return () =>
    {
        const newCashAssets = documentCashAssets(currentConfigurationId);
        const nextConfiguration = 
        {
            ...currentConfiguration,
            cashAssets: newCashAssets
        }    
        const nextLineData = generateGraphData(currentLineData, nextConfiguration);
        dispatch(EDIT_CASH_ASSETS(newCashAssets, currentConfigurationId));
        dispatch(EDIT_LINE_DATA(nextLineData, currentConfigurationId));
    }
}

export function deleteConfiguration(configurationId)
{
    const dispatch = useDispatch();

    const choiceData = useSelector(state => state.choicesReducer);
    const optionData = useSelector(state =>state.optionsReducer);
    const configurationData = useSelector(state => state.configurationsReducer);


    return () =>
    {
        const choiceList = configurationData.data[configurationId].choices;
        const firstChoice = choiceList[0];
        var optionsList = choiceData.data[firstChoice].options;
        for(var i=1; i<choiceList.length; i++)
        {
            const currentChoiceId = choiceList[i];
            optionsList = optionsList.concat(choiceData.data[currentChoiceId].options);
            console.log(choiceData.data[currentChoiceId].options);
        }
        console.log(optionsList);
        dispatch(DELETE_CONFIGURATION(configurationId));
        dispatch(DELETE_CHOICE_LIST(choiceList));
        dispatch(DELETE_OPTION_LIST(optionsList));
    }

}

export function deleteChoice(choiceId)
{
    const dispatch = useDispatch();

    const currentConfigurationId = useSelector(state => state.activeConfigurationReducer).currentConfiguration;
    const choiceData = useSelector(state => state.choicesReducer);
    const optionData = useSelector(state =>state.optionsReducer);
    const configurationData = useSelector(state => state.congfiguratiosnReducer);

    return () =>
    {
        const currentChoiceData = choiceData.data[choiceId];
        const currentOptionList = currentChoiceData.options;
        
        dispatch(REMOVE_CHOICE_FROM_CONFIGURATION(choiceId, currentConfigurationId))
        dispatch(DELETE_OPTION_LIST(currentOptionList))
        dispatch(DELETE_CHOICE(choiceId))
    }

}

export function deleteOption(optionId)
{
    const dispatch = useDispatch();
    const currentConfigurationId = useSelector(state => state.activeConfigurationReducer).currentConfiguration;
    const choiceData = useSelector(state => state.choicesReducer);
    const optionData = useSelector(state =>state.optionsReducer);
    const configurationData = useSelector(state => state.congfigurationsReducer);

    return () =>
    {
        const currentOptionData = optionData.data[optionId];
        const currentChoiceId = currentOptionData.choiceId;
    
        const currentChoiceData = choiceData.data[currentChoiceId];
        const currentActiveOptionId = currentChoiceData.activeOption;
        const currentLineData = configurationData.data[currentConfigurationId].lineData;    
        if(optionId === currentActiveOptionId)//deleting active option for this choice
        {
            const outLineData = removeOptionFromLineData(currentOptionData, currentLineData, currentConfiguration);
            dispatch(EDIT_ACTIVE_OPTION(-1, currentChoiceId));
            dispatch(EDIT_LINE_DATA(outLineData, currentConfigurationId));
        }
        dispatch(REMOVE_OPTION_FROM_CHOICE(optionId, currentChoiceId))
        dispatch(DELETE_OPTION(optionId));
    }

}