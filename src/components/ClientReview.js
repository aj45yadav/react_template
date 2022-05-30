import React, { Component } from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export class ClientReview extends Component {
  render() {
    return (
      <div>
         <div className="testimonial">
        <div className="container">
          <div className="section-header text-center">
            <p>Testimonial</p>
            <h2>What our clients say</h2>
          </div>
          <div className="testimonials-carousel">
          <Carousel>
            <div className="testimonial-item">
              <img src="assets/img/testimonial-1.jpg" alt="altImage" />
              <div className="testimonial-text">
                <h3>Client Name</h3>
                <h4>Profession</h4>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasel preti mi facilis
                  ornare velit non vulputa. Aliqu metus tortor auctor gravid
                </p>
              </div>
            </div>
            <div className="testimonial-item">
              <img src="assets/img/testimonial-2.jpg" alt="altImage" />
              <div className="testimonial-text">
                <h3>Client Name</h3>
                <h4>Profession</h4>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasel preti mi facilis
                  ornare velit non vulputa. Aliqu metus tortor auctor gravid
                </p>
              </div>
            </div>
            <div className="testimonial-item">
              <img src="assets/img/testimonial-3.jpg" alt="altImage" />
              <div className="testimonial-text">
                <h3>Client Name</h3>
                <h4>Profession</h4>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasel preti mi facilis
                  ornare velit non vulputa. Aliqu metus tortor auctor gravid
                </p>
              </div>
            </div>
            <div className="testimonial-item">
              <img src="assets/img/testimonial-4.jpg" alt="altImage" />
              <div className="testimonial-text">
                <h3>Client Name</h3>
                <h4>Profession</h4>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasel preti mi facilis
                  ornare velit non vulputa. Aliqu metus tortor auctor gravid
                </p>
              </div>
            </div>
            </Carousel>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default ClientReview
