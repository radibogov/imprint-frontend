
const CHAT_DEFAULT = "CHAT_DEFAULT"
const CHAT_EMAIL = "CHAT_EMAIL"
const CHAT_LIVECHAT = "CHAT_LIVECHAT"

const defaultState = {
    chatState: 'default',
}


export const chatStateReducer = (state = defaultState, action) => {

    switch (action.type) {
        case CHAT_DEFAULT:
            return { chatState: 'default' }
        case CHAT_EMAIL:
            return { chatState: 'email' }
        case CHAT_LIVECHAT:
            return { chatState: 'liveChat' }


        default:
            return state
    }
}


export const chatDefault = () => { return { type: 'CHAT_DEFAULT' } }
export const chatEmail = () => { return { type: 'CHAT_EMAIL' } }
export const chatLiveChat = () => { return { type: 'CHAT_LIVECHAT' } }

