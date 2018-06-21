import React from 'react'
import { Row, Col } from 'antd'
import './style.css'
import BlogCard from '../../components/blogCard'

var view = function () {
    return (
        <div className="page animated fadeIn blog">
            <div className="page-heading">
                <p className="title">Blog</p>
                <p className="quote">
                    " A blog is neither a diary nor a journal. Many people think of blogging in relation to those two
                    things, confessional or practical. It is neither but includes elements of both. " ~ Lemn Sissay
                </p>
            </div>
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
