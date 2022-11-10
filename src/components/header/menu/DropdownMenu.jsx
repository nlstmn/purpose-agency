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
    menuClass: ""
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
        <li className={`menu-item-has-children ${item.menuClass}`} key={i}>
          <a href="#" className={item.activeClass}>
            <span>{item.name}</span>
          </a>
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
