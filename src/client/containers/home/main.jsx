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
            currentImage: 0,
            lightBoxIsOpen: false
        }
    }

    openLightBox (event, obj) {
        this.setState({
            currentImage: obj.index,
            lightBoxIsOpen: true,
        })
    }

    closeLightBox () {
        this.setState({
            currentImage: 0,
            lightBoxIsOpen: false,
        })
    }

    previousImage () {
        this.setState({
            currentImage: this.state.currentImage - 1,
        })
    }

    nextImage () {
        this.setState({
            currentImage: this.state.currentImage + 1,
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
