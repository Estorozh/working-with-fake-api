import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Auth from '@/Auth/Auth'
import Dashboard from '@/Dashboard/Dashboard'
import store from './store'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

let app = (
    <Provider store={store}>
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Auth} />
        <Route exact path="/Dashboard" component={Dashboard} />
        <Redirect to="/" />
    </Switch>
    </BrowserRouter>
    </Provider>
)
render(app, document.getElementById('root'));