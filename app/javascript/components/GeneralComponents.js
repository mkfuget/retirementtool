import styled from 'styled-components';
import React from 'react'

export const InvisibleButtonStyle = styled.button`
    background-color: Transparent;
    background-repeat:no-repeat;
    border: none;
    cursor:pointer;
    overflow: hidden;
    outline:none;
    float: right;
`

const DeleteButtonContent = styled.span`
    color: black;
`

export const DeleteButton = (props) =>
{
    return (
        <InvisibleButtonStyle>
            <DeleteButtonContent onClick = {() => props.onClickFunction()}>
                X
            </DeleteButtonContent>
        </InvisibleButtonStyle>
    )
}