import {omit} from 'lodash'

const optionsReducer = (state = 
    {
        currentId: 0,
        data: []
    }, action) =>
    {
        switch(action.type)
        {
            case "ADD_NEW_OPTION":
                return {
                    ...state,
                        data: {
                            ...state.data,
                            [state.currentId] : 
                            {
                                name: action.payload.name,
                                choiceId: action.payload.choiceId,
                                optionId: state.currentId,
                                initialGain: 0,
                                monthlyGain: 0,
                                startDate: 0,
                                duration: 0,
                            }
                        },
                        currentId : state.currentId+1
                }

            case "EDIT_OPTION_NAME":
            {
                return {
                    ...state,
                    data : {
                        ...state.data,
                        [action.payload.optionId] :
                        {
                            ...state.data[action.payload.optionId],
                            name: action.payload.name
                        }
                    }
                }
            }
            case "EDIT_INITIAL_GAIN":
            {
                return {
                    ...state,
                    data : {
                        ...state.data,
                        [action.payload.optionId] :
                        {
                            ...state.data[action.payload.optionId],
                            initialGain: action.payload.initialGain
                        }
                    }
                }
            }
            case "EDIT_MONTHLY_GAIN":
            {
                return {
                    ...state,
                    data : {
                        ...state.data,
                        [action.payload.optionId] :
                        {
                            ...state.data[action.payload.optionId],
                            monthlyGain: action.payload.monthlyGain
                        }
                    }
                }
            }
            case "EDIT_START_DATE":
            {
                return {
                    ...state,
                    data : {
                        ...state.data,
                        [action.payload.optionId] :
                        {
                            ...state.data[action.payload.optionId],
                            startDate: action.payload.startDate
                        }
                    }
                }
            }
            case "EDIT_DURATION":
            {
                return {
                    ...state,
                    data : {
                        ...state.data,
                        [action.payload.optionId] :
                        {
                            ...state.data[action.payload.optionId],
                            duration: action.payload.duration
                        }
                    }
                }
            }
            case "DELETE_OPTION":
            {
                let newData = {...state.data};
                delete newData[action.payload];
                return {
                    ...state,
                    data: newData
                }
            }
            case "DELETE_OPTION_LIST":
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
export default optionsReducer;



