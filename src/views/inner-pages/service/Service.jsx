import React from "react"
import { Helmet } from "react-helmet"
import HeaderStudio from "../../../components/header/HeaderStudio"
import Approach from "../../..//components/service/Approach"
import FooterThreeDark from "../../../components/footer/FooterThreeDark"
import { Link } from "react-router-dom"

const Service = () => {
  return (
    <div>
      <Helmet>
        <title>Purpose | Services</title>
      </Helmet>
      <HeaderStudio />
      <div className="ptf-main">
        <div className="ptf-page ptf-page--services">
          <section>
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
            ></div>
            <div className="container">
              <div className="row">
                <div className="col-xl-9">
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="0"
                  >
                    <h1 className="large-heading">Our Services</h1>
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "2.5rem" }}
                    ></div>
                    <p className="fz-18">
                      We offer a full range of digital services to help businesses like yours generate more profits by building sites that look great, excel in SEO and drive customer engagement.
                    </p>
                  </div>
                  <div
                    className="ptf-spacer"
                    style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
                  ></div>
                </div>
                <h1 className="ptf-single-post__excerpt text-center">
                  We work harder, faster and smarter.
                </h1>
              </div>
            </div>
          </section>
          <section>
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
            ></div>
            <div className="container">
              <div
                className="ptf-animated-block"
                data-aos="fade"
                data-aos-delay="0"
              >
                <h2 className="h1 large-heading">Our Services</h2>
              </div>
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "7.5rem", "--ptf-md": " 3.75rem" }}
              ></div>
              <Approach />
            </div>
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
            ></div>
          </section>
          <section>
            <div className="container">
              <div className="row">
                <div className="col-xl-9">
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="0"
                  >
                    <h1 className="large-heading">Our Social Imprint</h1>
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "2.5rem" }}
                    ></div>
                    <p className="fz-18">
                      Purpose Works is a creative agency that donates ten percentage of our profits to a rural digital literacy program in India
                    </p>
                  </div>
                  <div
                    className="ptf-spacer"
                    style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
                  ></div>
                </div>
              </div>
            </div>
          </section>
          <section className="jarallax jarallax-img jarallax-services">
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
            ></div>
            <div className="container text-center">
              <div className="flex-column text-center">
                <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
                  <div className="ptf-spacer" style={{ "--ptf-xxl": "0.625rem" }}></div>
                  <div className="font-s-24 fw-bold lh-1p1">
                    Got a project in mind?
                  </div>
                </div>
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "2.5rem", "--ptf-md": "5rem" }}
                ></div>
                <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
                  <Link
                    className="ptf-btn ptf-btn--secondary navbar-header-studio-main-btn services-main-btn"
                    to="/service"
                  >
                    <h1 className="large-heading">Get in Touch</h1>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
            ></div>
          </section>
        </div>
      </div>
      <footer className="ptf-footer ptf-footer--style-5">
        <div className="container">
          <div className="ptf-footer__top">
            <FooterThreeDark />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Service
