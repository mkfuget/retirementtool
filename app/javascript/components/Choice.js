import React, { Fragment } from 'react'
import {ADD_NEW_CHOICE, ADD_NEW_OPTION} from './ActionCreators'
import Option from './Option'
import {useSelector, useDispatch} from 'react-redux'


const Choice = (props) => 
{
    const dispatch = useDispatch();
    const optionsData = useSelector(state => state.optionsReducer.optionsList);
    const test = useSelector(state => state.optionsReducer.currentId);

    console.log(optionsData);

    const optionsForChoice = optionsData.filter(option => option.choiceId === props.choiceId);
    console.log(optionsForChoice);
    const optionsTable = optionsForChoice.map(option =>
    {
        return <Option 
                key = {option.optionId}
                name = {option.name}
                choiceId = {option.choiceId}
                optionId = {option.optionId}
            >
            </Option>
    })    
    
    return (
        <Fragment>
            <tr>
                <td>
                    <button onClick =  {() => 
                        dispatch(ADD_NEW_OPTION("TEST OPTION", props.choiceId))
                        }>Add new option
                    </button>
                </td>
            </tr>
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
                            {optionsTable}
                        </tbody>
                    </table>
                </td>
            </tr>
        </Fragment>
    )
}

export default Choice;