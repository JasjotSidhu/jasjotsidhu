import { Component } from 'react'
import ComponentView from './view'

/**
 * @description Sample Component
 * @type Component
 * @author Jasjot
 */
export default class Main extends Component {

    /**
     * Container
     * @param props
     */
    constructor (props) {
        super(props)
        this.state = {
            visible: false,
        }
    }

    hide () {
        this.setState({
            visible: false,
        })
    }

    handleVisibleChange (visible) {
        this.setState({visible})
    }

    /**
     * ComponentDidMount Hook
     */
    componentDidMount () {

    }

    /**
     * Render Method
     * @returns {*}
     */
    render () {
        return (ComponentView.bind(this))()
    }
}

Main.displayName = 'App-Component'
