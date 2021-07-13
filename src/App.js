import MainRouter from './app/routes/MainRoutes';
import { useDispatch, useSelector } from 'react-redux'
import { changeLanguage } from './state/reducers/languageReducer';
import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import ChatContainer from './app/containers/ChatContainer';
import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

function App() {
  const dispatch = useDispatch()
  const lang = useSelector(state => state.language.language)
  React.useEffect(() => {
    document.querySelector('html').lang = lang;
  }, [lang])

  return (
    <BrowserRouter>
      <GlobalStyle />
      {/*     
      <button
        onClick={
          () => {
            dispatch(changeLanguage(lang === 'en' ? 'ru' : 'en'))
          }
        }
      >
        change
      </button>
      <ChatContainer /> */}
      <MainRouter
        lang={lang}
      />
    </BrowserRouter>
  );
}

export default App;
