import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import {HomePage, LoginPage, SignUpPage} from './pages';

function App() {
    return (
        <Router>
            <div className="wrapper">
                <div className="container">
                    <Switch>
                        <Route path="/login">
                            <LoginPage/>
                        </Route>
                        <Route path="/signup">
                            <SignUpPage/>
                        </Route>
                        <Route path="/">
                            <HomePage/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
