import React from 'react';
import Header from '../components/Header';
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom';


/**
 * Main Component
 */
class App extends React.Component {
    constructor(){
        super();
    };

    render(){
        return (
            <div>
                <Route path='/' component={Header} />
            </div>
        );
    }
}

export default App;

