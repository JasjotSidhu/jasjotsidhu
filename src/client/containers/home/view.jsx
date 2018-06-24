import React from 'react'
import {} from 'antd'
import './style.css'
import Gallery from 'react-photo-gallery'
import LightBox from 'react-images'
import jass1 from '../../images/sidhu/jass.jpg'
import jass2 from '../../images/sidhu/jass2.jpg'
import jass3 from '../../images/sidhu/jass3.jpg'
import jass4 from '../../images/sidhu/jass4.jpg'
import jass5 from '../../images/sidhu/jass5.jpg'
import jass6 from '../../images/sidhu/jasss.jpg'

const photos = [
    {src: jass1, width: 4, height: 3},
    {src: jass6, width: 1, height: 1},
    {src: jass2, width: 3, height: 3},
    {src: jass3, width: 3, height: 4},
    {src: jass4, width: 3, height: 4},
    {src: jass5, width: 4, height: 3}
]

let view = function () {
    return (
        <div className="page animated fadeIn home">
            <div className="page-heading">
                <p className="title">Hi, I am Jass Sidhu!</p>
                <p className="quote">
                    An Electronics Engineer from Thapar University come painting artist. Since I never wanted to do some
                    regular 9 to 5 job, so I ignored all my campus placements and co-founded a software company called
                    <a href='https://www.laxaar.com/' target="_blank"> Laxaar</a>. Whenever I am free from my work I
                    make paintings and give it to my close friends as gifts.
                </p>
            </div>
            <div className="section">
                <p className="title">Some photos of mine</p>
                <Gallery photos={photos} onClick={this.openLightBox.bind(this)}/>
                <LightBox images={photos}
                          onClose={this.closeLightBox.bind(this)}
                          onClickPrev={this.previousImage.bind(this)}
                          onClickNext={this.nextImage.bind(this)}
                          currentImage={this.state.currentImage}
                          isOpen={this.state.lightBoxIsOpen}
                />
            </div>
            <div className="section">
                <p className="title">My favourite quotes</p>
                <div className="list">
                    <p className="quote">
                        " If you hire people just because they can do a job, they’ll work for your money. But if you
                        hire people who believe what you believe, they’ll work for you with blood and sweat and tears. "
                        ~
                        Simon Sinek
                    </p>
                    <p className="quote">
                        " I loved painting and drawing for many reasons. One of them was that all it really required was
                        me, a pencil and a pad. It was something I was passionate about, and still am " ~ Danny Huston
                    </p>
                    <p className="quote">
                        " The way to enjoy life best is to wrap up one goal and start right on the next one. Don't
                        linger
                        too long at the table of success; the only way to enjoy another meal is to get hungry. " ~ Jim
                        Rohn
                    </p>
                    <p className="quote">
                        “ The richest people in the world look for and build networks, everyone else looks for work ” ~
                        Robert Kiyosaki
                    </p>
                </div>
            </div>
        </div>
    )
}

export default view
