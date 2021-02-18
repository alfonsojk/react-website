import React from 'react';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/HomePage/Home';
import Footer from './components/pages/Footer/Footer';

function App(){
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path='/' exact component ={Home}/>
            </Switch>
            <Footer />
        </Router>
    )
}

export default App;