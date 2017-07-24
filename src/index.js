import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { Provider } from 'react-redux';
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom';
import { createStore } from 'redux';
import rootReducer from './reducers/combined';


let store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
           <Route path='/' component={App} />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
