import React from "react"
import CountUp from "react-countup"
import VisibilitySensor from "react-visibility-sensor"

const counterUpContent = [
  {
    startCount: "0",
    endCount: "95",
    metaText1: "WEB DEVELOPMENT",
    desc: "Responsive Websites",
    desc1: "User Experience Design",
    desc2: "Copywriting",
    desc3: "Google Analytics",
    desc4: "Online Stores",
    desc5: "CRM",
    animationDelay: "0",
  },
  {
    startCount: "0",
    endCount: "98",
    metaText1: "DIGITAL MARKETING",
    desc: "Google Ad Grants application & Management",
    desc1: "SEO for Nonprofits",
    desc2: "Google Analytics",
    desc3: "Google Ads",
    desc4: "Email Campaigns",
    desc5: "",
    animationDelay: "100",
  },
  {
    startCount: "0",
    endCount: "90",
    desc: "Logo Creation",
    desc1: "Naming & Taglines",
    desc2: "Infographics",
    desc3: "PowerPoint Presentations",
    desc4: "Welcome Packages",
    desc5: "Impact & Annual Reports",
    metaText1: "BRAND & STRATEGY",
    animationDelay: "200",
  }
]

const CounterFive = () => {
  const [focus, setFocus] = React.useState(false)
  return (
    <>
      {counterUpContent.map((val, i) => (
        <div className="col-12 col-sm-6 col-md-4" key={i}>
          <div
            className="ptf-animated-block"
            data-aos="fade"
            data-aos-delay={val.animationDelay}
          >
            <div
              className="ptf-counter-up--style-3"
              style={{
                "--ptf-title-color": "var(--ptf-color-black)",
              }}
            >
              <h3 className="ptf-counter-up__title font-s-24">
                {val.metaText1}
              </h3>
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "2.5rem" }}
              ></div>
              <h5 className="ptf-counter-up__title">
                {val.desc}<br/>
                {val.desc1}<br/>
                {val.desc2}<br/>
                {val.desc3}<br/>
                {val.desc4}<br/>
                {val.desc5}<br/>
              </h5>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default CounterFive
