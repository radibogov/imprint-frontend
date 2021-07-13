import { fetchUrl } from "../../app/configs/urls."
import { getTokens, failedAuth } from "../reducers/tokensReducer";



export const getAuth = (username, password) => {



    return dispatch => {
        fetch(`${fetchUrl}auth/`,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({
                    username: username,
                    password: password,
                })
            })
            .then(res => res.json())
            .then(res => {
                localStorage.setItem('username', username);
                localStorage.setItem('accessToken', res.access);
                localStorage.setItem('refreshToken', res.refresh);
                dispatch(getTokens(res))
            })
            .catch(() => dispatch(failedAuth()))
    }
}