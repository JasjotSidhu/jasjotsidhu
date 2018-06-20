import React from 'react'
import { Layout, Menu, Icon } from 'antd'
import './style.css'
import { Link } from 'react-router-dom'

const {Header} = Layout

let view = function () {
    return (
        <div className="header">
            <Header>
                <Menu
                    onClick={this.handleClick.bind(this)}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                >
                    <Menu.Item key="home">
                        <Link to={'/home'}>
                            <Icon type="home"/>
                            <span>Home</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="blog">
                        <Link to={'/blog'}>
                            <Icon type="book"/>
                            <span>Blog</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="paintings">
                        <Link to={'/paintings'}>
                            <Icon type="picture"/>
                            <span>Paintings</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="contact">
                        <Link to={'/contact'}>
                            <Icon type="mail"/>
                            <span>Contact</span>
                        </Link>
                    </Menu.Item>
                </Menu>
            </Header>
        </div>
    )
}

export default view
