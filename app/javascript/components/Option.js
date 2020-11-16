
import React, { Fragment } from 'react'
import {useSelector, useDispatch, Field} from 'react-redux'
import {EDIT_INITIAL_GAIN, EDIT_ACTIVE_OPTION, EDIT_OPTION_NAME, EDIT_MONTHLY_GAIN, EDIT_START_DATE, EDIT_DURATION, EDIT_LINE_DATA} from './ActionCreators' 
import {deleteOption, toggleOption, editInitialGain, editMonthlyGain, editStartDate, editDuration} from './InputUtility'
import {NAME_TEXT_ID, INITIAL_GAIN_TEXT_ID, MONTHLY_GAIN_TEXT_ID, START_DATE_TEXT_ID, DURATION_TEXT_ID} from './Constants'
import {DeleteButton} from './GeneralComponents'
import styled from 'styled-components';

const ToggleOptionButton = (props) =>
{
    const currentOptionData = useSelector(state => state.optionsReducer).data[props.optionId];
    const currentChoiceId = currentOptionData.choiceId;
    const currentChoiceData = useSelector(state => state.choicesReducer).data[currentChoiceId];
    const activeOption = currentChoiceData.activeOption;
 
    const toggle = toggleOption(props.optionId);

    return (<input 
        type="checkbox" 
        text-align = 'center' 
        vertical-align = 'middle' 
        align = "center" 
        checked = {activeOption === props.optionId} 
        onClick = {() =>{toggle(props.optionId)}
        }>
    </input>)

}

const OptionEntryStyle = styled.input`
    border:none;
    border-bottom: 1px solid #1890ff;
    padding: 5px 10px;
    outline: none;
`

const Option = (props) =>
{


    const optionId = props.optionId;
    const currentOptionData = useSelector(state => state.optionsReducer.data[props.optionId]);
    const dispatch = useDispatch();
    const editInitialGainInput = editInitialGain(props.optionId);
    const editMonthlyGainInput = editMonthlyGain(props.optionId);
    const editStartDateInput = editStartDate(props.optionId);
    const editDurationInput = editDuration(props.optionId);
    const deleteOptionInput = deleteOption(props.optionId);
    return (
        currentOptionData !== undefined &&
        <tr>
            <td text-align = 'center' vertical-align = 'middle'>
                <ToggleOptionButton optionId={optionId} isActiveOption ={props.isActiveOption}/>
            </td>
            <td>
                <OptionEntryStyle type="text" id = {NAME_TEXT_ID(props.optionId)} defaultValue = {currentOptionData.name} onBlur = {() =>
                    editInitialGainInput(props.optionId)
                }>
                </OptionEntryStyle>
            </td>
            <td>
                <OptionEntryStyle type="text" id = {INITIAL_GAIN_TEXT_ID(props.optionId)} defaultValue = {currentOptionData.initialGain} onBlur = {() =>
                    editInitialGainInput(props.optionId)
                }>
                </OptionEntryStyle>
            </td>
            <td>
                <OptionEntryStyle type="text" id = {MONTHLY_GAIN_TEXT_ID(props.optionId)} defaultValue = {currentOptionData.monthlyGain} onBlur = {() =>
                    editMonthlyGainInput(props.optionId)                
                }>
                </OptionEntryStyle>
            </td>
            <td>
                <OptionEntryStyle type="text" id = {START_DATE_TEXT_ID(props.optionId)} defaultValue = {currentOptionData.startDate} onBlur = {() =>
                    editStartDateInput(props.optionId)  
              }>
                </OptionEntryStyle>
            </td>
            <td>
                <OptionEntryStyle type="text" id = {DURATION_TEXT_ID(props.optionId)} defaultValue = {currentOptionData.duration} onBlur = {() =>
                    editDurationInput(props.optionId)
                }>
                </OptionEntryStyle>
            </td>
            <td>
                <DeleteButton text-align = "right" onClickFunction = {() => deleteOptionInput(props.optionId)}>
                    X
                </DeleteButton>
            </td>
        </tr>
            
    )

}
export default Option;