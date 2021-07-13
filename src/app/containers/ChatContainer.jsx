import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import Chat from '../components/Chat/Chat'
import { openChat } from '../../state/reducers/chatOpenReducer';


const Wrapper = styled.div`
position: fixed;
bottom: 60px;
right: 100px;
width: 400px;
height: 650px;
`;
const ChatButton = styled.button`
position: absolute;
bottom: 10px;
right: 10px;
`;
const ChatContainer = () => {
    const dispatch = useDispatch()
    const isOpen = useSelector(state => state.openChat.isOpen)




    return (
        <Wrapper>
            {isOpen === true && <Chat />}

            <ChatButton
                onClick={
                    () => dispatch(openChat(isOpen === true ? false : true))
                }
            >
                show
            </ChatButton>
        </Wrapper>
    )
}

export default ChatContainer;