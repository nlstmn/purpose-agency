import React from "react"
import { Link } from "react-router-dom"

const approachContent = [
  {
    subTitle: "ONE",
    title: "Web Development",
    descriptions: `We design pages that speak brand with your visitors. Armed with the latest technologies, our front and back-end development teams bring your designs to life.`,
    delayAnimation: "0",
  },

  {
    subTitle: "TWO",
    title: "Digital Marketing",
    descriptions: `We create and execute omnichannel digital marketing strategies. From SEO and social media to paid campaigns, we work with you to capture leads through a reliable marketing strategy.`,
    delayAnimation: "100",
  },
  {
    subTitle: "THREE",
    title: "Strategy & Design for Nonprofits",
    descriptions: `Our Creative Director is still the CEO of an International Development organization - Finally, someone that understands the pain of organizations and speaks your own language.`,
    delayAnimation: "200",
  },
  {
    subTitle: "FOUR",
    title: "Support + Hosting",
    descriptions: `Your website is open 24 hours a day, it should never be offline or outdated. We offer support and hosting services for your site at our Canadian servers, keeping your customer data safe and secure.`,
    delayAnimation: "300",
  }
]

const Approach = () => {
  return (
    <div
      className="row"
      style={{
        "--bs-gutter-x": "3.75rem",
        "--bs-gutter-y": "7.5rem",
      }}
    >
      {approachContent.map((val, i) => (
        <div className="col-xl-6 col-lg-6 service-single" key={i}>
          <div
            className="ptf-animated-block"
            data-aos="fade"
            data-aos-delay={val.delayAnimation}
          >
            <div
              className="ptf-approach-box"
              style={{
                "--ptf-title-color": "var(--ptf-color-white)",
              }}
            >
              <h3 className="ptf-approach-box__title h1">{val.title}</h3>
              <div className="ptf-approach-box__content">
                <p>{val.descriptions}</p>
              </div>
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "2.5rem", "--ptf-md": "2.5rem" }}
              ></div>
              <Link className="ptf-view-more-link" to="/blog-details">
                View more
              </Link>
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "5rem", "--ptf-md": "2.5rem" }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Approach
