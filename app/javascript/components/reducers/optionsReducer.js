const optionsReducer = (state = 
    {
        optionsList: Array(),
        currentId: 0,
    }, action) =>
    {
        switch(action.type)
        {
            case "ADD_NEW_OPTION":
                return {
                    optionsList: [...state.optionsList,
                        {
                            name: action.name,
                            choiceId: action.choiceId,
                            optionId: state.currentId,
                            initialGain: 0,
                            initialGainModifier: 1,
                            monthlyGain: 0,
                            monthlyGainModifier: 1,
                            startDate: 0,
                            duration: 0,
                            activeOption: false

                        }
                    ],
                    currentId: state.currentId + 1
                }
            case "EDIT_OPTION_NAME":
            {
                const currentOptions = [...state.optionsList];
                const currentIndex = currentOptions.findIndex(option =>option.optionId === action.optionId);
                currentOptions[currentIndex].name = action.name; 
                return { 
                    ...state, 
                    optionsList: currentOptions
                }
            }
            case "EDIT_INITIAL_GAIN":
            {
                const currentOptions = [...state.optionsList];
                const currentIndex = currentOptions.findIndex(option =>option.optionId === action.optionId);
                currentOptions[currentIndex].initialGain = action.initialGain; 
                return { 
                    ...state, 
                    optionsList: currentOptions
                }
            }
            case "EDIT_INITIAL_GAIN_MODIFIER":
            {
                const currentOptions = [...state.optionsList];
                const currentIndex = currentOptions.findIndex(option =>option.optionId === action.optionId);
                currentOptions[currentIndex].initialGain = action.initialGainModifier; 
                return { 
                    ...state, 
                    optionsList: currentOptions
                }
            }
            case "SET_ACTIVE_OPTION":
            {
                const currentOptions = [...state.optionsList];
                const currentOption = currentOptions.find(option =>option.optionId === action.optionId);
                const currentIndexChoiceId = currentOption.choiceId;
                currentOptions.forEach(option => 
                    {
                        if(option.choiceId === currentIndexChoiceId)
                    {
                            if(option.optionId ===action.optionId)
                            {
                                option.activeOption = true;
                            }
                            else
                            {
                                option.activeOption = false;
                            }
                        }
                    })
                return { 
                    ...state, 
                    optionsList: currentOptions
                }
            }

            default:
                return state;
        }
    }
export default optionsReducer;



