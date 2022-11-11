import React from "react"
import { Link } from "react-router-dom"

const List = [
  "Branding + Design",
  "Website Development",
  "Strategy & Design for Social Impact",
  "Marketing",
  "Custom WordPress"
]

const ServiceList = () => {
  return (
    <>
      {List.map((val, i) => (
        <li key={i}>
          <Link to="/service-details">{val}</Link>
        </li>
      ))}
    </>
  )
}

export default ServiceList
