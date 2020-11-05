import React from "react"
import { Link } from "gatsby"
import ToggleTheme from "./toggleTheme"
import { rhythm, scale } from '../utils/typography';

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

let renderHeader = () => {
    const rootPath = `${__PATH_PREFIX__}/`;

    if (location.pathname === rootPath) {
      return (
        <h1
          style={{
            ...scale(0.75),
            marginBottom: 0,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'var(--textTitle)',
            }}
            to={'/'}
          >
            {title}
          </Link>
        </h1>
      );
    } else {
      return (
        <h3
          style={{
            fontFamily: 'Montserrat, sans-serif',
            marginTop: 0,
            marginBottom: 0,
            height: 42, // because
            lineHeight: '2.625rem',
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'rgb(255, 167, 196)',
            }}
            to={'/'}
          >
            {title}
          </Link>
        </h3>
      );
    }
  }

  

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}
    style={{
      backgroundColor: 'var(--bg)',
      color: 'var(--textNormal)',
      transition: 'color 0.2s ease-out, background 0.2s ease-out',
      minHeight: '100vh'
    }}
    >
      <div style={{display:'flex',justifyContent:'space-between'}}>
      <header className="global-header" >{renderHeader()}</header>
      <ToggleTheme/>
 
      </div>
     <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
