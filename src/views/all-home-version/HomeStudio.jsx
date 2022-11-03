import React from "react"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet"
import HeaderStudio from "../../components/header/HeaderStudio"
import ServiceList from "../../components/list/ServiceList"
import PortfolioThree from "../../components/portfolio/PortfolioThree"
import Award from "../../components/award/Award"
import Blog from "../../components/blog/Blog"
import FooterThree from "../../components/footer/FooterThree"
import CopyRightThree from "../../components/footer/copyright/CopyRightThree"
import ContactJarallax from "../../components/jarallax/ContactJarallax"

const HomeStudio = () => {
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
              <div className="container-xxl">
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
                  <h1 className="fz-120 fz-90--lg fz-60--md lh-1p1">
                    Digital Solutions for <br />
                    Your Business
                  </h1>
                </div>
              </div>
            </section>
            <section>
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
            </section>
            <section>
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
              <div className="container-xxl">
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
      <footer className="ptf-footer ptf-footer--style-2">
        <div className="container-xxl">
          <div className="ptf-footer__top">
            <FooterThree />
          </div>
          <div className="ptf-footer__bottom">
            <CopyRightThree />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomeStudio
