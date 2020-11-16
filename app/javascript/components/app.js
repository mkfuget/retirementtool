import React from 'react'
import Graph from './Graph.js'
import {Route, Switch, Fragment} from 'react-router-dom'
import {ADD_NEW_CHOICE} from './ActionCreators'
import {useSelector, useDispatch} from 'react-redux'
import Configuration from './Configuration'
import ConfigurationList from './ConfigurationList'
import {reduxForm, Field} from 'redux-form'
const App = () => {
    const currentConfigurationId = useSelector(state => state.activeConfigurationReducer).currentConfiguration;
    const configurations = useSelector(state => state.configurationsReducer.data);
    const configurationsData = Object.values(configurations);
    const currentConfiguration = configurationsData.filter(configuration => configuration.configurationId === currentConfigurationId);
    console.log(currentConfigurationId);
    const configurationRender = currentConfiguration.map(configuration =>
        {
                return <Configuration 
                    configurationId = {configuration.configurationId}
                    key = {configuration.configurationId}
                />
        })

    return (
        <React.Fragment>
            <table>
                <tbody>
                    <tr>
                        <Graph/>
                        <ConfigurationList/>
                    </tr>
                </tbody>
            </table>
            {configurationRender}
        </React.Fragment>
    )
}

export default App