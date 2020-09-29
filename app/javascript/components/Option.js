
import React, { Fragment } from 'react'
import {useSelector, useDispatch, Field} from 'react-redux'
import { EDIT_INITIAL_GAIN, SET_ACTIVE_OPTION, EDIT_OPTION_NAME, EDIT_MONTHLY_GAIN, EDIT_START_DATE, EDIT_DURATION } from './ActionCreators';
import styled from 'styled-components';

const Option = (props) =>
{

    const dispatch = useDispatch();
    const optionData = useSelector(state => state.optionsReducer.optionsList).find(option => option.optionId === props.optionId);
    const isActiveOption = optionData.activeOption;
    const ToggleText = styled.textarea`
        padding: 0;
        border: none;
        background: none;
    `;
    const nameTextId = `nameTextId${props.optionId}`;
    const initialGainTextId = `initialGain${props.optionId}`;
    const monthyGainTextId = `monthyGain${props.optionId}`;
    const startDateTextId = `startDate${props.optionId}`;
    const durationTextId = `duration${props.optionId}`;
    const activeChoiceCheckBoxId = `activeChoice${props.optionId}`;

    return (
        <tr>
            <td text-align = 'center' vertical-align = 'middle'>
                <input type="checkbox" id = {activeChoiceCheckBoxId} align = "center" checked = {isActiveOption} onClick ={() =>
                    dispatch(SET_ACTIVE_OPTION(props.optionId))
                }>
                </input>
            </td>
            <td>
                <input type="text" id = {nameTextId} onBlur = {() =>
                    dispatch(EDIT_OPTION_NAME(props.optionId, document.getElementById(nameTextId).value))
                }>
                </input>
            </td>
            <td>
                <input type="text" id = {initialGainTextId} onBlur = {() =>
                    dispatch(EDIT_INITIAL_GAIN(props.optionId, document.getElementById(initialGainTextId).value))
                }>
                </input>
            </td>
            <td>
                <input type="text" id = {monthyGainTextId} onBlur = {() =>
                    dispatch(EDIT_MONTHLY_GAIN(props.optionId, document.getElementById(monthyGainTextId).value))
                }>
                </input>
            </td>
            <td>
                <input type="text" id = {durationTextId} onBlur = {() =>
                    dispatch(EDIT_START_DATE(props.optionId, document.getElementById(durationTextId).value))
                }>
                </input>
            </td>
            <td>
                <input type="text" id = {startDateTextId} onBlur = {() =>
                    dispatch(EDIT_DURATION(props.optionId, document.getElementById(startDateTextId).value))
                }>
                </input>
            </td>

        </tr>
    )

}
export default Option;