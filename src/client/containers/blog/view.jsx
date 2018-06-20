import React from 'react'
import { Row, Col } from 'antd'
import './style.css'
import BlogCard from '../../components/blogCard'

var view = function () {
    return (
        <div className="page animated fadeIn blog">
            <div className="container">
                <Row gutter={50}>
                    <Col lg={12} className="column">
                        <BlogCard/>
                    </Col>
                    <Col lg={12} className="column">
                        <BlogCard/>
                    </Col>
                    <Col lg={12} className="column">
                        <BlogCard/>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default view
