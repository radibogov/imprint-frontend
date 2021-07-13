import React from 'react'
import styled from 'styled-components'




const ChatMessage = (props) => {
    const Wrapper = styled.div`
margin: 2px 0;
width: 100%;
display: flex;
flex-direction: row;
box-sizing: border-box;
justify-content: ${props.side === "left" ? 'flex-start' : 'flex-end'};
align-items: center;
min-height: 35px;
transition: .5s;
opacity: 0.3;
transform: ${props.side === 'left' ? 'translateX(-200px)' : 'translateX(200px)'};
`;
    const Message = styled.div`
margin: 0px 5px;
border: 1px solid rgb(98, 150, 204);
background: ${props.side === "left" ? 'rgb(98, 150, 204)' : 'transparent'} ;
padding: 5px;
color: ${props.side === "left" ? '#fff' : '#000'};
font-size: 17px; 
border-radius: .3rem;
max-width: 170px;
text-align: center;
`;

    const messageRef = React.useRef()


    React.useEffect(() => {
        messageRef.current.style.opacity = 1;
        messageRef.current.style.transform = 'translateX(0)';
    }, [])

    return <Wrapper ref={messageRef}>
        <Message>
            {props.message}
        </Message>
    </Wrapper>
}

export default ChatMessage