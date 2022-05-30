import React, { Component } from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export class Carouselbanner extends Component {
  render() {
    return (
      <div>
              <div className="carousel">
        <div className="container-fluid">
          <Carousel>
            <div className="carousel-item">
            <img  src="assets/img/carousel-1.jpg" alt="carouselimg" />
              <div className="carousel-text">
                <h3>Washing & Detailing</h3>
                <h1>Keep your Car Newer</h1>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus ut mollis mauris.
                  Vivamus egestas eleifend dui ac
                </p>
                <a className="btn btn-custom" href="abc.html">
                  Explore More
                </a>
              </div>
            </div>
            <div className="carousel-item">
            <img src="assets/img/carousel-2.jpg" alt="carouselimg" />
              <div className="carousel-text">
                <h3>Washing & Detailing</h3>
                <h1>Quality service for you</h1>
                <p>
                  Morbi sagittis turpis id suscipit feugiat. Suspendisse eu
                  augue urna. Morbi sagittis orci sodales
                </p>
                <a className="btn btn-custom" href="abc.html">
                  Explore More
                </a>
              </div>
            </div>
            <div className="carousel-item">
            <img src="assets/img/carousel-3.jpg" alt="carouselimg" />

              <div className="carousel-text">
                <h3>Washing & Detailing</h3>
                <h1>Exterior & Interior Washing</h1>
                <p>
                  Sed ultrices, est eget feugiat accumsan, dui nibh egestas
                  tortor, ut rhoncus nibh ligula euismod quam
                </p>
                <a className="btn btn-custom" href="abc.html">
                  Explore More
                </a>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
      </div>
    )
  }
}

export default Carouselbanner
