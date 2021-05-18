import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./App.css";
import Login from "./page/Login";
import Header from './components/Header';
import Home from "./page/Home";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/home">
                      <Header />
                      <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
