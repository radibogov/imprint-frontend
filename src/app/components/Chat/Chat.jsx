import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import ChatEmailForm from './ChatEmailForm';
import ChatLive from './ChatLive';
import ChatMain from './ChatMain';

const Wrapper = styled.div`
width: 95%;
position: relative;
height: 88%;
margin: 10px auto;
border-radius: .5rem;
opacity: 0;
transition: .4s; 
transform: translateY(-30px);
box-shadow: 0 0 5px rgba(0,0,0,0.5);
overflow: hidden;
`;


const Chat = () => {
    const chatState = useSelector(state => state.chatState.chatState)
    const chatRef = React.useRef()

    React.useEffect(() => {
        chatRef.current.style.opacity = 1;
        chatRef.current.style.transform = `translateY(0)`;

    }, [])

    return (
        <Wrapper ref={chatRef}>
            {chatState === 'default' && <ChatMain/>}
            {chatState === 'email' && <ChatEmailForm/>}
            {chatState === 'liveChat' && <ChatLive/>}
        </Wrapper>
    )
}
export default Chat;