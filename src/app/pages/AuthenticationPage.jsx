import React from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import i18next from 'i18next'
import { useDispatch, useSelector } from 'react-redux'
import { getAuth } from '../../state/async-actions/getAuth';

const Wrapper = styled.div`
width: 100%;
height: 80vh;
display: flex;
justify-content: center;
align-items: center;
`;
const AuthForn = styled.form`
width: 25%;
min-height: 400px;
height: 30%;
background-color: #eee;
border-radius: 1rem;
box-shadow: 0 0 15px rgba(98, 150, 204, 0.7); 
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0px 30px;
`;
const FormInner = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
height: 80%;
width: 45%;
`;

const AuthenticationPage = () => {
    const dispatch = useDispatch()
    const lang = useSelector(state => state.language.language),
        authStatus = useSelector(state => state.auth)
    const formRef = React.useRef(),
        loginRef = React.useRef(),
        passRef = React.useRef()
    const [formInp, setFormInp] = React.useState({
        login: '',
        password: ''
    })
    i18next.init({
        lng: lang,
        resources: require(`../../locale/${lang}.json`)
    });
    React.useEffect(() => {
        formRef.current.addEventListener('submit', function (e) {
            e.preventDefault()
        })
    }, [dispatch])

    return <Wrapper>
        <AuthForn ref={formRef}>
            <FormInner>
                <TextField
                    ref={loginRef}
                    autoComplete="off"
                    error={false}
                    id="login"
                    label={i18next.t('login')}
                    value={formInp.login}
                    onChange={(event) => setFormInp(Object.create(Object.assign(formInp, { login: event.target.value })))}
                />
                <TextField
                    ref={passRef}
                    autoComplete="off"
                    error={authStatus.failed === true}
                    id="password"
                    label={i18next.t('password')}
                    type="password"
                    helperText={authStatus.failed === true ? 'Неверный пароль' : ''}
                    value={formInp.password}
                    onChange={(event) => setFormInp(Object.create(Object.assign(formInp, { password: event.target.value })))}
                />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    onClick={
                        () => dispatch(getAuth(formInp.login, formInp.password))
                    }
                >
                    {i18next.t('sign_in')}
                </Button>
            </FormInner>
        </AuthForn>
    </Wrapper>
}


export default AuthenticationPage;