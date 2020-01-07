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
  SectionFour,
  FlexBoxIndex,
} from "../styles/IndexStyles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faHeart, faCode, faGem, fas } from "@fortawesome/free-solid-svg-icons"
import {
  fab,
  faHtml5,
  faJs,
  faReact,
  faCss3,
  faGalacticSenate,
} from "@fortawesome/free-brands-svg-icons"

library.add(faHeart, faCode, faGem, fas)

export default () => (
  <>
    <section>
      <Banner></Banner>
      <TextWrapper>
        <div>
          <h2>BS Move</h2>
          <GenereicPara>
            Un déménagement à la hauteur de vos attentes
          </GenereicPara>
          <Link to="/works">Votre devis en 1 clic</Link>
        </div>
      </TextWrapper>
    </section>
    {/* <SectionTwo>
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
    </SectionTwo> */}
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
    <SectionFour>
      <div className="header__section4">
        <div className="title__section4">L'EXPERTISE BS MOVE</div>
        <GenereicPara lessSize>
          Basée à Meaux, en Ile de France, notre équipe vous accompagnera pas à
          pas et restera à votre écoute tout au long de votre déménagement.
          <br />
          <br /> Nos déménageurs BS MOVE sont régulièrement formés afin de
          toujours vous offrir le meilleur service possible.
          <br />
          <br />
          Nous nous occupons de l’ensemble de vos biens, et nous les déplaçons
          vers votre futur logement.
          <br />
          <br /> Finis le stress, vous ne pensez plus à rien ! Nous transportons
          vos biens en toute sécurité vers votre nouveau logement et les plaçons
          où vous le souhaitez.
          <br />
          <br />
        </GenereicPara>
      </div>
      <div className="grid__section4">
        <div className="item1" style={{ backgroundColor: "#1D508E" }}>
          <div className="flex__section4">
            <FontAwesomeIcon
              icon={faReact}
              color="#00FFCC"
              size="3x"
              fixedWidth
            />
            <GenericH2 none>React</GenericH2>
          </div>
          <GenereicPara lessSize lessSpacing grey>
            Modern JavaScript framework which will make your web application
            extremely fast and, at the same time, handy for every user.
          </GenereicPara>
        </div>
        <div className="item2" style={{ backgroundColor: "#4A4D89" }}>
          <div className="flex__section4">
            <FontAwesomeIcon icon="code" color="#00FFCC" size="3x" fixedWidth />
            <GenericH2 none>React Native</GenericH2>
          </div>
          <GenereicPara lessSize lessSpacing grey>
            Cross-platform for mobile app development based on Javascript, whose
            resulting code is compiled to Android and iOS.
          </GenereicPara>
        </div>
        <div className="item3" style={{ backgroundColor: "#484A83" }}>
          <div className="flex__section4">
            <FontAwesomeIcon icon={faJs} color="#00FFCC" size="3x" fixedWidth />
            <GenericH2 none>JavaScript</GenericH2>
          </div>
          <GenereicPara lessSize lessSpacing grey>
            JavaScript is the language of the web. It is used for Web
            development, mobile development and app development and everything
            else.
          </GenereicPara>
        </div>
        <div className="item4" style={{ backgroundColor: "#45477E" }}>
          <div className="flex__section4">
            <FontAwesomeIcon
              icon={faHtml5}
              color="#00FFCC"
              size="3x"
              fixedWidth
            />
            <GenericH2 none>HTML5</GenericH2>
          </div>
          <GenereicPara lessSize lessSpacing grey>
            HTML, a standardized system for tagging text files to achieve font,
            colour, graphic, and hyperlink effects on World Wide Web pages.
          </GenereicPara>
        </div>
        <div className="item5" style={{ backgroundColor: "#424479" }}>
          <div className="flex__section4">
            <FontAwesomeIcon
              icon={faCss3}
              color="#00FFCC"
              size="3x"
              fixedWidth
            />
            <GenericH2 none>CSS3</GenericH2>
          </div>
          <GenereicPara lessSize lessSpacing grey>
            CSS is a style sheet language used for describing the presentation
            of a document written in a markup language like HTML.
          </GenereicPara>
        </div>
        <div className="item6" style={{ backgroundColor: "#3F4174" }}>
          <div className="flex__section4">
            <FontAwesomeIcon
              icon={faGalacticSenate}
              color="#00FFCC"
              size="3x"
              fixedWidth
            />
            <GenericH2 none>Gatsby</GenericH2>
          </div>
          <GenereicPara lessSize lessSpacing grey>
            Gatsby is a free and open source framework based on React that helps
            developers build blazing fast websites and apps
          </GenereicPara>
        </div>
      </div>
    </SectionFour>
  </>
)
