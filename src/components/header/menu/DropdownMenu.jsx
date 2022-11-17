import React from "react"
import { Link } from "react-router-dom"

const menuContent = [
  {
    name: "Latest Works",
    activeClass: "sf-with-ul",
    menuClass: "two-columns current-menu-item"
  },
  {
    name: "Services",
    activeClass: "",
    menuClass: "",
    dropDownItems: [
      {
        name: "Web Design & Development",
        routerPath: "/works-grid",
      },
      {
        name: "Custom WordPress",
        routerPath: "/works-masonry",
      },
      {
        name: "Digital Marketing",
        routerPath: "/works-listing",
      },
      {
        name: "Strategy & Design for Social Impact",
        routerPath: "/works-carousel",
      },
      {
        name: "Hosting + Support",
        routerPath: "/works-showcase",
      },
    ],
  },
  {
    name: "About Us",
    activeClass: "",
    menuClass: "",
    routerPath: "/about-us"
  },
  {
    name: "Blog",
    activeClass: "",
    menuClass: "two-columns"
  },
]

const DropdownMenu = () => {
  return (
    <ul className="sf-menu">
      {menuContent.map((item, i) => (
        <li className={i === 1 ? "submenuli" : `menu-item-has-children ${item.menuClass}`} key={i}>
          <Link to={item.routerPath}>
            <a href="#" className={item.activeClass}>
              <span>{item.name}</span>
              {
                i === 1 ?
                  (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="arrow-nav">
                      <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                    </svg>
                  ) : null
              }
            </a>
          </Link>
          {
            item.dropDownItems !== undefined ?
              <ul className="sub-menu mega">
                {item.dropDownItems?.map((val, i) => (
                  <li key={i}>
                    <Link to={val.routerPath}>
                      {" "}
                      <span>{val.name}</span>
                    </Link>
                  </li>
                ))}
              </ul> : null
          }
        </li>
      ))}
      <Link
        className="ptf-btn ptf-btn--secondary navbar-header-studio-main-btn"
        to="/service"
      >
        Get in Touch
      </Link>
    </ul>
  )
}

export default DropdownMenu
