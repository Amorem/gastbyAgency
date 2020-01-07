import styled from "styled-components"

const GenereicPara = styled.p`
  /* text-transform: uppercase; */
  text-align: center;
  letter-spacing: ${props => (props.lessSpacing ? "0.075em" : "0.225em")};
  font-size: ${props => (props.lessSize ? "1.5rem" : "2.5rem")};
  line-height: ${props => (props.lessSize ? "2rem" : "3rem")};
  color: ${props => (props ? props : "#ffffff")};
`

const GenericH2 = styled.h2`
  font-size: 3rem;
  padding: ${props => (props.none ? "0" : "1.35em 0")};
  color: ${props => (props.dark ? "#4E4852" : "#ffffff")};
  border-bottom: ${props => (props.none ? "0" : "2px solid #1d9c91")};
  text-transform: uppercase;
  letter-spacing: 0.6rem;
  margin: ${props => (props.some ? "5rem 0 0 0" : "0")};
`

const GenericH3 = styled.h3`
  font-size: 3rem;
  padding: ${props => (props.none ? "0" : "1.35em 0")};
  color: ${props => (props.dark ? "#4E4852" : "#ffffff")};
  border-bottom: ${props => (props.none ? "0" : "2px solid #1d9c91")};
  text-transform: uppercase;
  letter-spacing: 0.6rem;
  margin: 0;
`
const GenereicParaAbout = styled.p`
  text-transform: uppercase;
  text-align: center;
  letter-spacing: ${props => (props.lessSpacing ? "0.075em" : "0.225em")};
  font-size: ${props => (props.lessSize ? "1.5rem" : "2.5rem")};
  line-height: ${props => (props.lessSize ? "2rem" : "3rem")};
  color: ${props => (props.grey ? "#4E4852" : "#ffffff")};
`

const Banner = styled.div`
  &:after {
    content: "";
    display: block;
    height: 50vh;
    width: 100%;
    background-image: linear-gradient(rgba(10, 92, 124, 0.2), #1d508e),
      url("banner.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
`

const TextWrapper = styled.div`
  position: absolute;
  z-index: 1;
  left: 50%;
  top: 25%;
  transform: translate(-50%, -50%);
  color: white;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  h2 {
    font-size: 5rem;
    opacity: 1;
    padding: 0.35em 1em;
    /* border-top: 2px solid white;
    border-bottom: 2px solid white; */
    text-transform: uppercase;
    margin: 0;
  }
  a {
    margin-top: 30px;
    background-color: #ed4933;
    box-shadow: none;
    color: #ffffff;
    border-radius: 3px;
    border: 0;
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 0.225em;
    padding: 1.8rem 0.8rem;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
  }
`

const MoreText = styled.div`
  position: absolute;
  color: #ffffff;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.225em;
  font-weight: 600;
  font-size: 1.2rem;
  z-index: 1;
  left: 50%;
  bottom: 10%;
  transform: translate(-50%, -50%);
`

const SectionTwo = styled.section`
  background-color: ${props => (props.white ? "#ffffff" : "#21b2a6")};
  text-align: center;
  padding: 10rem 0;
  div {
    width: 66%;
    margin: 0 auto;
  }
  h5 {
    font-size: 1.4rem;
    line-height: 2rem;
    color: #ffffff;
    border-bottom: 2px solid #1d9c91;
    font-weight: 800;
    letter-spacing: 0.225em;
    text-transform: uppercase;
    padding-bottom: 0.5rem;
    margin-bottom: 5rem;
  }
`

const SectionThree = styled.section`
  background-color: #1d508e;
  color: #ffffff;
`

const FlexBoxIndex = styled.div`
  display: flex;
  .image {
    width: ${props => (props.inverse ? "60%" : "20%")};
    margin: 25px;
  }
  img {
    width: 100%;
  }
  .text__section3 {
    width: ${props => (props.inverse ? "40%" : "80%")};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`

const SectionFour = styled.section`
  background-color: #fff;
  color: #1d508e;
  text-align: center;
  .header__section4 {
    width: 80%;
    margin: 0 auto;
  }
  .title__section4 {
    font-size: 3rem;
    padding: 1.35em 0;
    color: #1d508e;
    /* border-bottom: 2px solid #1d508e; */
    text-transform: uppercase;
    letter-spacing: 0.225em;
    margin: 0;
    margin-top: 20px;
  }
  .grid__section4 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 66%;
    margin: 0 auto;
    padding: 3rem 0;
  }
  .grid__section4 > * {
    padding: 3rem;
  }
  .flex__section4 {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }
  .flex__section4 > h2 {
    margin-left: 1rem;
  }
`

export {
  Banner,
  TextWrapper,
  MoreText,
  SectionTwo,
  SectionThree,
  SectionFour,
  FlexBoxIndex,
  GenereicPara,
  GenericH2,
}
