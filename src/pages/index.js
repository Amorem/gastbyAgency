import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
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

export default () => (
  <Layout>
    <section>
      <Banner></Banner>
      <TextWrapper>
        <div>
          <h2>BS Move</h2>
          <GenereicPara>
            Un déménagement à la hauteur de vos attentes !!!
          </GenereicPara>
          <Link to="/">Votre devis en 1 clic</Link>
        </div>
      </TextWrapper>
    </section>
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
        <div className="image">
          <img src="accompagnement-expert.jpg" alt="Accompagnement Experts" />
        </div>
        <div className="text__section3">
          <GenereicPara none>
            BÉNÉFICIEZ D’UN ACCOMPAGNEMENT D’EXPERT
          </GenereicPara>
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
          pas et restera <strong>à votre écoute</strong> tout au long de votre
          déménagement.
          <br />
          <br /> Nos déménageurs BS MOVE sont{" "}
          <strong>régulièrement formés</strong> afin de toujours vous offrir le
          meilleur service possible.
          <br />
          <br />
          Nous nous occupons de <strong>l’ensemble de vos biens</strong>, et
          nous les déplaçons vers votre futur logement.
          <br />
          <br /> Finis le stress, vous ne pensez plus à rien ! Nous transportons
          vos biens en <strong>toute sécurité</strong> vers votre nouveau
          logement et les plaçons où vous le souhaitez.
          <br />
          <br />
        </GenereicPara>
      </div>
    </SectionFour>
  </Layout>
)
