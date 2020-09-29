

const choicesReducer = (state  =
    {
        choiceList: Array(),
        currentId: 0
    }
    , action) =>
    {
        switch(action.type)
        {
            case "ADD_NEW_CHOICE":
                return {
                    choiceList: [...state.choiceList,
                        {
                            name: action.name,
                            choiceId: state.currentId    
                        }
                    ],
                    currentId: state.currentId + 1
                }
            default:
                return state;
        }
    }

export default choicesReducer;