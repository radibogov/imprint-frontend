import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getRegData } from '../../../state/async-actions/getRegData';

const FormWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #fff;
width: 50%;
height: 70%;
border-radius: .5rem;
box-shadow: 0 0 10px rgba(0,0,0,0.1);
`;
const CustomButton = styled(Button)`

&& {
    background-color: rgb(98, 150, 204);
    color: #fff;
    :hover{
        background-color: rgb(98, 150, 204);
    }
    :disabled{
        background-color: #dfdfdf;
    }
}
`;
const CustomInput = styled(TextField)`
&& {
    font-size: 25px;
}
`;
const FormH2 = styled.h2`
color: #949494;
text-align: left;
width: 40%;
font-size: 27px;
border-bottom: 1px solid #949494;
padding-bottom: 12px;
`;
const FormInner = styled.div`
display: flex;
flex-direction: column;
width: 40%;
height: 55%;
justify-content: space-around;
`;




const SignUpForm = () => {
    const dispatch = useDispatch()

    const [inpValues, setInpValues] = React.useState({
        email: '',
        login: '',
        name: '',
        surname: '',
        telegram: '',
        password: '',
        repeatPassword: '',
    })
    console.log(inpValues)

    function newInp(obj, prop, val) {
        this.email = obj.email;
        this.login = obj.login;
        this.name = obj.name;
        this.surname = obj.surname;
        this.telegram = obj.telegram;
        this.password = obj.password;
        this.repeatPassword = obj.repeatPassword;
        this[prop] = val;
    }

    return <FormWrapper>
        <FormH2>
            Регистрация
        </FormH2>
        <FormInner>
            <CustomInput
                label="Email"
                value={inpValues.email}
                onChange={
                    (event) => {
                        setInpValues(new newInp(inpValues, 'email', event.target.value))
                    }
                }
            />
            <CustomInput
                label="Логин"
                value={inpValues.login}
                onChange={
                    (event) => {
                        setInpValues(new newInp(inpValues, 'login', event.target.value))
                    }
                } />
            <CustomInput
                label="Имя"
                value={inpValues.name}
                onChange={
                    (event) => {
                        setInpValues(new newInp(inpValues, 'name', event.target.value))
                    }
                }
            />
            <CustomInput
                label="Telegram"
                value={inpValues.telegram}
                onChange={
                    (event) => {
                        setInpValues(new newInp(inpValues, 'telegram', event.target.value))
                    }
                }
            />
            <CustomInput
                type="password"
                label="Пароль"
                value={inpValues.password}
                onChange={
                    (event) => {
                        setInpValues(new newInp(inpValues, 'password', event.target.value))
                    }
                }
            />
            <CustomInput
                type="password"
                label="Повторите пароль"
                error={inpValues.password === inpValues.repeatPassword ? false : true}
                helperText={inpValues.password === inpValues.repeatPassword ? '' : 'Пароли не совпадают'}
                value={inpValues.repeatPassword}
                onChange={
                    (event) => {
                        setInpValues(new newInp(inpValues, 'repeatPassword', event.target.value))
                    }
                }
            />
            <CustomButton
                type="submit"
                disabled={inpValues.password === inpValues.repeatPassword ? false : true}
                onClick={
                    () => {
                        dispatch(getRegData(inpValues))
                    }
                }
            >
                Отправить
            </CustomButton>
        </FormInner>
        <FormH2>
            Уже есть аккаунт?
        </FormH2>
        <NavLink to="/signin" style={{ color: '#fff', textDecoration: 'none', width: '40%' }}>
            <CustomButton style={{ width: '100%' }} type="button">
                Войти
            </CustomButton>
        </NavLink>
    </FormWrapper>
}

export default SignUpForm