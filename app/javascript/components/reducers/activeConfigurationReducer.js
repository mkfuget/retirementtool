const activeConfigurationReducer = (state =
    {
        lastConfiguration: -1,
        currentConfiguration: 0,
    }, action) =>
{
    switch(action.type)
    {
        case 'EDIT_ACTIVE_CONFIGURATION':
        {
            return {
                lastConfiguration: state.currentConfiguration,
                currentConfiguration:action.payload
            }
        }
        case 'ADD_NEW_EMPTY_CONFIGURATION':
        {
            return {
                lastConfiguration: state.currentConfiguration,
                currentConfiguration: state.currentConfiguration + 1
            }
        }
        default: return state;
    }

}

export default activeConfigurationReducer