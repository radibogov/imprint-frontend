

const GET_TOKENS = "GET_TOKENS"
const FAILED_AUTH = "FAILED_AUTH"

const defaultState = {
    refresh: null,
    access: null,
    failed: false,
}


export const authReducer = (state = defaultState, action) => {

    switch (action.type) {
        case GET_TOKENS:
            return {
                state,
                refresh: action.payload.refresh,
                access: action.payload.access,
                failed: false
            }
        case FAILED_AUTH:
            return {
                state,
                refresh: null,
                access: null,
                failed: true
            }

        default:
            return state
    }
}


export const getTokens = (payload) => { return { type: 'GET_TOKENS', payload } }
export const failedAuth = () => { return { type: 'FAILED_AUTH' } }