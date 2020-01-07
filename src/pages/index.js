import React from "react"
import { Link } from "gatsby"
import {
  GenereicPara,
  GenericH2,
  Banner,
  TextWrapper,
  MoreText,
  SectionTwo,
  SectionThree,
  FlexBoxIndex,
} from "../styles/IndexStyles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faHeart, faCode, faGem, fas } from "@fortawesome/free-solid-svg-icons"

library.add(faHeart, faCode, faGem, fas)

export default () => (
  <>
    <section style={{ postion: "relative" }}>
      <Banner></Banner>
      <TextWrapper>
        <div>
          <h2>BS Move</h2>
          <GenereicPara>
            Offrez-vous un déménagement à la hauteur de vos attentes !
          </GenereicPara>
          <Link to="/works">Votre devis en 1 click</Link>
        </div>
      </TextWrapper>
      <MoreText>Learn More</MoreText>
    </section>
    <SectionTwo>
      <div>
        <h2>Our Passion</h2>
        <GenereicPara>
          Most good programmers do programming not because they except to get
          paid, but because it is fun to program
        </GenereicPara>
        <h5>Linus Torvald</h5>
      </div>
      <span>
        <FontAwesomeIcon
          icon="gem"
          color="#04F5C6"
          size="6x"
          style={{ marginRight: "3rem" }}
          fixedWidth
          border
        />
        <FontAwesomeIcon
          icon="heart"
          color="#00F0FF"
          size="6x"
          style={{ marginRight: "3rem" }}
          fixedWidth
          border
        />
        <FontAwesomeIcon
          icon="code"
          color="#73DBFD"
          size="6x"
          fixedWidth
          border
        />
      </span>
    </SectionTwo>
    <SectionThree>
      <FlexBoxIndex>
        <div className="image">
          <img src="gain-temps.jpg" alt="Gain de temps" />
        </div>
        <div className="text__section3">
          <GenereicPara none>
            GAGNEZ DU TEMPS SUR VOTRE DÉMÉNAGEMENT
          </GenereicPara>
        </div>
      </FlexBoxIndex>
      <FlexBoxIndex>
        <div className="text__section3">
          <GenereicPara none>
            BÉNÉFICIEZ D’UN ACCOMPAGNEMENT D’EXPERT
          </GenereicPara>
        </div>
        <div className="image">
          <img src="accompagnement-expert.jpg" alt="Accompagnement Experts" />
        </div>
      </FlexBoxIndex>
      <FlexBoxIndex>
        <div className="image">
          <img src="petit-prix.jpg" alt="Pas Cher" />
        </div>
        <div className="text__section3">
          <GenereicPara none>
            UN SERVICE PROFESSIONNEL À PETIT PRIX
          </GenereicPara>
        </div>
      </FlexBoxIndex>
    </SectionThree>
  </>
)
