import React from "react"
import { Link } from "gatsby"
import { Banner, TextWrapper, MoreText } from "../styles/IndexStyles"

export default () => (
  <div style={{ postion: "relative" }}>
    <Banner></Banner>
    <TextWrapper>
      <div>
        <h2>GeekyHacker</h2>
        <p>
          One Stop For
          <br />
          All your development
          <br />
          And design needs
        </p>
        <Link to="/works">Our Work</Link>
      </div>
    </TextWrapper>
    <MoreText>Learn More</MoreText>
  </div>
)
