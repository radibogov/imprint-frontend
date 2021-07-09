
const CHAT_OPENED = "CHAT_OPENED"


const defaultState = {
    isOpen: false,
}


export const chatReducer = (state = defaultState, action) => {

    switch (action.type) {
        case CHAT_OPENED:
            return { isOpen: action.payload }


        default:
            return state
    }
}


export const openChat = (payload) => { return { type: 'CHAT_OPENED', payload } }
