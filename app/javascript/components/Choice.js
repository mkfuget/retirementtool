import React, { Fragment } from 'react'
import {ADD_NEW_CHOICE, ADD_NEW_OPTION} from './ActionCreators'
import {deleteChoice} from './InputUtility'
import Option from './Option'
import {useSelector, useDispatch} from 'react-redux'
import {DeleteButton} from './GeneralComponents'
const Choice = (props) => 
{
    const dispatch = useDispatch();
    const nextOptionId = useSelector(state => state.optionsReducer).currentId;
    const choiceData = useSelector(state => state.choicesReducer).data;
    const optionsData = useSelector(state => state.optionsReducer).data;
    const currentChoice = choiceData[props.choiceId];
    var currentOptions;
    var activeOption;
    if(currentChoice === undefined)//prevent accessing data of undefined when deleting
    {
        currentOptions = [0];
        activeOption = 0;
    }
    else
    {
        currentOptions = currentChoice.options;
        activeOption = currentChoice.activeOption;
    }
    
    const deleteChoiceInput = deleteChoice(props.choiceId);

    const tableOfChoices = currentOptions.map(options =>{
        return (
            currentChoice !== undefined &&
            <Option
                key = {options}
                optionId = {options}
                isActiveOption = {activeOption === options}
            >
            </Option>
        )
    })
    return (
        <Fragment>
            <tr>
                <td>
                    Edit Choice Name
                </td>
                <td>
                    <DeleteButton onClickFunction = {() => deleteChoiceInput(props.choiceId)} ></DeleteButton>
                </td>
            </tr>
            <tr>
                <td>
                    <button onClick =  {() => 
                        dispatch(ADD_NEW_OPTION("TEST OPTION", nextOptionId, props.choiceId))
                        }>Add new option
                    </button>
                </td>
            </tr>
            {currentOptions.length > 0 &&
                <tr>
                    <td>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Set Active Choice</th>
                                    <th>Name</th>
                                    <th>Initial Change</th>
                                    <th>Monthly Change</th>
                                    <th>Time Until Start (Months)</th>
                                    <th>Duration (Months)</th>
                                </tr>
                                {tableOfChoices}
                            </tbody>
                        </table>
                    </td>
                </tr>
            }
        </Fragment>
    )
}

export default Choice;