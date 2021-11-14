import {
    GET_TECHS,
    TECHS_ERROR,
    DELETE_TECH,
    ADD_TECH,
    SET_CURRENT_TECH,
    CLEAR_CURRENT_TECH,
    UPDATE_TECH,
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
export const addTech = (tech) => async (dispatch) => {
    try {
        const res = await fetch('/techs', {
            method: 'POST',
            body: JSON.stringify(tech),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        dispatch({
            type: ADD_TECH,
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
export const setCurrentTech = (tech) => {
    return {
        type: SET_CURRENT_TECH,
        payload: tech
    }
}
export const clearCurrentTech = () => {
    return {
        type: CLEAR_CURRENT_TECH
    }
}

export const updateTech = (tech) => async (dispatch) => {
    try {
        const res = await fetch(`/techs/${tech.id}`, {
            method: 'PUT',
            body: JSON.stringify(tech),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await res.json();
        dispatch({
            type: UPDATE_TECH,
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

export const deleteTech = (id) => async (dispatch) => {
    try {
        const res = await fetch(`/techs/${id}`, {
            method: 'DELETE'
        });
        const data = await res.json();
        dispatch({
            type: DELETE_TECH,
            payload: id
        })

    } catch (err) {
        console.error(err.message);
        dispatch({
            type: TECHS_ERROR,
            payload: err.message
        })
    }
}