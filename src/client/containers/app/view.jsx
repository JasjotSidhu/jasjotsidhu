import React from 'react'
import './style.css'
import Header from '../header'
import Footer from '../footer'
import { Layout } from 'antd'

const {Content} = Layout
let view = function () {
    return (
        <div className="app">
            <Header/>
            <Content>Content</Content>
            <Footer/>
        </div>
    )
}

export default view
