import React from 'react';
import { ErrorPage } from '../ErrorPage/index';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { MenuNav } from '../menu/index';
import { ToDoComponent } from '../todo/index';
import { FormComponent } from '../form/index';
import { Home } from '../home/index';


export class ErrorRouter extends React.Component {

    render(){
        return(
        <ErrorPage>
            <Router>
                <div className="itemlist">
                <MenuNav />
                <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/form" component={FormComponent} />
                <Route path="/todo" component={ToDoComponent} />
                <Route path="/error" render={() => <h1> Ups... Page not found :( </h1> } />
                <Redirect to="/error" />
                </Switch>
                </div>    
            </Router>
        </ErrorPage>
        )
    }
}