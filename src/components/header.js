import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useState, useEffect} from "react"

const Header = ({ siteTitle }) => { 
  const [uncover, setUncover] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setUncover(true)
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
return (
  <header className={uncover ? "uncover" : undefined}>
    <div className="header-inner">
      <h1 style={{ margin: 0, fontFamily: `Dosis`, fontWeight: 200 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Oliver Lennon
        </Link>
      </h1>
      <nav>
        <ul>
          <li>Work</li>
          <li>About</li>
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
}

export default Header
