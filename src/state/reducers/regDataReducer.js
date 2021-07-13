

const GET_NEW_USER = "GET_NEW_USER"
const FAILED_REG = "FAILED_REG"

const defaultState = {
    id: null,
    login: null,
    telegram_login: null,
    password: null,
    first_name: null,
    second_name: null,
    email: null,
    failed: false,
}


export const regDataReducer = (state = defaultState, action) => {

    switch (action.type) {
        case GET_NEW_USER:
            return {
                state,
                id: action.payload.user.id,
                login: action.payload.user.login,
                telegram_login: action.payload.user.telegram_login,
                password: action.payload.user.password,
                first_name: action.payload.user.first_name,
                second_name: action.payload.user.second_name,
                email: action.payload.user.email,
                failed: false,
            }
        case FAILED_REG:
            return {
                state,
                id: null,
                login: null,
                telegram_login: null,
                password: null,
                first_name: null,
                second_name: null,
                email: null,
                failed: true,
            }

        default:
            return state
    }
}


export const getNewUser = (payload) => { return { type: 'GET_NEW_USER', payload } }
export const failedReg = () => { return { type: 'FAILED_REG' } }