import './App.css';
import MainRouter from './components/routes/MainRoutes';
import { useDispatch, useSelector } from 'react-redux'
import { changeLanguage } from './state/reducers/languageReducer';
import React from 'react';

function App() {
  const dispatch = useDispatch()
  const lang = useSelector(state => state.language.language)


  return (
    <>
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
    </>
  );
}

export default App;
