import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

export default class Images extends Component {
  render() {
    return (
      <div className="pageContainer imageContainer">
        <h1 id="imageHeader">Bilder</h1>
        <div id="imageCarousel">
          <Carousel
            autoPlay
            transitionTime="1000"
            interval="5000"
            showThumbs="false"
            infiniteLoop="true"
            stopOnHover="true"
            dynamicHeight="true"
            showIndicators="false"
          >
            <div>
              <img alt="" src={require("../images/imageCarousel/img1.JPG")} />
            </div>
            <div>
              <img alt="" src={require("../images/imageCarousel/img2.JPG")} />
            </div>
            <div>
              <img alt="" src={require("../images/imageCarousel/img3.JPG")} />
            </div>
            <div>
              <img alt="" src={require("../images/imageCarousel/img4.JPG")} />
            </div>
            <div>
              <img alt="" src={require("../images/imageCarousel/img5.JPG")} />
            </div>
            <div>
              <img alt="" src={require("../images/imageCarousel/img6.JPG")} />
            </div>
            <div>
              <img alt="" src={require("../images/imageCarousel/img7.JPG")} />
            </div>
            <div>
              <img alt="" src={require("../images/imageCarousel/img8.JPG")} />
            </div>
            <div>
              <img alt="" src={require("../images/imageCarousel/img9.JPG")} />
            </div>
            <div>
              <img alt="" src={require("../images/imageCarousel/img10.JPG")} />
            </div>
            <div>
              <img alt="" src={require("../images/imageCarousel/img11.JPG")} />
            </div>
            <div>
              <img alt="" src={require("../images/imageCarousel/img12.JPG")} />
            </div>
            <div>
              <img alt="" src={require("../images/imageCarousel/img13.JPG")} />
            </div>
            <div>
              <img alt="" src={require("../images/imageCarousel/img14.JPG")} />
            </div>
            <div>
              <img alt="" src={require("../images/imageCarousel/img15.JPG")} />
            </div>
          </Carousel>
        </div>
      </div>
    );
  }
}
