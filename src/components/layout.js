import React from "react"
import { Link } from "gatsby"
// import Toggle from "./toggle"
import { rhythm, scale } from "../utils/typography"

// import open from "../assets/open.png"
// import close from "../assets/close.png"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(0.7),
          marginBottom: rhythm(0),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          marginBottom: rhythm(0),
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: rhythm(1),
        }}
      >
        {header}
        {/* <Toggle
          icons={{
            checked: (
              <img
                src={close}
                width="16"
                height="16"
                role="presentation"
                style={{ pointerEvents: "none" }}
              />
            ),
            unchecked: (
              <img
                src={open}
                width="16"
                height="16"
                role="presentation"
                style={{ pointerEvents: "none" }}
              />
            ),
          }}
        /> */}
      </header>
      <main>{children}</main>
    </div>
  )
}

export default Layout
