

const choicesReducer = (state  =
    {
        currentId: 0,
        data: []
    }
    , action) =>
    {
        switch(action.type)
        {
            case "ADD_NEW_CHOICE":
                return {
                    ...state,
                        data: {
                            ...state.data,
                            [state.currentId] :
                            {
                                name: state.currentId,
                                configurationId: action.payload.configurationId,
                                activeOption: -1,
                                options: Array()
                            } 
                        },
                        currentId : state.currentId+1
                }
            case "EDIT_CHOICE_NAME" :
                return {
                    ...state,
                    data : {
                        ...state.data,
                        [action.payload.choiceId] :
                        {
                            ...state.data[action.payload.choiceId],
                            name: action.payload.name
                        }
                    }
                }
            case "EDIT_ACTIVE_OPTION" :
                return {
                    ...state,
                    data : {
                        ...state.data,
                        [action.payload.choiceId] :
                        {
                            ...state.data[action.payload.choiceId],
                            activeOption: action.payload.optionId
                        }
                    }
                }

            case "ADD_NEW_OPTION" :
                return {
                    ...state,
                    data : {
                        ...state.data,
                        [action.payload.choiceId] :
                        {
                            ...state.data[action.payload.choiceId],
                            options: 
                                [...state.data[action.payload.choiceId].options, action.payload.optionId]
                        }
                    }
                }
            case "REMOVE_OPTION_FROM_CHOICE" :
                const currentOptions = state.data[action.payload.choiceId].options;
                const newOptions = currentOptions.filter(option => option !== action.payload.optionId)
                return {
                    ...state,
                    data : {
                        ...state.data,
                        [action.payload.choiceId] :
                        {
                            ...state.data[action.payload.choiceId],
                            options: newOptions
                        }
                    }
                }
            case "DELETE_CHOICE" :
            {
                let newData = {...state.data};
                delete newData[action.payload]
                return {
                    ...state,
                    data: newData
                }
            }
            case "DELETE_CHOICE_LIST" :
            {
                let newData = {...state.data};
                for(var i=0; i<action.payload.length; i++)
                {
                    delete newData[action.payload[i]];
                }
                return {
                    ...state,
                    data: newData
                }
            }
            default:
                return state;
        }
    }

export default choicesReducer;