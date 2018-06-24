import React from 'react'
import { Popover } from 'antd'
import './style.css'
import instagram from '../../images/insta.png'
import snapchat from '../../images/snapchay.png'
import twitter from '../../images/twitter.png'

var view = function () {
    return (
        <div className="page animated fadeIn contact">
            <div className="content">
                <p className="title">Join me on</p>
                <ul>
                    <li>
                        <a href="https://www.instagram.com/jassss_sidhu/" target="_blank">
                            <img src={instagram}/>
                        </a>
                    </li>
                    <li>
                        <Popover
                            content={<p>@jassss_sidhu</p>}
                            title="Snapchat Handle"
                            trigger="click"
                            visible={this.state.visible}
                            onVisibleChange={this.handleVisibleChange.bind(this)}
                        >
                            <img src={snapchat}/>
                        </Popover>
                    </li>
                    <li>
                        <a href="https://twitter.com/Jassss_sidhu" target="_blank">
                            <img src={twitter}/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default view
