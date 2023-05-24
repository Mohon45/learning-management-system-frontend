import React from "react";
import playstore from "../../Assets/img/playstore.png";
import appstore from "../../Assets/img/appstore.png";
import logo from "../../Assets/img/E-tutors-log.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container py-4">
        <div className="row ">
          <div className="col-md-4">
            <div className="app-img">
              <img
                className="text-center"
                style={{ height: "70px" }}
                src={logo}
                alt=""
              />
              <h4>Download our mobile app</h4>
              <div className="d-flex footer-app-img">
                <img src={playstore} alt="" />
                <img className="ms-2" src={appstore} alt="" />
              </div>
            </div>
          </div>

          <div className="col-md-4 d-flex justify-content-around">
            <div className="company-quck-link">
              <h3 className="fw-bold">Company</h3>
              <div className="mt-3">
                <p className="quick-link-item">
                  <span>
                    <i className="fa-solid fa-angles-right"></i>
                  </span>{" "}
                  <a href="/home">Career</a>
                </p>
                <p className="quick-link-item">
                  <span>
                    <i className="fa-solid fa-angles-right"></i>
                  </span>{" "}
                  <a href="/home">privacy policy</a>
                </p>
                <p className="quick-link-item">
                  <span>
                    <i className="fa-solid fa-angles-right"></i>
                  </span>{" "}
                  <a href="/home">refund policy</a>
                </p>
                <p className="quick-link-item">
                  <span>
                    <i className="fa-solid fa-angles-right"></i>
                  </span>{" "}
                  <a href="/home">Affiliate</a>
                </p>
              </div>
            </div>

            <div className="company-quck-link">
              <h3 className="fw-bold">Quick Link</h3>
              <div className="mt-3">
                <p className="quick-link-item">
                  <span>
                    <i className="fa-solid fa-angles-right"></i>
                  </span>{" "}
                  <a href="/find-teachers/level">Online Tutors</a>
                </p>
                <p className="quick-link-item">
                  <span>
                    <i className="fa-solid fa-angles-right"></i>
                  </span>{" "}
                  <a href="/online-test/level">Online Test preparation</a>
                </p>
                <p className="quick-link-item">
                  <span>
                    <i className="fa-solid fa-angles-right"></i>
                  </span>{" "}
                  <a href="/notes">Notes</a>
                </p>
                <p className="quick-link-item">
                  <span>
                    <i className="fa-solid fa-angles-right"></i>
                  </span>{" "}
                  <a href="/worksheet">Free Worksheets</a>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 text-center">
            <div className="footer-contect">
              <h3 className="fw-bold">Contact us</h3>
              <div className="mt-3">
                <p>
                  <span>
                    <i className="fa-solid fa-phone"></i>
                  </span>{" "}
                  &nbsp; 01700000000
                </p>
                <p>
                  <span>
                    <i className="fa-regular fa-envelope"></i>
                  </span>{" "}
                  &nbsp; support@etutors.com
                </p>
                <div className="footer-social-icon">
                  <a href="/home">
                    <i className="fa-brands fa-square-facebook fa-2x"></i>
                  </a>
                  <a className="ms-4" href="/home">
                    <i className="fa-brands fa-square-youtube fa-2x"></i>
                  </a>
                  <a className="ms-4" href="/home">
                    <i className="fa-brands fa-square-instagram fa-2x"></i>
                  </a>
                  <a className="ms-4" href="/home">
                    <i className="fa-brands fa-linkedin fa-2x"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
