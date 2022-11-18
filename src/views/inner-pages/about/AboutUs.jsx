import React from "react"
import { Helmet } from "react-helmet"
import Brand from "../../../components/brand/Brand"
import SocialImprint from "../../../components/SocialImprint"
import HeaderStudio from "../../../components/header/HeaderStudio"
import FooterThreeDark from "../../../components/footer/FooterThreeDark"
import { Link } from "react-router-dom"

const AboutUs = () => {
  return (
    <div className="ptf-site-wrapper animsition  ptf-is--about-us">
      <Helmet>
        <title>Purpose | About Us</title>
      </Helmet>
      <div className="ptf-site-wrapper__inner">
        <HeaderStudio />
        <div className="ptf-main">
          <div className="ptf-page ptf-page--about-us">
            <section>
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
              ></div>
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h2 className="about-passion">
                        Passion combined with experience
                      </h2>
                    </div>
                    <div
                      className="ptf-spacer"
                      style={{
                        "--ptf-xxl": "4.375rem",
                        "--ptf-md": "2.1875rem",
                      }}
                    ></div>
                    <div className="row">
                      <div className="col-xl-8">
                        <div style={{ maxWidth: "29.6875rem" }}>
                          <div
                            className="ptf-animated-block"
                            data-aos="fade"
                            data-aos-delay="200"
                          >
                            <div className="ptf-divider"></div>
                            <div
                              className="ptf-spacer"
                              style={{
                                "--ptf-xxl": "4.375rem",
                                "--ptf-md": "2.1875rem",
                              }}
                            ></div>
                            <p className="fz-24">
                              Purpose Works exists to help brands realize their full potential and leverage from all the technology available.
                              We make your ideas into reality with our team of experts across the globe.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xl": "5.625rem" }}
                    ></div>
                    <div>
                      <div className="text-center">
                        <div className="ptf-mask-image">
                          <img
                            src="assets/img/root/about-us/about-us-main-image-mask.png"
                            alt="layer"
                            loading="lazy"
                            className="lay2"
                            style={{
                              zIndex: "1",
                            }}
                            srcSet="assets/img/about-us-main-image.jpg"
                          />
                          <img
                            src="assets/img/root/about-us/about-us-main-image-layer-1.png"
                            alt="layer"
                            loading="lazy"
                            style={{ zIndex: "2" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
            </section>
            <section>
              <div className="container-xxl">
                <div className="ptf-divider"></div>
              </div>
            </section>
            {/* MEET THE TEAM */}
            <section>
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "5rem" }}
              ></div>
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h2 className="h1 large-heading font-800">Meet The Team</h2>
                    </div>
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "2.5rem", "--ptf-md": "3.75rem" }}
                    ></div>
                  </div>
                </div>
                <div className="container text-center">
                  <div className="ptf-work__category font-s-24">
                    We are based out of Vancouver, and our team includes designers and developers from around the world, allowing us to bridge the gap between languages and cultural influences.
                    We strive for a diverse, inclusive and supportive team of proactive creators and strategic thinkers, working together to deliver the best.
                  </div>
                  <div
                    className="ptf-spacer"
                    style={{ "--ptf-xxl": "2.5rem", "--ptf-md": "3.75rem" }}
                  ></div>
                </div>
                <Brand />
                <div className="row">
                  <div className="col-12">
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "8.75rem", "--ptf-md": "4.375rem" }}
                    ></div>
                    <div className="ptf-divider"></div>
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
                    ></div>
                  </div>
                </div>
              </div>
            </section>
            {/* SOCIAL IMPRINT */}
            <section>
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "2.5rem", "--ptf-md": "3.75rem" }}
              ></div>
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h2 className="h1 large-heading font-800">Our Social Imprint</h2>
                    </div>
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "2.5rem", "--ptf-md": "3.75rem" }}
                    ></div>
                  </div>
                </div>
                <div className="container text-center">
                  <div className="ptf-work__category font-s-24">
                    Our team strongly believes in giving back to the community.
                    Purpose Works invests 10% of all profits back into communities across South Asia.
                    These funds are spent on training rural girls and children on the basics of computer literacy.
                    We hope to build a chain system where these young children are then given a chance to upskill
                    themselves and work with us, breaking the cycle of poverty.
                  </div>
                  <div
                    className="ptf-spacer"
                    style={{ "--ptf-xxl": "2.5rem", "--ptf-md": "3.75rem" }}
                  ></div>
                </div>
                <SocialImprint />
              </div>
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
            </section>
            {/* PROJECT FOR US */}
            <section className="jarallax jarallax-img jarallax-about-us">
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
              <div className="container text-center">
                <div className="d-inline-flex text-start" style={{ alignItems: "end" }}>
                  <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
                    <div className="about-passion font-800 has-accent-1">Have a project for us?</div>
                    <div className="ptf-spacer" style={{ "--ptf-xxl": "0.625rem" }}></div>
                    <div className="font-s-24 fw-bold lh-1p1">
                      We help businesses<br />succeed in the digital age.
                    </div>
                  </div>
                  <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
                    <Link
                      className="ptf-btn ptf-btn--secondary navbar-header-studio-main-btn"
                      to="/service"
                    >
                      Get in Touch
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
    </div>
  )
}

export default AboutUs
