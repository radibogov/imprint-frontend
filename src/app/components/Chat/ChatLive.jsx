import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { chatDefault } from '../../../state/reducers/chatStateReducer';
import ChatMessage from './ChatMessage'



const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 100%;
height: 100%;
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
z-index: 111;
`;

const Header = styled.div`
z-index: 1;
color: #fff;
width: 100%;
margin: 0px auto;
height: 20%;
padding: 15px;
box-sizing: border-box;
background: rgb(98, 150, 204);
transition: .5s;
transform: translateY(-120px);
`;
const ChatH2 = styled.h2`
text-align: center;
`;
const ChatInner = styled.div`
width: 100%;
height: 90%;
background-color: #fff;
`;
const MessagesContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
width: 100%;
height: 85%;
`;
const ChatInput = styled.input`
width: 100%;
height: 15%;
margin: 0;
padding: 20px;
box-sizing: border-box;
font-size: 18px;
border: none;
transition: .5s;
transform: translateY(100px);
background-color: #eee;
:focus-visible{
    outline: none;
}
`;

const ChatLive = () => {
    const dispatch = useDispatch()
    const headerRef = React.useRef()
    const inputRef = React.useRef()
    React.useEffect(() => {
        headerRef.current.style.transform = 'translateY(0)'
        inputRef.current.style.transform = 'translateY(0)'
        setTimeout(() => inputRef.current.focus(), 500)
    }, [])

    return <Wrapper>
        <BackArrowBlock type="button" onClick={() => dispatch(chatDefault())}>
            <ArrowBackIcon fontSize="large" style={{ color: "#fff" }} />
        </BackArrowBlock>
        <Header ref={headerRef} >
            <ChatH2>Начните беседу с нашим агентом</ChatH2>
        </Header>
        <ChatInner>
            <MessagesContainer>
                <ChatMessage
                    side='left'
                    message='Алексей Викторович'
                />
                <ChatMessage
                    side='left'
                    message='gay'
                />
                <ChatMessage
                    side='right'
                    message='asdasd asdasdasd asdasdasd asdasd asda'
                />
                <ChatMessage
                    side='left'
                    message='asdas asdasas asda asdasd asdasd'
                />
            </MessagesContainer>
            <ChatInput ref={inputRef} />
        </ChatInner>
    </Wrapper>
}

export default ChatLive