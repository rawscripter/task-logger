import {
    GET_TECHS,
    DELETE_TECH,
    ADD_TECH
} from '../actions/types'

const initState = {
    techs: [],
    loading: false,
    error: null
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
        default:
            return state
    }


}


export default techReducer;