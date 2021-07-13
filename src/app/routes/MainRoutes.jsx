import React from 'react'
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import i18next from 'i18next'
import AuthenticationPage from '../pages/AuthenticationPage';
import SignUpPage from '../pages/SignUpPage';

const MainRouter = ({ lang }) => {

    i18next.init({
        lng: lang,
        resources: require(`../../locale/${lang}.json`)
    });

    return <Switch>
        <Route path="/main" exact>
            {i18next.t('main')}
        </Route>
        <Route
            path="/signup"
            exact
            component={SignUpPage}
        />
        <Route
            path="/signin"
            exact
            component={AuthenticationPage}
        />
        <Route path="/blog" exact>
            блог
        </Route>
        <Route path="/cases" exact>
            кейсы
        </Route>
        <Route path="/pricing" exact>
            цены
        </Route>
        <Route path="/download" exact>
            загрузка
        </Route>
        <Route path="/updates" exact>
            обновления
        </Route>
        <Route path="/app" exact>
            приложение
        </Route>


        <Redirect to="/main"/>
    </Switch>
}


export default MainRouter;