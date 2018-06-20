import React from 'react'
import './style.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from '../header'
import Footer from '../footer'
import Home from '../home'
import Blog from '../blog'
import Paintings from '../paintings'
import Contact from '../contact'

let view = function () {
    return (
        <Router>
            <div className="app">
                <Header/>
                <Switch>
                    <Route path={'/'} exact component={Home}/>
                    <Route path={'/home'} component={Home}/>
                    <Route path={'/blog'} component={Blog}/>
                    <Route path={'/paintings'} component={Paintings}/>
                    <Route path={'/contact'} component={Contact}/>
                </Switch>
                <Footer/>
            </div>
        </Router>
    )
}

export default view
