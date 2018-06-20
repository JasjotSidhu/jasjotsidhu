import React from 'react'
import {} from 'antd'
import './style.css'
import Gallery from 'react-photo-gallery'
import Lightbox from 'react-images'

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
        <div className="page art">
            <Gallery photos={photos} onClick={this.openLightBox.bind(this)}/>
            <Lightbox images={photos}
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
