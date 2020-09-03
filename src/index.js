import React from 'react'
import { render } from 'react-dom'
// import App from '@/App.jsx'
import Auth from '@/Auth/Auth'
import Dashboard from '@/Dashboard/Dashboard'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

let app = (
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Auth} />
        <Route exact path="/Dashboard" component={Dashboard} />
        <Redirect to="/" />
    </Switch>
    </BrowserRouter>
)
render(app, document.getElementById('root'));