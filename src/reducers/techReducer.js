import {
    GET_TECHS
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
        default:
            return state
    }
}


export default techReducer;