import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="container " id="footer">
      <footer className="text-center text-white footer">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block fw-bold">
            <span className="fs-5">
              Get connected with us on social networks:
            </span>
          </div>

          <div>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-google"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5 footer-end">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto ">
                <h1 className="brand-name">Safar</h1>
                <p>
                Embark on unforgettable journeys with Safar – where every adventure begins.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Trips
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Packages
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Sponsorship
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3"></i> Hughes Systique Corporation
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  info@safar.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> + 91 7007695278
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-3 copyright" >
          © 2024 Copyright:
          <a className="text-white ms-1 fw-bold" href="https://mdbootstrap.com/">
             safar.com
          </a>
        </div>
      </footer>
    </div>
  );
}
