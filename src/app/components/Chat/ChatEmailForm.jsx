import React from 'react'
import styled from 'styled-components'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useDispatch } from 'react-redux';
import { chatDefault } from '../../../state/reducers/chatStateReducer';

const Wrapper = styled.div`
display: flex;
flex-direction: column;
`;
const BackArrowBlock = styled.button`
position: absolute;
left: 10px;
top: 10px;
display: flex;
align-items: center;
justify-content: center;
background-color: transparent;
border: none;
cursor: pointer;
`;
const ChatFakeHeader = styled.div`
z-index: -1;
background: rgb(98, 150, 204);
width: 140%;
height: 85%;
transition: .4s;
transform: rotate(-10deg) translate(-35px, -230px);
position: absolute;
`;
const FormInner = styled.form`
box-shadow: 0 0 5px rgba(0,0,0,0.5);
width: 80%;
height: 420px;
margin: 0 auto;
background-color: #fff;
border-radius: .3rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
padding-bottom: 20px;
transition: .6s;
transform: scale(0.5);
opacity: 0;
`;
const Header = styled.div`
z-index: 1;
color: #fff;
width: 80%;
margin: 20px auto;
`;
const ChatH2 = styled.h2`
text-align: center;
`;
const CustomButton = styled(Button)`
&& {
    background-color: rgb(98, 150, 204);
    color: #fff;
    :hover{
        background-color: rgb(98, 150, 204);
    }
}
`;
const CustomInput = styled(TextField)`
&& {
    font-size: 25px;
}
`;

const ChatEmailForm = () => {
    const dispatch = useDispatch()
    const fakeHeaderRef = React.useRef()
    const formRef = React.useRef()

    React.useEffect(() => {
        fakeHeaderRef.current.style.transform = 'rotate(12deg) translate(-55px, -230px)'
        formRef.current.style.transform = 'scale(1)'
        formRef.current.style.opacity = '1'
    }, [])

    return (
        <Wrapper>
            <ChatFakeHeader ref={fakeHeaderRef} />
            <BackArrowBlock type="button" onClick={() => dispatch(chatDefault())}>
                <ArrowBackIcon fontSize="large" style={{ color: "#fff" }} />
            </BackArrowBlock>
            <Header>
                <ChatH2>Немного о вас</ChatH2>
            </Header>
            <FormInner ref={formRef}>
                <CustomInput label="Имя" size="small" />
                <CustomInput label="Тема" size="small" />
                <CustomInput label="Адрес эл. почты" size="small" />
                <TextField
                    id="standard-multiline-static"
                    label="Чем мы можем помочь?"
                    variant="filled"
                    multiline
                    rows={3}
                />
                <CustomButton variant="contained">
                    Отправить
                </CustomButton>
            </FormInner>

        </Wrapper>
    )
}

export default ChatEmailForm