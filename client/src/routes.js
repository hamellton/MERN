import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import { AuthPage } from './Components/AuthPage/AuthPage'
import { CreatePage } from './Components/CreatePage.js/CreatePage'
import { DetailPage } from './Components/DetailPage/DetailPage'
import { LinksPage } from './Components/LinksPage/LinksPage'

export const useRoutes = isAutentificated => {
    if (isAutentificated) {
        return(
            <Switch>
                <Route path="/links" exact>
                    <LinksPage />
                </Route>
                <Route path="/create" exact>
                    <CreatePage />
                </Route>
                <Route path="/detail/:id">
                    <DetailPage />
                </Route>
                <Redirect to="/create" />
            </Switch>
        )
    }
    return(
        <Switch>
            <Route to="/" exact>
                <AuthPage />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}