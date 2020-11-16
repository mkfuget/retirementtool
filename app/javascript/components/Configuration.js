import React, {useState, useEffect, Fragment} from 'react'
import Choice from './Choice'
import {ADD_NEW_CHOICE, EDIT_RATE_OF_RETURN, EDIT_CASH_ASSETS, EDIT_SPENDING} from './ActionCreators'
import {addNewChoice, editSpending, editCashAssets, editRateOfReturn} from './InputUtility'
import {useSelector, useDispatch, Field} from 'react-redux'
import {CASH_ASSETS_ID, SPENDING_ID, RATE_OF_RETURN_ID} from './Constants'
import styled from 'styled-components';

const ConfigurationEntryStyle = styled.input`
    border:none;
    border-bottom: 1px solid #1890ff;
    padding: 5px 10px;
    outline: none;
`

const ConfigurationHeaderData = () =>
{

    const currentConfigurationId = useSelector(state => state.activeConfigurationReducer).currentConfiguration;
    const currentConfigurationData = useSelector(state => state.configurationsReducer.data[currentConfigurationId]);
    const nextChoiceId = useSelector(state => state.choicesReducer.currentId);   
    const defaultSpending = currentConfigurationData.spending;
    const defaultRateOfReturn = currentConfigurationData.rateOfReturn;
    const defaultCashAssets = currentConfigurationData.cashAssets;

    const dispatch = useDispatch();
    const editRateOfReturnInput = editRateOfReturn();
    const editSpendingInput = editSpending();
    const editCashAssetsInput = editCashAssets();

    return (
        <tr>
            <td>
                
                <button border-radius = "50%" onClick =  {() => 
                    dispatch(ADD_NEW_CHOICE(nextChoiceId, currentConfigurationId))
                    }>+
                </button>
                <span>New Choice</span>
                <span margin-left ="20px">Total Cash Assets:</span>
                <ConfigurationEntryStyle type="text" defaultValue = {defaultCashAssets} id = {CASH_ASSETS_ID(currentConfigurationId)} onBlur = {() =>
                    editCashAssetsInput()
                }>
                </ConfigurationEntryStyle>
                Rate of Return:
                <ConfigurationEntryStyle type="text" defaultValue = {defaultRateOfReturn} id = {RATE_OF_RETURN_ID(currentConfigurationId)} onBlur = {() =>
                    editRateOfReturnInput()
                }>
                </ConfigurationEntryStyle>
                Spending:
                <ConfigurationEntryStyle type="text" defaultValue = {defaultSpending} id = {SPENDING_ID(currentConfigurationId)} onBlur = {() =>
                    editSpendingInput()
                }>
                </ConfigurationEntryStyle>
            </td>
        </tr>
    )

}

const Configuration = (props) => 
{
    const currentConfigurationId = props.configurationId;
    const currentConfigurationData = useSelector(state => state.configurationsReducer.data[currentConfigurationId]);
    const choicesList = currentConfigurationData.choices;
    const nextChoiceId = useSelector(state => state.choicesReducer.currentId);   
    const defaultSpending = currentConfigurationData.spending;
    const defaultRateOfReturn = currentConfigurationData.rateOfReturn;
    const defaultCashAssets = currentConfigurationData.cashAssets;

    const choicesListRender = choicesList.map(choice => 
    {
        return <Choice 
            key = {choice}
            name = {choice}
            choiceId = {choice}
        >
        </Choice>
    })

    return (
        <table>
            <tbody>
                <ConfigurationHeaderData 
                    configurationId = {props.configurationId}
                    defaultSpending = {defaultSpending}
                    defaultRateOfReturn = {defaultRateOfReturn}
                    defaultCashAssets = {defaultCashAssets}
                />
                {choicesListRender}
            </tbody>
        </table>
    )
}
export default Configuration;