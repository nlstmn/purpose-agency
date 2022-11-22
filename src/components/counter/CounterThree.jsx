import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const counterUpContent = [
  {
    startCount: "0",
    endCount: "95",
    metaText1: "Support",
    desc: "From WordPress plugin updates to adding new content, we make sure your website is always up to date and evolving with your business.",
    animationDelay: "0",
  },
  {
    startCount: "0",
    endCount: "98",
    metaText1: "Hosting",
    desc: "Our servers are located within Canada, eliminating any information leaks or privacy violations when hosting internationally. You can let your shoppers and donors know about this piece of mind information that can lead to more money for your business and nonprofits.",
    animationDelay: "100",
  },
  {
    startCount: "0",
    endCount: "90",
    desc: "A great website design with good content is still not enough to get website visitors. Your competitor is most likely using some format of digital marketing, in that case, without some investment on your end, you won’t make it.",
    metaText1: "Digital Marketing",
    animationDelay: "200",
  },
];

const CounterThree = () => {
  const [focus, setFocus] = React.useState(false);
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
                {val.desc}
              </h5>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CounterThree;
