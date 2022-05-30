import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <div>
              <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-contact">
                <h2>Get In Touch</h2>
                <p>
                  <i className="fa fa-map-marker-alt"></i>123 Street, New York,
                  USA
                </p>
                <p>
                  <i className="fa fa-phone-alt"></i>+012 345 67890
                </p>
                <p>
                  <i className="fa fa-envelope"></i>info@example.com
                </p>
                <div className="footer-social">
                  <a className="btn" href="abc.html">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn" href="abc.html">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn" href="abc.html">
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a className="btn" href="abc.html">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a className="btn" href="abc.html">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-link">
                <h2>Popular Links</h2>
                <a href="abc.html">About Us</a>
                <a href="abc.html">Contact Us</a>
                <a href="abc.html">Our Service</a>
                <a href="abc.html">Service Points</a>
                <a href="abc.html">Pricing Plan</a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-link">
                <h2>Useful Links</h2>
                <a href="abc.html">Terms of use</a>
                <a href="abc.html">Privacy policy</a>
                <a href="abc.html">Cookies</a>
                <a href="abc.html">Help</a>
                <a href="abc.html">FQAs</a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-newsletter">
                <h2>Newsletter</h2>
                <form>
                  <input className="form-control" placeholder="Full Name" />
                  <input className="form-control" placeholder="Email" />
                  <button className="btn btn-custom">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="container copyright">
          <p>
            &copy; <a href="abc.html">Your Site Name</a>, All Right Reserved.
            Designed By <a href="https://htmlcodex.com">HTML Codex</a>
          </p>
        </div>
      </div>
      </div>
    )
  }
}

export default Footer
