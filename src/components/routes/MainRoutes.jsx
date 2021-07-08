import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import i18next from 'i18next'

const MainRouter = ({ lang }) => {

    i18next.init({
        lng: lang,
        resources: require(`../../locale/${lang}.json`)
    });

    return <Router>
        <Switch>
            <Route path="/" exact>
                {i18next.t('main')}
            </Route>
            <Route path="/authentication" exact>
            {i18next.t('auth')}
            </Route>
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


            <Route>
                страница не найдена
            </Route>
        </Switch>
    </Router>

}


export default MainRouter;