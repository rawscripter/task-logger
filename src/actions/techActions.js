import {
    GET_TECHS,
    TECHS_ERROR
} from './types'


export const getTechs = () => async (dispatch) => {
    try {
        const res = await fetch('/techs');
        const data = await res.json();
        dispatch({
            type: GET_TECHS,
            payload: data
        })

    } catch (err) {
        console.error(err.message);
        dispatch({
            type: TECHS_ERROR,
            payload: err.message
        })
    }
}