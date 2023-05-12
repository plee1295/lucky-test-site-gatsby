import React from "react"
import styled from "styled-components"
import Helmet from 'react-helmet'

import gtm from '../gtm'

const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto 12px auto;
  &:last-child {
    margin-bottom: 0;
  }
`

const Avatar = styled.img`
  flex: 0 0 96px;
  width: 96px;
  height: 96px;
  margin: 0;
`

const Description = styled.div`
  flex: 1;
  margin-left: 18px;
  padding: 12px;
`

const Username = styled.h2`
  margin: 0 0 12px 0;
  padding: 0;
`

const Excerpt = styled.p`
  margin: 0;
`

const User = props => (
  <div>
    <Helmet>
      <script async defer src="../gtm.js"></script>
      <script async defer src="https://storage.googleapis.com/lucky-orange-staging-public/core/lo.js?site-id=8cc665b7"></script>
    </Helmet>
    <UserWrapper>
      <Avatar src={props.avatar} alt="" />
      <Description>
        <Username>{props.username}</Username>
        <Excerpt>{props.excerpt}</Excerpt>
      </Description>
    </UserWrapper>
  </div>
)

export default function UsersList() {
  return (
    <Container>
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MH7ZBLH"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
      <h1>About Styled Components</h1>
      <p>Styled Components is cool</p>
      <User
        username="Jane Doe"
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
        excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
      <User
        username="Bob Smith"
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
        excerpt="I'm Bob smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
      <input type="submit" value="hello input" />
    </Container>
  )
}
