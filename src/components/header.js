import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import styles from '../css/navbar.module.css'

// const NavList = styled.ul`
//   display: flex;
//   justify-content: flex-end;
//   a {
//     color: white;
//     text-decoration: none;
//   }
// `

const Header = ({ siteTitle }) => (
  <nav className={styles.navbar}>
    <div className={styles.navCenter}>
      <div className={styles.navHeader}>
        {/* <img src={logo} alt="backroads logo" /> */}
        <Link to={'/'} className={styles.brandLinks}>
          <h2 className={styles.brand}>{siteTitle}</h2>
        </Link>

        <button
          type="button"
          className={styles.logoBtn}
          onClick={toggleCollapsedNav}
        >
          <FaAlignRight className={styles.logoIcon} />
        </button>
      </div>
      <ul
        className={
          isCollapsed ? `${styles.navLinks} ${styles.showNav}` : styles.navLinks
        }
      >
        {links.map(({ path, text }) => (
          <li key={text}>
            <Link fade to={path}>
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </nav>
  // <div
  //   style={{
  //     background: `rebeccapurple`,
  //     marginBottom: `1.45rem`,
  //   }}
  // >
  //   <div
  //     style={{
  //       margin: `0 auto`,
  //       maxWidth: 960,
  //       padding: `1.45rem 1.0875rem`,
  //     }}
  //   >
  //     <h1 style={{ margin: 0, display: 'inline-block' }}>
  //       <Link
  //         to="/"
  //         style={{
  //           color: `white`,
  //           textDecoration: `none`,
  //         }}
  //       >
  //         {siteTitle}
  //       </Link>
  //     </h1>
  //     <NavList>
  //       <Link>Dynamic</Link>
  //       <Link>Static</Link>
  //     </NavList>
  //   </div>
  // </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
