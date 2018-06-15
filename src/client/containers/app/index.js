import React, { Component } from 'react'
import logo from '../../images/logo.svg'
import './style.css'
import { Button } from 'antd'

class App extends Component {
    render () {
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
}

export default App