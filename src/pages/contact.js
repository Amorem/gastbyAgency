import React from "react"
import Layout from "../components/layout"

import {
  GenereicPara,
  GenericH2,
  Banner,
  TextWrapper,
  FormFive,
  MoreText,
  SectionTwo,
  SectionThree,
  SectionFour,
  FlexBoxIndex,
} from "../styles/IndexStyles"

const ContactForm = () => {
  return (
    <Layout>
      <Banner></Banner>
      <TextWrapper>
        <GenereicPara>
          Vous êtes intéressé par nos services ?<br />
          <br />
          Vous avez des questions ?<br />
          <br />
          Contactez-nous, et nous vous répondrons dans les plus brefs délais !
          <br />
          <br />
          <br />
          <br />
        </GenereicPara>
      </TextWrapper>

      <FormFive>
        <form name="contact" method="POST" data-netlify="true">
          <p>
            <label>
              Nom: <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Telephone: <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Email: <input type="email" name="email" />
            </label>
          </p>

          <p>
            <label>
              Votre message: <textarea name="message"></textarea>
            </label>
          </p>
          <p>
            <button type="submit">Envoyer</button>
          </p>
        </form>
      </FormFive>
    </Layout>
  )
}

export default ContactForm
