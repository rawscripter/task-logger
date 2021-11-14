import {
    GET_TECHS,
    DELETE_TECH,
    ADD_TECH,
    SET_CURRENT_TECH,
    CLEAR_CURRENT_TECH,
    UPDATE_TECH,
} from '../actions/types'

const initState = {
    techs: [],
    loading: false,
    error: null,
    currentTech: null

}

const techReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_TECHS:
            return {
                ...state,
                techs: action.payload,
                loading: false
            }

        case DELETE_TECH:
            return {
                ...state,
                techs: state.techs.filter(tech => tech.id !== action.payload)
            }
        case ADD_TECH:
            return {
                ...state,
                techs: [...state.techs, action.payload]
            }
        case SET_CURRENT_TECH:
            return {
                ...state,
                currentTech: action.payload
            }
        case CLEAR_CURRENT_TECH:
            return {
                ...state,
                currentTech: null
            }
        case UPDATE_TECH:
            return {
                ...state,
                techs: state.techs.map(tech => tech.id === action.payload.id ? action.payload : tech)
            }

        default:
            return state
    }


}




export default techReducer;