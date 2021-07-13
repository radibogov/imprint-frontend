
import { fetchUrl } from "../../app/configs/urls."
import { failedReg, getNewUser } from "../reducers/regDataReducer"



export const getRegData = (bodyData) => {



    return dispatch => {
        fetch(`${fetchUrl}auth/registration/`,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(bodyData),
            })
            .then(res => res.json())
            .then(res => {
                dispatch(getNewUser(res))
            })
            .catch(() => dispatch(failedReg()))
    }
}