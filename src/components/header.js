import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { FaAlignRight } from 'react-icons/fa'
import styles from '../css/navbar.module.css'
import links from '../constants/links'

const Header = ({ siteTitle }) => {
  const [isCollapsed, toggleCollapsed] = useState(false)

  const toggleCollapsedNav = () => {
    toggleCollapsed(isCollapsed => !isCollapsed)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
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
            isCollapsed
              ? `${styles.navLinks} ${styles.showNav}`
              : styles.navLinks
          }
        >
          {links.map(({ path, text }) => (
            <li key={text}>
              <Link to={path}>{text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
