import React from "react"
import { Link } from "react-router-dom"

const approachContent = [
  {
    title: "Discovery",
    descriptions: `Every journey starts with our team getting to know your business, your brand and most importantly, you. This understanding serves as one of the foundational elements of our design process.`,
    delayAnimation: "0",
  },
  {
    title: "Strategy",
    descriptions: `We conduct extensive research on your industry, audience, and few competitors to gauge their marketing efforts and construct a tailored strategy and design. At this stage, we start developing a visual sitemap and crafting a wireframe.`,
    delayAnimation: "100",
  },
  {
    title: "Content",
    descriptions: `No matter what functionality or design is being used in a website, it is not going to work without good content! Working collaboratively with your team, we determine what content is necessary and useful for your website and where it should be placed.`,
    delayAnimation: "200",
  },
  {
    title: "Build + Test",
    descriptions: `At this step, we put the wireframes and content into a functional website. We share the working prototype with you before wrapping it up for mobile view along our building process. Most web traffic in the 21st century is coming from mobile and it’s only going to increase - our process also involves a custom mobile experience.`,
    delayAnimation: "300",
  },
  {
    title: "Launch",
    descriptions: `We design the graphics and visual elements needed before we hand over your gateway to success - your new website.`,
    delayAnimation: "300",
  },
  {
    title: "Support + Grow",
    descriptions: ``,
    delayAnimation: "300",
  },
  {
    title: "UX Design",
    descriptions: `We’ll put your users at the heart of all our decisions and craft a design that speaks to them`,
    delayAnimation: "300",
  },
  {
    title: "Responsive Design",
    descriptions: `Designed for all devices no matter what screen size.`,
    delayAnimation: "300",
  },
  {
    title: "Wireframes",
    descriptions: `All projects are crafted with wireframes to visualize the structure, functions and content blocks of a website.`,
    delayAnimation: "300",
  },
  {
    title: "eCommerce",
    descriptions: `Take your products online in a 24/7 storefront through a well designed and easy to use eCommerce website.`,
    delayAnimation: "300",
  },
  {
    title: "Web Design",
    descriptions: `Web designs that engage your target audience and display your brand.`,
    delayAnimation: "300",
  },
  {
    title: "Strategy",
    descriptions: `Extensive research to learn your niche and craft a strategy based on your current pain points.`,
    delayAnimation: "300",
  }
]

const Approach2 = () => {
  return (
    <ul className="ptf-process-steps">
      {approachContent.map((val, i) => (
        <li
          className="ptf-process-item"
          data-aos="fade"
          data-aos-delay={val.delayAnimation}
          key={i}
        >
          <h6 className="ptf-process-item__title">{val.title}</h6>
          <p className="ptf-process-item__text">
            {val.title === "Support + Grow"
              ? (
                <>
                  We want to eliminate your business from experiencing any interruptions. That is why we have specialized monthly packages where we monitor your website for any security/malware, plugin updates,&nbsp;
                  <Link
                    className="ptf-btn ptf-btn--secondary navbar-header-studio-main-btn services-approach-btn"
                    to="/hosting-support"
                  >
                    <p>WordPress support and other services.</p>
                  </Link>
                </>)
              : val.descriptions}
          </p>
        </li>
      ))}
    </ul>
  )
}

export default Approach2
