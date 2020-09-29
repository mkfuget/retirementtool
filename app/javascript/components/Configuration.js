import React, {useState, useEffect, Fragment} from 'react'
import Choice from './Choice'
import {ADD_NEW_CHOICE, EDIT_RATE_OF_RETURN} from './ActionCreators'
import {useSelector, useDispatch, Field} from 'react-redux'

const Configuration = () => 
{
    const configurationData = useSelector(state => state.configurationReducer);
    const currentConfigurationData = useSelector(state => state.choicesReducer.choiceList);
    const dispatch = useDispatch();


    const currentConfiguration = currentConfigurationData.map(nextChoice =>
    {
        return <Choice 
            key = {nextChoice.choiceId}
            name = {nextChoice.name} 
            choiceId = {nextChoice.choiceId}
        >
        </Choice>
    })

    

    return (
        <table>
            <tbody>
                <tr>
                    <td>
                        Add New Choice
                        <button border-radius = "50%" onClick =  {() => 
                            dispatch(ADD_NEW_CHOICE("TEST 2"))
                            }>+
                        </button>
                        Total Cash Assets:
                        <input type="text" id = "currentCashAssets" onBlur = {() =>
                            dispatch(EDIT_CASH_ASSETS(props.document.getElementById(currentCashAssets).value))
                        }>
                        </input>
                        Rate of Return:
                        <input type="text" id = "currentRateOfReturn" onBlur = {() =>
                            dispatch(EDIT_RATE_OF_RETURN(props.document.getElementById(currentRateOfReturn).value))
                        }>
                        </input>
                        Spending:
                        <input type="text" id = "currentSpending" onBlur = {() =>
                            dispatch(EDIT_SPENDING(props.document.getElementById(currentSpending).value))
                        }>
                        </input>

                    </td>
                </tr>
                {currentConfiguration}
            </tbody>
        </table>
    )
}
export default Configuration;