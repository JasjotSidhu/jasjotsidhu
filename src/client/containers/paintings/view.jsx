import React from 'react'
import {} from 'antd'
import './style.css'
import Gallery from 'react-photo-gallery'
import LightBox from 'react-images'

const photos = [
    {src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599', width: 4, height: 3},
    {src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799', width: 1, height: 1},
    {src: 'https://source.unsplash.com/qDkso9nvCg0/600x799', width: 3, height: 4},
    {src: 'https://source.unsplash.com/iecJiKe_RNg/600x799', width: 3, height: 4},
    {src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799', width: 3, height: 4},
    {src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599', width: 4, height: 3},
    {src: 'https://source.unsplash.com/zh7GEuORbUw/600x799', width: 3, height: 4},
    {src: 'https://source.unsplash.com/PpOHJezOalU/800x599', width: 4, height: 3},
    {src: 'https://source.unsplash.com/I1ASdgphUH4/800x599', width: 4, height: 3}
]

let view = function () {
    return (
        <div className="page animated fadeIn art">
            <div className="page-heading">
                <p className="title">Paintings</p>
                <p className="quote">
                    " My painting is visible images which conceal nothing... they evoke mystery and
                    indeed when one sees one of my pictures, one asks oneself this simple question 'What does that
                    mean'? It does not mean anything, because mystery means nothing either, it is unknowable. ~ Rene
                    Magritte "
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
