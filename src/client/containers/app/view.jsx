import React from 'react'
import logo from '../../images/logo.svg'
import { Button } from 'antd'
import './style.css'

var view = function () {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className="App-title">Welcome Jass Sidhu</h1>
            </header>
            <p className="App-intro">
                <Button type="primary">Primary</Button>
            </p>
        </div>
    )
}

export default view
