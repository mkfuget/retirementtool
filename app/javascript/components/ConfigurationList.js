import React, {useState, useEffect, Fragment} from 'react'
import Choice from './Choice'
import {useSelector, useDispatch} from 'react-redux'
import {ADD_NEW_EMPTY_CONFIGURATION, EDIT_ACTIVE_CONFIGURATION} from './ActionCreators'
import styled from 'styled-components';
import {DeleteButton} from './GeneralComponents'
import { object } from 'prop-types'
import {CONFIGURATION_LIST_ENTRY_WIDTH} from './Constants'
import {deleteConfiguration} from './InputUtility'


const ConfigurationListTr = styled.tr`
    height: 30px;
    width : ${props => props.styledWidth};
    background: ${props => props.inputBackgroundColor || "white" };
`;

const ConfigurationListTd = styled.td`
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    border-right: 0px solid black;
    border-left: 0px solid black;
    background: ${props => props.inputBackgroundColor || "white" };
    text-align: left;

`

const ConfigurationListItem = (props) =>
{

    const dispatch = useDispatch();
    const activeConfigurationId = useSelector(state => state.activeConfigurationReducer).currentConfiguration;
    const backgroundColorInput = (activeConfigurationId === props.configurationId) ? 'lightBlue' : 'white';
    const deleteConfigurationInput = deleteConfiguration(props.configurationId);
    return (
        <ConfigurationListTr
            inputBackgroundColor = {backgroundColorInput}
            styledWidth ={CONFIGURATION_LIST_ENTRY_WIDTH}
        >
            <ConfigurationListTd
                width = "90%"
                inputBackgroundColor = {backgroundColorInput}
                onClick = {() => dispatch(EDIT_ACTIVE_CONFIGURATION(props.configurationId))}
            >
                {props.name}
            </ConfigurationListTd>
            <ConfigurationListTd 
                inputBackgroundColor = {backgroundColorInput}
                width = "10%"
            >
                <DeleteButton onClickFunction ={() => deleteConfigurationInput(props.configurationId)}>
                </DeleteButton>
            </ConfigurationListTd>
        </ConfigurationListTr>
    )
}
const StyledConfigrationTable = styled.table`
    width: ${CONFIGURATION_LIST_ENTRY_WIDTH};
    vertical-align:top;
    border-collapse: collapse;

`
const StyledFreezeHeaderConfigurationTable = styled.thead`
    display: block;
`

const StyledConfigartionTh = styled.th`
    vertical-align:top;
`

const StyledEntry = styled.td`
    vertical-align:top;
`

const StyledScrollConfigurationBody = styled.tbody`
    display: block;
    overflow-y: scroll;
    max-height: 400px;
`

const ConfigurationList = () =>
{

    const dispatch = useDispatch();
    const configurationList = useSelector(state => state.configurationsReducer).data;
    const nextConfigurationId = useSelector(state => state.configurationsReducer).currentId;
    const configurationListRender = Object.values(configurationList).map(configuration =>
        {
            return (
                <ConfigurationListItem 
                    key = {configuration.configurationId}
                    name = {configuration.name}
                    configurationId = {configuration.configurationId}
                />
            )
        })  
    return (
        <StyledEntry>
            <StyledConfigrationTable>
                <StyledFreezeHeaderConfigurationTable>
                    <StyledConfigartionTh>
                        <button onClick  = {() =>
                            dispatch(ADD_NEW_EMPTY_CONFIGURATION(nextConfigurationId))
                        }>
                        Add New Empty Configuration
                        </button>
                    </StyledConfigartionTh>
                </StyledFreezeHeaderConfigurationTable>
                <StyledScrollConfigurationBody>
                    {configurationListRender}
                </StyledScrollConfigurationBody>
            </StyledConfigrationTable>
        </StyledEntry>
    )


}

export default ConfigurationList