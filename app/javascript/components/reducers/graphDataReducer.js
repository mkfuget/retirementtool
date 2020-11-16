const graphDataReducer = (state =
    {
        hoverTooltipValue: "HINT_OFF"
    }, action) =>
    {
        switch(action.type)
        {
            case 'EDIT_HOVER_TOOLTIP_VALUE' :
                {
                    return {
                        ...state,
                        hoverTooltipValue: action.payload
                    }
                }
            default: return state;
        }
    }

export default graphDataReducer;
