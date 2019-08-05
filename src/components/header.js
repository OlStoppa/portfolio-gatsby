import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useState, useEffect} from "react"
import Git from "../assets/github.svg"
import Linked from "../assets/linkedin.svg"

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
    <div className="container__profile-links">
          <Git className="profile-link"/>
          <Linked className="profile-link"/>
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
