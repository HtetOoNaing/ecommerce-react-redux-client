import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar.component';
import Home from './screens/Home';
import Register from './screens/Register';

const Routes = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/register" component={Register} />
                </Switch>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default Routes;