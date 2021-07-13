import React from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import { chatEmail, chatLiveChat } from '../../../state/reducers/chatStateReducer';

const ChatFakeHeader = styled.div`
z-index: -1;
background: rgb(98, 150, 204);
width: 120%;
height: 75%;
transition: .4s;
transform: rotate(-10deg) translate(-35px, -60px);
position: absolute;
`;
const ChatHeader = styled.div`
z-index: 1;
color: #fff;
width: 80%;
margin: 20px auto;
`;
const ChatH2 = styled.h2`
text-align: center;
`;
const ChatH3 = styled.h3`
text-align: center;
`;
const ChatBody = styled.div`
margin-top: 60px;
color: #fff;
`;
const Card = styled.div`
box-shadow: 0 0 5px rgba(0,0,0,0.5);
width: 80%;
margin: 20px auto;
display: flex;
flex-direction: column;
align-items: center;
height: 150px;
background-color: #fff;
border-radius: .3rem;
transition: .5s;
transform-style: preserve-3d;
cursor: pointer;
opacity: .0;
transform: translateY(-65px);
color: rgb(98, 150, 204);
font-size: 30px;
:hover{
    box-shadow: 0 0 5px rgba(0,0,0,0.5);
    transform: scale3d(1.1, 1.1, 0.3) !important;
}
`;

const ChatMain = () => {
    const fakeHeaderRef = React.useRef()
    const dispatch = useDispatch()

    React.useEffect(() => {
        fakeHeaderRef.current.style.transform = 'rotate(-10deg) translate(-35px, -230px)'
        document.querySelectorAll('.form-card').forEach((el) => {
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)'
        })
    }, [])

    return <>
        <ChatFakeHeader ref={fakeHeaderRef} /> 
        <ChatHeader>
            <ChatH2>Начните беседу</ChatH2>
        </ChatHeader>
        <ChatBody>
            <ChatH3>Как с вами связаться?</ChatH3>
            <Card
                className="form-card"
                onClick={() => dispatch(chatEmail())}
            >
                email
            </Card>
            <Card
                className="form-card"
                onClick={() => dispatch(chatLiveChat())}
            >
                chat
            </Card>
        </ChatBody>
    </>
}

export default ChatMain;