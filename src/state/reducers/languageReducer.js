

const CHANGE_LANGUAGE = "CHANGE_LANGUAGE"

const defaultLanguage = {
    language: 'ru'
}


export const languageReducer = (state = defaultLanguage, action) => {

    switch (action.type) {
        case CHANGE_LANGUAGE:
            return { state, language: action.payload }

        default:
            return state
    }
}


export const changeLanguage = (payload) => { return { type: 'CHANGE_LANGUAGE', payload } }