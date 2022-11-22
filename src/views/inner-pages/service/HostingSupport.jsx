import React from "react"
import { Helmet } from "react-helmet"
import HeaderStudio from "../../../components/header/HeaderStudio"
import CopyRight from "../../../components/footer/copyright/CopyRight"
import FooterThreeDark from "../../../components/footer/FooterThreeDark"
import ServiceListThree from "../../../components/list/ServiceListThree"
import Faq from "../../../components/faq/Faq"
import Skills from "../../../components/skill/Skills"
import Approach2 from "../../../components/service/Approach2"
import CounterThree from "../../../components/counter/CounterThree"
import ImageGridFour from "../../../components/image-grid/ImageGridFour"
import Blog from "../../../components/blog/Blog"
import { Link } from "react-router-dom"

const HostingSupport = () => {
  return (
    <div>
      <Helmet>
        <title>Purpose | Hosting + Support</title>
      </Helmet>
      <HeaderStudio />
      <div className="ptf-main">
        <div className="ptf-page ptf-page--service-detail">
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
                    <h1 className="large-heading">Support + Hosting</h1>
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "2.5rem" }}
                    ></div>
                    <p className="fz-18 text-center">
                      We handle backups, malware, virus scanning, SSL Certificates, and much more. We also provide web hosting that offers your visitors a fast-loading website - slow websites kill a business. We will monitor and as your web traffic increases, we can increase capacity with the click of a button eliminating any business interruption. Slow speed negatively affects your site’s search engine rankings.
                    </p>
                  </div>
                  <div
                    className="ptf-spacer"
                    style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
                  ></div>
                </div>
                <div className="col-lg-12">
                  <ImageGridFour />
                </div>
              </div>
            </div>
          </section>
          <section>
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "5.625rem", "--ptf-md": "2.8125rem" }}
            ></div>
            <div className="container">
              <div className="row">
                <div className="col-xl-8">
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="0"
                  >
                    <h3>Monthly Service Plans:</h3>
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "1.875rem" }}
                    ></div>
                    <p className="fz-18">
                      Encouraging the use of natural systems and processes in
                      design allows for exposure to nature, and in turn, these
                      design approaches improve health and wellbeing.
                    </p>
                  </div>
                  <div
                    className="ptf-spacer"
                    style={{ "--ptf-xxl": "3.125rem" }}
                  ></div>
                  <div
                    className="row"
                    style={{
                      "--bs-gutter-x": "3.75rem",
                      "--bs-gutter-y": "7.5rem",
                    }}
                  >
                    <CounterThree />
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="ptf-sidebar ptf-sidebar--right">
                    <div className="ptf-widget ptf-widget-services-list">
                      <div
                        className="ptf-animated-block"
                        data-aos="fade"
                        data-aos-delay="0"
                      >
                        <h4 className="ptf-widget-title">Services List</h4>
                        <ServiceListThree />
                      </div>
                    </div>
                    <div className="ptf-widget ptf-widget-faq">
                      <div
                        className="ptf-animated-block"
                        data-aos="fade"
                        data-aos-delay="0"
                      >
                        <h4 className="ptf-widget-title">FAQs</h4>
                        <Faq />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
            ></div>
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
                    Let’s set you up with a robust monthly package that works for you!
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

export default HostingSupport
