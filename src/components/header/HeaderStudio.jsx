import React, { useState } from "react"
import { Link } from "react-router-dom"
import Search from "../form/Search"
import DropdownMenu from "./menu/DropdownMenu"
import MobileMenu from "./menu/MobileMenu"

const HeaderStudio = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  const [click1, setClick1] = useState(false)
  const handleClick1 = () => setClick1(!click1)

  const [navbar, setNavbar] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener("scroll", changeBackground)

  return (
    <>
      <header className="ptf-header ptf-header--style-2 ptf-header--opaque">
        <div
          className={
            navbar
              ? "ptf-navbar ptf-navbar--main ptf-navbar--sticky ptf-navbar--fixed "
              : "ptf-navbar ptf-navbar--main ptf-navbar--sticky"
          }
        >
          <div className="container navbar-header-studio-main">
            <div className="ptf-navbar-inner">
              <Link className="ptf-navbar-logo" to="/">
                <img
                  className="black"
                  src="assets/img/logos/logo-dark.png"
                  alt=""
                  loading="lazy"
                />
                <img
                  className="white"
                  src="assets/img/root/logo-white.png"
                  alt=""
                  loading="lazy"
                />
              </Link>
              <nav className="ptf-nav ptf-nav--default">
                <DropdownMenu />
              </nav>
              <div
                className="ptf-offcanvas-menu-icon js-offcanvas-menu-toggle bar right"
                onClick={handleClick1}
              >
                <i className="lnir lnir-menu-alt-5"></i>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        className={
          click1 ? "ptf-offcanvas-menu is-open" : "ptf-offcanvas-menu "
        }
      >
        <div className="ptf-offcanvas-menu__header">
          <div className="ptf-language-switcher">
            <a className="is-active" href="#">
              Eng
            </a>
            <a href="#">Fra</a>
            <a href="#">Ger</a>
          </div>
          <span
            className="ptf-offcanvas-menu-icon js-offcanvas-menu-toggle"
            onClick={handleClick1}
          >
            <i className="lnir lnir-close"></i>
          </span>
        </div>
        <MobileMenu />
      </div>
    </>
  )
}

export default HeaderStudio
