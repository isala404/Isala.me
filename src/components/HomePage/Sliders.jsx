import React, {PureComponent} from 'react';
import {hasWebP, lazyLoad, shuffle} from "../../Utils";

class Sliders extends PureComponent {
    constructor(props) {
        super(props);
        this.numberOfBGs = 21;
        this.count = 1;
        this.imgArray = shuffle(this.bgImages(this.numberOfBGs));
        hasWebP.then(() => this.cacheWebP(), () => this.cacheJpeg());
    }

    bgImages = (n) => {
        const a = [];
        for (let i = 0; i < n; i++) {
            a.push(i)
        }
        return a;
    };

    cacheJpeg() {
        this.imgArray = this.imgArray.map((img) => `https://cdn.iconicto.com/Isala.me/sliders/bg_${img}.jpg`);
        lazyLoad(this.imgArray);
    }

    cacheWebP() {
        this.imgArray = this.imgArray.map((img) => `https://cdn.iconicto.com/Isala.me/sliders/bg_${img}.webp`);
        lazyLoad(this.imgArray);
    }


    updateBGImage() {
        const bg = this.imgArray.shift();
        if (this.count % 2 === 0) {
            if (this.img1 === null)
                return;
            this.img1.src = bg;
        } else {
            if (this.img2 === null) {
                return;
            }
            this.img2.src = bg;
            this.imgArray.push(this.img2.src);
        }
        this.count++;
        this.imgArray.push(bg);
        sessionStorage.setItem('img', bg);
        setTimeout(() => {
            this.img1.classList.toggle('hide');
            this.img2.classList.toggle('hide');
        }, 1000)
    }

    componentDidMount() {
        setInterval(() => {{this.updateBGImage();} }, 8000);
    }

    render() {

        return (
            <div id={"slider"}>
                <img ref={(img) => this.img1 = img}
                     alt={"Background"}
                     src={
                         sessionStorage.getItem('img')
                             ? sessionStorage.getItem('img')
                             : `https://cdn.iconicto.com/Isala.me/sliders/bg_${Math.round(Math.random() * this.numberOfBGs)}.jpg`
                     }
                />
                <img ref={(img) => this.img2 = img} alt={"Background"} className={"hide"} />
            </div>
        )
    }
}

export default Sliders;