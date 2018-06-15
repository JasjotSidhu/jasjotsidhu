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
            current: 'home',
        }
    }

    handleClick (e) {
        console.log('click ', e)
        this.setState({
            current: e.key,
        })
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
