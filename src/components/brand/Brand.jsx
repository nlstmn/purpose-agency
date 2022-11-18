import React from "react"

const brandContent = [
  {
    delayAnimation: "0",
    hoverBg: "#fcf8f4",
    imgHeight: "85px",
    imgName: "image-1",
    title: "Shamandeep Singh",
    subtitle: "Creative Director & CEO",
    desc: "He is an entrepreneur with experience in the construction, education, and the nonprofit sector with his organization SAF International. His creative ability to visualize designs and craft the best product led him to success in all industries. He takes every little detail seriously and that's what brings the best out of him - his resistance to let go until fully satisfied."
  },
  {
    delayAnimation: "100",
    hoverBg: "#f3f7fc",
    imgHeight: "78px",
    imgName: "image-2",
    title: "Anastasiya",
    subtitle: "Brand Identity and Graphics",
    desc: "Anastasiya is from Bulgaria, and she is a professional graphic designer with a bachelor's degree in Graphic design. Her expertise is brand identity and logo design. When she is not in front of a computer, she indulges in nature through climbing, running, and walking."
  },
  {
    delayAnimation: "100",
    hoverBg: "#f3f7fc",
    imgHeight: "78px",
    imgName: "image-2",
    title: "Izhan Khan",
    subtitle: "Full Stack Developer",
    desc: "Izhan is from Pakistan, and he has been an athlete since childhood. He was a football player until graduating college. His passion for gaming got him into coding - he is now a full stack developer with Purpose Works. He has built hundreds of websites using various technologies."
  }
]

const Brand = () => {
  return (
    <div className="row" style={{ "--bs-gutter-y": "2rem" }}>
      {brandContent.map((item, i) => (
        <div className="col-6 col-md-3 col-lg-4" key={i}>
          <div
            className="ptf-animated-block"
            data-aos="fade"
            data-aos-delay={item.delayAnimation}
          >
            <div
              className="ptf-partner-box"
              style={{
                "--ptf-hover-background": item.hoverBg,
                "--ptf-image-height": item.imgHeight,
              }}
            >
              <div className="ptf-partner-box__image">
                <img
                  src={`assets/img/root/partners/${item.imgName}.png`}
                  alt="Zeplin"
                  loading="lazy"
                />
              </div>
              <h6 className="ptf-partner-box__title font-800 font-s-24">{item.title}</h6>
              <h6 className="ptf-partner-box__desc font-s-18">{item.subtitle}</h6>
            </div>
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "2.5rem" }}
            ></div>
            <div className="ptf-work__category text-center">
              {item.desc}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Brand
