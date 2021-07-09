import './App.css';
import MainRouter from './app/routes/MainRoutes';
import { useDispatch, useSelector } from 'react-redux'
import { changeLanguage } from './state/reducers/languageReducer';
import React from 'react';
import { BrowserRouter } from 'react-router-dom'

function App() {
  const dispatch = useDispatch()
  const lang = useSelector(state => state.language.language)
  React.useEffect(()=> {
    document.querySelector('html').lang = lang;
  }, [lang])

  return (
    <BrowserRouter>
      <button
        onClick={
          () => {
            dispatch(changeLanguage(lang === 'en' ? 'ru' : 'en'))
          }
        }
      >
        change
      </button>
      <MainRouter
        lang={lang}
      />
    </BrowserRouter>
  );
}

export default App;
