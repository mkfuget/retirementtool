import React from 'react'
import Graph from './Graph.js'
import {Route, Switch, Fragment} from 'react-router-dom'
import {ADD_NEW_CHOICE} from './ActionCreators'
import {useSelector, useDispatch} from 'react-redux'
import Configuration from './Configuration'
import { Form, Field } from 'react-final-form'



const InputForm = (props) =>
{
    <input 
        type="text" 
        onBlur={props.handleOnBlur()}
        placeholder = {props.placeHolder}
    >
    </input>
}

export default InputForm;