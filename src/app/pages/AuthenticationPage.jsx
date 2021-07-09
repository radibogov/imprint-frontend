import React from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import i18next from 'i18next'
import { useSelector } from 'react-redux'

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
    const lang = useSelector(state => state.language.language)

    i18next.init({
        lng: lang,
        resources: require(`../../locale/${lang}.json`)
    });

    return <Wrapper>
        <AuthForn>
            <FormInner>
                <TextField autoComplete="off" error={false} id="login" label={i18next.t('login')}  />
                <TextField autoComplete="off" error={false} id="password" label={i18next.t('password')} type="password" />
                <Button variant="contained" color="primary">
                    {i18next.t('sign_in')}
                </Button>
            </FormInner>
        </AuthForn>
    </Wrapper>
}


export default AuthenticationPage;