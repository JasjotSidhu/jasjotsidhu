import React from 'react'
import { Row, Col } from 'antd'
import './style.css'

let view = function () {
    return (
        <div className="page animated fadeIn home">
            <Row>
                <Col lg={12}>
                    <div className="welcome">
                    </div>
                </Col>
                <Col lg={12}>
                    <div className="about">
                        <p className="title">
                            Hi, I am Jass Sidhu!
                        </p>
                        <p className="text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default view
