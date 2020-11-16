import {MAX_TIMELINE, INITIAL_TIMELINE} from '../Constants'

const lineDataReducer = (state = 
    {
        initialChanges: Array(MAX_TIMELINE).fill(0),
        monthlyChanges: Array(MAX_TIMELINE).fill(0),
        lineData: Array(MAX_TIMELINE).fill({x:0, y:0})

    }
    , action) =>
{
    switch(action.type)
    {
        case 'EDIT_LINE_DATA':
            return {
                ...state,
                initialChanges: action.payload.initialChanges,
                monthlyChanges: action.payload.monthlyChanges,
                lineData: action.payload.lineData
            }
        default: 
            return state;
    }
}

export default lineDataReducer;