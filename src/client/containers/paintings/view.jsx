import React from 'react'
import {} from 'antd'
import './style.css'
import Gallery from 'react-photo-gallery'
import LightBox from 'react-images'
import africa from '../../images/art/africa.jpg'
import buddha from '../../images/art/buddha.jpg'
import girl from '../../images/art/girl.jpeg'
import ballons from '../../images/art/balloons.jpg'
import girl2 from '../../images/art/girl2.jpg'
import horse from '../../images/art/horse.jpg'
import lotus from '../../images/art/lotus.jpg'
import rajdarbar from '../../images/art/rajdarbar.png'
import tryion from '../../images/art/tryion.jpg'
import tintin from '../../images/art/tintin.jpg'
import wolf from '../../images/art/wolf.jpg'

const photos = [
    {src: africa, width: 4, height: 3},
    {src: buddha, width: 4, height: 3},
    {src: girl, width: 4, height: 3},
    {src: ballons, width: 3, height: 4},
    {src: girl2, width: 3, height: 4},
    {src: rajdarbar, width: 3, height: 3},
    {src: lotus, width: 3, height: 4},
    {src: tryion, width: 4, height: 5},
    {src: horse, width: 4.5, height: 5},
    {src: tintin, width: 4, height: 3},
    {src: wolf, width: 4, height: 3}
]

let view = function () {
    return (
        <div className="page animated fadeIn art">
            <div className="page-heading">
                <p className="title">Paintings</p>
                <p className="quote">
                    " My painting is visible images which conceal nothing... they evoke mystery and
                    indeed when one sees one of my pictures, one asks oneself this simple question 'What does that
                    mean'? It does not mean anything, because mystery means nothing either, it is unknowable. " ~ Rene
                    Magritte
                </p>
            </div>
            <Gallery photos={photos} onClick={this.openLightBox.bind(this)}/>
            <LightBox images={photos}
                      onClose={this.closeLightBox.bind(this)}
                      onClickPrev={this.previousImage.bind(this)}
                      onClickNext={this.nextImage.bind(this)}
                      currentImage={this.state.currentImage}
                      isOpen={this.state.lightBoxIsOpen}
            />
        </div>
    )
}

export default view
