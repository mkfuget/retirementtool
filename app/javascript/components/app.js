import React from 'react'
import Graph from './Graph.js'
import {Route, Switch, Fragment} from 'react-router-dom'
import {ADD_NEW_CHOICE} from './ActionCreators'
import {useSelector, useDispatch} from 'react-redux'
import Configuration from './Configuration'
import {reduxForm, Field} from 'redux-form'
const App = () => {
    const dispatch = useDispatch();
    const newChoiceName = '';
    return (
        <React.Fragment>
            <Graph/>
            <Configuration/>
        </React.Fragment>
    )
}

export default App