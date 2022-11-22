import React from "react"
import { Helmet } from "react-helmet"
import HeaderStudio from "../../../components/header/HeaderStudio"
import CopyRight from "../../../components/footer/copyright/CopyRight"
import FooterThreeDark from "../../../components/footer/FooterThreeDark"
import ServiceListThree from "../../../components/list/ServiceListThree"
import Faq from "../../../components/faq/Faq"
import Skills from "../../../components/skill/Skills"
import Approach3 from "../../../components/service/Approach3"
import CounterFive from "../../../components/counter/CounterFive"
import ImageGridFour from "../../../components/image-grid/ImageGridFour"
import Blog from "../../../components/blog/Blog"
import { Link } from "react-router-dom"

const StrategyDesign = () => {
  return (
    <div>
      <Helmet>
        <title>Purpose | Strategy & Design for Nonprofits</title>
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
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <h2 className="large-heading">We help nonprofits explain why they matter</h2>
                  <div
                    className="ptf-spacer"
                    style={{ "--ptf-xxl": "2.5rem" }}
                  ></div>
                  <h1 className="font-800">
                    Building capacity for organizations with a greater purpose.
                  </h1>
                </div>
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
                ></div>
                <div className="col-lg-12">
                  <ImageGridFour />
                </div>
              </div>
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "5.625rem", "--ptf-md": "2.8125rem" }}
              ></div>
              <Link
                className="ptf-btn ptf-btn--secondary navbar-service-btn"
                to="/service"
              >
                Talk with our Expert (CTA)
              </Link>
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "2.5rem", "--ptf-md": "2.8125rem" }}
              ></div>
              <p className="fz-18">
                Web Design | Software Advice and Implementation | Safe Canadian Web Hosting
              </p>
            </div>
          </section>
          <section>
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "5.625rem", "--ptf-md": "2.8125rem" }}
            ></div>
            <div className="container">
              <div className="row">
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <h3>NONPROFIT SPECIFIC SERVICES</h3>
                  <div
                    className="ptf-spacer"
                    style={{ "--ptf-xxl": "1.875rem" }}
                  ></div>
                  <p className="fz-18">
                    Purpose Works specializes in charity web design, building wonderful websites, crafting a strategy for success through multiple digital products for organizations of every size and budget.
                    Our approach is unique and unparalleled, we dig deep to understand organization culture, audiences & strengths; then craft an integrated, inspiring & purpose-driven website integrated with all of the necessary technologies that your nonprofit needs.
                  </p>
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
                  <p className="fz-16">
                    WE AMPLIFY YOUR MISSION
                  </p>
                  <h1>Specialists in charity web design</h1>
                  <div
                    className="ptf-spacer"
                    style={{ "--ptf-xxl": "1.875rem" }}
                  ></div>
                  <p className="fz-18">
                    Whether you’re looking to build a stronger digital presence, increase your donations, need to create a monthly giving program, or need support with a new donor management system - we are here to help!
                  </p>
                  <p className="fz-18">
                    We will work with you to select the best technologies relevant to your organization. Some of these might include:
                  </p>
                </div>
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "5.625rem" }}
                ></div>
                <Approach3 />
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "5.625rem" }}
                ></div>
                <h2 className="large-heading">NONPROFIT SPECIFIC DIGITAL SERVICES</h2>
                <div
                  className="row"
                  style={{
                    "--bs-gutter-x": "3.75rem",
                    "--bs-gutter-y": "3.5rem",
                  }}
                >
                  <CounterFive />
                </div>
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
                ></div>
                <p className="fz-18">
                  The sky's the limit when it comes to Non-Profit technology - it is sad to not see you thrive in today’s age and availability of technology. The advice that we provide you will come from our Creative Director, who has extensive on-field experience managing his own non-profit organization.
                </p>
                <p className="fz-18">
                  Book a free consultation 20-minute call with our Non-Profit expert.
                </p>
              </div>
              <div
                className="ptf-animated-block"
                data-aos="fade"
                data-aos-delay="0"
              >
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
                ></div>
                <p className="fz-16">
                  WE ARE WITH YOU ALL THE WAY
                </p>
                <h1>We crafted special monthly service packages for charities</h1>
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "1.875rem" }}
                ></div>
                <p className="fz-18">
                  Our support service is there so you can stay focused on your mission. Whether its’ an emergency landing page, website backups, or hosting your website at our Canadian servers. We have several flexible plans to suit your needs.
                </p>
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "2.5rem", "--ptf-md": "3.125rem" }}
                ></div>
                <Link
                  className="ptf-btn ptf-btn--secondary navbar-service-btn"
                  to="/service"
                >
                  Hosting + Service
                </Link>
              </div>
              <div
                className="ptf-animated-block"
                data-aos="fade"
                data-aos-delay="0"
              >
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
                ></div>
                <p className="fz-16">
                  HEAVILY DISCOUNTED NEW NONPROFIT WEB SERVICE
                </p>
                <h1>Are you a new Canadian or US charity? You may qualify for our nonprofit web design grant.</h1>
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "1.875rem" }}
                ></div>
                <p className="fz-18">
                  We want to help you! Purpose Works understands the need to be online for all charities no matter how small. Your cause is just as important as the big organization next door and that is why we want to open the doors for your organization to have a digital presence.
                </p>
                <p className="fz-18">
                  Statistics from CanadaHelps show over 66% of total donations made in Canada go to just 1% of the charities. Your mission needs to be heard or it will get lost in all that online noise.
                </p>
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "2.5rem", "--ptf-md": "3.125rem" }}
                ></div>
                <Link
                  className="ptf-btn ptf-btn--secondary navbar-service-btn"
                  to="/service"
                >
                  Apply For Purpose Works Grant
                </Link>
              </div>
            </div>
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "9.25rem", "--ptf-md": "3.125rem" }}
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

export default StrategyDesign
