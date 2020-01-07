import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons"
import { Header, Footer, GenericH2, GenereicPara } from "../styles/IndexStyles"
import { Link } from "gatsby"

export default ({ children }) => (
  <div>
    <Header>
      <GenericH2 none>
        <Link to="/">
          <img
            src="BSMoveLogo.png"
            style={{ width: "40%", marginLeft: "15px" }}
          />
        </Link>
      </GenericH2>
      <div className="menu__items">
        <Link to="/blog">
          <GenereicPara lessSize lessSpacing grey>
            Actualités
          </GenereicPara>
        </Link>
        <Link to="/services">
          <GenereicPara lessSize lessSpacing grey>
            Services
          </GenereicPara>
        </Link>
        <Link to="/avis">
          <GenereicPara lessSize lessSpacing grey>
            Temoignages
          </GenereicPara>
        </Link>
        <Link to="/contact">
          <GenereicPara lessSize lessSpacing grey>
            Contact
          </GenereicPara>
        </Link>
      </div>
    </Header>
    {children}
    <Footer>
      <div class="icons">
        <FontAwesomeIcon icon={faTwitter} size="2x" fixedWidth />
        <FontAwesomeIcon icon={faFacebook} size="2x" fixedWidth />
      </div>
      <div class="copyright">
        <span>&copy;2020 BS Move</span>
      </div>
    </Footer>
  </div>
)
