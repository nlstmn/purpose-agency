import React, { useEffect } from "react"
import Routes from "./router/Routes"
import ScrollToTop from "./components/ScrollToTop"
import AOS from "aos"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "aos/dist/aos.css"
import { Helmet } from "react-helmet"

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    })
  }, [])
  return (
    <>
      <Helmet>
        <title>Purpose Works</title>
        <meta name="description" content="Purpose Works" />
        <meta
          name="keywords"
          content="agency, bootstrap 5, business, clean, corporate, creative, fullpage, minimal, modern, multipurpose, parallax, personal, photography, portfolio, showcase"
        />
      </Helmet>
      <ScrollToTop />
      <Routes />
    </>
  )
}

export default App
