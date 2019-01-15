import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

export default class Images extends Component {
  render() {
    return (
      <div className="pageContainer">
        <h1>Bilder</h1>

        <Carousel
          autoPlay
          transitionTime="1000"
          interval="5000"
          showThumbs="false"
          infiniteLoop="true"
          stopOnHover="true"
          dynamicHeight="true"
        >
          <div>
            <img alt="" src={require("../images/imageCarousel/IMG_0849.jpg")} />
          </div>
          <div>
            <img alt="" src={require("../images/imageCarousel/IMG_0851.jpg")} />
          </div>
          <div>
            <img alt="" src={require("../images/imageCarousel/IMG_1657.jpg")} />
          </div>
          <div>
            <img alt="" src={require("../images/imageCarousel/IMG_1786.jpg")} />
          </div>
          <div>
            <img alt="" src={require("../images/imageCarousel/IMG_2047.jpg")} />
          </div>
          <div>
            <img alt="" src={require("../images/imageCarousel/IMG_2048.jpg")} />
          </div>
          <div>
            <img alt="" src={require("../images/imageCarousel/IMG_2226.jpg")} />
          </div>
          <div>
            <img alt="" src={require("../images/imageCarousel/IMG_2363.jpg")} />
          </div>
          <div>
            <img alt="" src={require("../images/imageCarousel/IMG_2452.jpg")} />
          </div>
          <div>
            <img alt="" src={require("../images/imageCarousel/IMG_3004.jpg")} />
          </div>
          <div>
            <img alt="" src={require("../images/imageCarousel/IMG_3041.jpg")} />
          </div>
          <div>
            <img alt="" src={require("../images/imageCarousel/IMG_3499.jpg")} />
          </div>
          <div>
            <img alt="" src={require("../images/imageCarousel/IMG_4153.jpg")} />
          </div>
          <div>
            <img alt="" src={require("../images/imageCarousel/IMG_4269.jpg")} />
          </div>
        </Carousel>
      </div>
    );
  }
}

