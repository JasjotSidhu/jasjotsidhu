import React from 'react'
import { Layout, Menu, Icon } from 'antd'
import './style.css'

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
                        <Icon type="home"/>
                        <span>Home</span>
                    </Menu.Item>
                    <Menu.Item key="blog">
                        <Icon type="book"/>
                        <span>Blog</span>
                    </Menu.Item>
                    <Menu.Item key="paintings">
                        <Icon type="picture"/>
                        <span>Paintings</span>
                    </Menu.Item>
                    <Menu.Item key="contact">
                        <Icon type="mail"/>
                        <span>Contact</span>
                    </Menu.Item>
                </Menu>
            </Header>
        </div>
    )
}

export default view
