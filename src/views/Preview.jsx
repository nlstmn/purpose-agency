import React from "react"
import { Helmet } from "react-helmet"
import HeaderPreview from "../components/header/HeaderPreview"
import BlogDemo from "../components/preview/BlogDemo"
import MainDemo from "../components/preview/MainDemo"
import PortfolioDemo from "../components/preview/PortfolioDemo"
import OthersPages from "../components/preview/OthersPages"
import Blog from "../components/blog/Blog"
import FooterThree from "../components/footer/FooterThree"
import CopyRightThree from "../components/footer/copyright/CopyRightThree"
import ContactJarallax from "../components/jarallax/ContactJarallax"
import CounterTwo from "../components/counter/CounterTwo"
import PortfolioTwo from "../components/portfolio/PortfolioTwo"
import HeaderStudio from "../components/header/HeaderStudio"
import ServiceList from "../components/list/ServiceList"
import FooterThreeDark from "../components/footer/FooterThreeDark"
import CopyRightThreeDark from "../components/footer/copyright/CopyRightThreeDark"
import { Link } from "react-router-dom"

const Preview = () => {
  return (
    <div className="ptf-site-wrapper animsition ptf-is--home-studio">
      <Helmet>
        <title>Purpose | Home</title>
      </Helmet>
      <HeaderStudio />
      <div className="ptf-site-wrapper__inner">
        <div className="ptf-main">
          <div className="ptf-page ptf-page--home-studio">
            <section>
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "3.125rem", "--ptf-md": "1.5625rem" }}
              ></div>
              <div className="container">
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <ul
                    className="ptf-services-list ptf-services-list--style-3"
                    style={{
                      "--ptf-font-family": "var(--ptf-primary-font)",
                      maxWidth: "43.75rem",
                    }}
                  >
                    <ServiceList />
                  </ul>
                </div>
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "5.625rem", "--ptf-md": "2.8125rem" }}
                ></div>
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="100"
                >
                  <h1 className="fz-120 fz-90--lg fz-60--md lh-1p1 main-home-title">
                    Digital Solutions for <br />
                    Your Business
                  </h1>
                </div>
                <div className="row">
                  <div className="col-xl-8">
                    <div style={{ maxWidth: "29.6875rem" }}>
                      <div
                        className="ptf-animated-block"
                        data-aos="fade"
                        data-aos-delay="200"
                      >
                        <div
                          className="ptf-spacer"
                          style={{
                            "--ptf-xxl": "4.375rem",
                            "--ptf-md": "2.1875rem",
                          }}
                        ></div>
                        <p className="fz-24">
                          Purpose Works is creative agency based out of Vancouver, Canada.
                          We provide high-performing websites that deliver on design, user experience and engagement!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <a className="ptf-btn ptf-btn--primary" href="" target="_self">
                    Get Started
                  </a>
                  <Link
                    className="ptf-btn ptf-btn--secondary"
                    to="/service"
                    style={{ marginLeft: "2rem" }}
                  >
                    Our Services
                  </Link>
                </div>
              </div>
            </section>
            {/* CALL US SECTION */}
            <section>
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "3.75rem" }}
              ></div>
              <div className="container">
                <div
                  className="row align-items-center"
                  style={{ "--bs-gutter-y": "2rem" }}
                >
                  <div className="col-12 col-xl-6">
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <div className="ptf-phone-block">
                        <div className="ptf-phone-block__icon">
                          <i className="lnil lnil-phone"></i>
                        </div>
                        <div className="ptf-phone-block__caption">
                          Call Us
                          <br />
                          Directly
                        </div>
                        <div className="ptf-phone-block__phone">
                          <a href="tel:+3796354868">(+37) 96 3548 68</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CounterTwo />
                </div>
              </div>
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "3.75rem" }}
              ></div>
            </section>
            <section>
              <div className="container">
                <div className="ptf-divider"></div>
              </div>
            </section>
            {/* CREATIVE DESIGN SECTION */}
            <section>
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "8.125rem", "--ptf-md": "4.0625rem" }}
              ></div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-7">
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h2 className="h1 large-heading has-accent-1">
                        Creative Design & Advertising
                      </h2>
                    </div>
                  </div>
                  <div className="col-xl-5 d-none d-xl-block">
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="100"
                    >
                      <div className="has-black-color fz-90 lh-1 text-end">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          style={{ height: "1em" }}
                          viewBox="0 0 17 17"
                        >
                          <path d="M16 .997V10h-1V2.703L4.683 13l-.707-.708L14.291 1.997H6.975v-1H16z" />
                        </svg>
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
            <section>
              <div className="container">
                <div className="ptf-divider"></div>
              </div>
            </section>
            {/* LATEST WORKS SECTION */}
            <section>
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "8.125rem", "--ptf-md": "4.0625rem" }}
              ></div>
              <div className="container">
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <h2 className="h1 large-heading has-accent-1 d-inline-flex">
                    Latest Works
                  </h2>
                  <a
                    className="ptf-link-with-arrow fz-18 text-uppercase d-none d-lg-inline-flex"
                    href="portfolio-grid.html"
                    style={{ marginLeft: "5.625rem" }}
                  >
                    All Projects{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      style={{ height: "1em" }}
                      viewBox="0 0 17 17"
                    >
                      <path d="M16 .997V10h-1V2.703L4.683 13l-.707-.708L14.291 1.997H6.975v-1H16z" />
                    </svg>
                  </a>
                </div>
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "6.25rem" }}
                ></div>
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <div className="ptf-isotope-grid">
                    <PortfolioTwo />
                  </div>
                </div>
              </div>
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
            </section>
            {/*<section>
              <div className="container-xxl">
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "8.125rem", "--ptf-md": "4.0625rem" }}
                ></div>
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <h2 className="h5 d-inline-flex">Latest Work</h2>
                  <Link
                    className="ptf-link-with-arrow fz-14 d-none d-lg-inline-flex"
                    to="/works-grid"
                    style={{ marginLeft: "3.125rem" }}
                  >
                    All Projects <i className="lnil lnil-chevron-right"></i>
                  </Link>
                </div>
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "5.625rem", "--ptf-md": "2.8125rem" }}
                ></div>
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <div
                    className="ptf-isotope-grid row"
                    style={{
                      "--bs-gutter-x": "4.75rem",
                      "--bs-gutter-y": "4.75rem",
                    }}
                  >
                    <PortfolioThree />
                  </div>
                </div>
              </div>
            </section>
            <section className="ptf-custom--1562">
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
              <div className="container-xxl">
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <h2 className="h5">Moonex’s Awards</h2>
                </div>
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "5.625rem", "--ptf-md": "2.8125rem" }}
                ></div>
              </div>
              <div className="container-xxl">
                <Award />
              </div>
            </section>*/}
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
                  <h2 className="h5 d-inline-flex">The World of Moonex</h2>
                  <a
                    className="ptf-link-with-arrow fz-14 d-none d-lg-inline-flex"
                    href="blog-grid.html"
                    style={{ marginLeft: "3.125rem" }}
                  >
                    All Articles <i className="lnil lnil-chevron-right"></i>
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
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
            </section>
            <section
              className="jarallax jarallax-img"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL +
                  "assets/img/services-call-to-action-background.png"
                  })`,
              }}
            >
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": " 12.5rem", "--ptf-md": "6.25rem" }}
              ></div>
              <ContactJarallax />
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
            </section>
          </div>
        </div>
      </div>
      <footer className="ptf-footer ptf-footer--style-5">
        <div className="container">
          <div className="ptf-footer__top">
            <FooterThreeDark />
          </div>
          <div className="ptf-footer__bottom">
            <CopyRightThreeDark />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Preview
