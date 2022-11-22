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

const WebDesignDevelopment = () => {
  return (
    <div>
      <Helmet>
        <title>Purpose | Web Design & Development</title>
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
                    <p className="fz-16">
                      Vancouver’s latest technology partner
                    </p>
                    <h1 className="large-heading">Web design & development</h1>
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "2.5rem" }}
                    ></div>
                    <p className="fz-18 text-center">
                      At Purpose Works, we are not satisfied until you are. Your website is the gateway to your success,
                      it is not just ‘a project’ for us, it is an opportunity for us to build an ongoing relationship with you to take your business to the next level.
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
                    <p className="fz-18">
                      Encouraging the use of natural systems and processes in
                      design allows for exposure to nature, and in turn, these
                      design approaches improve health and wellbeing. There are
                      a number of possible benefits, including reduced heart
                      rate variability and pulse rates, decreased blood
                      pressure, and increased activity in our nervous systems,
                      to name a few.
                    </p>
                  </div>
                  <div
                    className="ptf-spacer"
                    style={{ "--ptf-xxl": "4.375rem" }}
                  ></div>
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="0"
                  >
                    <h3>Specialization</h3>
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
                  <div
                    className="ptf-spacer"
                    style={{ "--ptf-xxl": "6.875rem" }}
                  ></div>
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="0"
                  >
                    <h3>Our Skills</h3>
                  </div>
                  <div
                    className="ptf-spacer"
                    style={{ "--ptf-xxl": "3.75rem" }}
                  ></div>
                  <div className="ptf-skill-box-grid">
                    <Skills />
                  </div>
                  <div
                    className="ptf-spacer"
                    style={{ "--ptf-xxl": "6.875rem" }}
                  ></div>
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="0"
                  >
                    <h3>Our Approach</h3>
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
                    style={{ "--ptf-xxl": "5.625rem" }}
                  ></div>
                  <Approach2 />
                </div>
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
                    <h2 className="h5 d-inline-flex">Related Articles</h2>
                    <a
                      className="ptf-link-with-arrow fz-14 d-none d-lg-inline-flex"
                      href="blog-grid.html"
                      style={{ marginLeft: "3.125rem" }}
                    >
                      All Blog Posts <i className="lnil lnil-chevron-right"></i>
                    </a>
                  </div>
                  <div
                    className="ptf-spacer"
                    style={{ "--ptf-xxl": "5.625rem", "--ptf-md": "2.8125rem" }}
                  ></div>
                </div>
                <div className="container">
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="0"
                  >
                    <div
                      className="row ptf-isotope-grid"
                      style={{
                        "--bs-gutter-x": "4.75rem",
                        "--bs-gutter-y": "4.75rem",
                      }}
                    >
                      <Blog />
                    </div>
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

export default WebDesignDevelopment
