import React from "react"

const approachContent = [
  {
    title: "Child Sponsorship Modules",
    delayAnimation: "0",
  },
  {
    title: "Memberships",
    delayAnimation: "100",
  },
  {
    title: "Donation Page",
    delayAnimation: "200",
  },
  {
    title: "Donor Management CRM",
    delayAnimation: "300",
  },
  {
    title: "Email Campaigns",
    delayAnimation: "300",
  },
  {
    title: "Google Ads Management",
    delayAnimation: "300",
  }
]

const Approach3 = () => {
  return (
    <ul className="ptf-process-steps">
      {approachContent.map((val, i) => (
        <li
          className="ptf-process-itemm"
          data-aos="fade"
          data-aos-delay={val.delayAnimation}
          key={i}
        >
          <h6 className="ptf-process-itemm__title">{val.title}</h6>
        </li>
      ))}
    </ul>
  )
}

export default Approach3
