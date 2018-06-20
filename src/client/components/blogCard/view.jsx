import React from 'react'
import { Button } from 'antd'
import './style.css'

var view = function () {
    return (
        <div className="blog-card">
            <div className="content">
                <div className="image">
                </div>
                <div className="text">
                    <p className="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <p className="preview">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse.
                    </p>
                </div>
                <div className="action">
                    <Button className="btn-orange">Read More</Button>
                </div>
            </div>
        </div>
    )
}

export default view
