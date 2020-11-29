import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/style.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// redux
import { Provider } from 'react-redux';
import store from './data/store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </BrowserRouter>
    <App />
  </Provider>,
  document.getElementById('root')
);
