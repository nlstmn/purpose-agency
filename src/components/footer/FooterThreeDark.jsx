import React from "react"
import FooterList from "../list/FooterList"
import SocialTwo from "../social/SocialTwo"

const FooterThreeDark = () => {
  return (
    <div className="row">
      <div className="col-12 col-lg">
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="200"
        >
          <div className="ptf-widget ptf-widget-text">
            <a className="fz-36 has-white-color" href="mailto:hello@moonex.co">
              Vancouver
            </a>
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "0.625rem" }}
            ></div>
            <p className="fz-18 has-3-color">
              8381 128 Street<br />Unit 201C<br />Surrey, BC V3W4N9<br /><br />
              Web design and website development in Vancouver<br />
              Purpose Works has been operational since 2018<br />
              © Purpose Works, Vancouver Web Design company. All rights reserved.
              Crafted with ❤️ in Vancouver, Turkey, Bulgaria
            </p>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg">
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="200"
        >
          <div className="ptf-widget ptf-widget-text">
            <p className="fz-18 has-3-color">
              Creating future-proof web experiences built for success.
            </p>
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "0.625rem" }}
            ></div>
            <a className="fz-36 has-white-color" href="mailto:hello@moonex.co">
              hello@purposeworks.ca
            </a>
          </div>
        </div>
        <div
          className="ptf-spacer"
          style={{ "--ptf-xxl": "2.1875rem" }}
        ></div>
        <div className="ptf-footer-socials has-white-color">
          <SocialTwo />
        </div>
      </div>
    </div>
  )
}

export default FooterThreeDark
