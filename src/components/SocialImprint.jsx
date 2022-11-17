import React from "react"

const brandContent = [
    {
        delayAnimation: "0",
        hoverBg: "#fcf8f4",
        imgHeight: "85px",
        imgName: "image-1"
    },
    {
        delayAnimation: "100",
        hoverBg: "#f3f7fc",
        imgHeight: "78px",
        imgName: "image-2"
    }
]

const SocialImprint = () => {
    return (
        <div className="row" style={{ "--bs-gutter-y": "2rem" }}>
            {brandContent.map((item, i) => (
                <div className="col-6 col-md-3 col-lg-6" key={i}>
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
                        </div>
                        <div
                            className="ptf-spacer"
                            style={{ "--ptf-xxl": "2.5rem" }}
                        ></div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SocialImprint
