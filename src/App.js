import React, { useEffect } from "react"
import Routes from "./router/Routes"
import ScrollToTop from "./components/ScrollToTop"
import AOS from "aos"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "aos/dist/aos.css"
import { Helmet } from "react-helmet"
import AnimatedCursor from "react-animated-cursor"

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    })
  }, [])
  return (
    <>
      <Helmet>
        <title>PurposeWorks</title>
        <meta name="description" content="PurposeWorks" />
        <meta
          name="keywords"
          content="agency, bootstrap 5, business, clean, corporate, creative, fullpage, minimal, modern, multipurpose, parallax, personal, photography, portfolio, showcase"
        />
      </Helmet>
      <AnimatedCursor
        innerSize={8}
        outerSize={44}
        color="249, 201, 20"
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={1.2}
      />
      <ScrollToTop />
      <Routes />
    </>
  )
}

export default App
