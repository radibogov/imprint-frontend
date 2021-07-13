import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'
import SignUpForm from '../components/SignUp/SiignUpForm';



const Wrapper = styled.div`
display: flex;
flex-direction: row;
height: 100vh;
`;
const LogoContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 40%;
`;
const LogoImg = styled.img`
width: 350px;
`;
const FormContainer = styled(LogoContainer)`
width: 60%;
background: #eee;
`;


const SignUpPage = () => {


    return <Wrapper>
        <FormContainer>
            <SignUpForm/>
        </FormContainer>
        <LogoContainer>
            <NavLink to="/main">
                <LogoImg src={logo} alt="" />
            </NavLink>
        </LogoContainer>
    </Wrapper>
}

export default SignUpPage