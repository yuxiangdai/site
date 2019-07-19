import React from 'react'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'
import Image from '../components/image'
import Layout from '../components/layout'
import logo from '../images/Yuxiang_Signature_White.png'

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`

const Logo = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 142px;
  margin-bottom: 142px;
  width: 50%;
`

const StyledLink = styled(Link)`
  color: white;
  &:hover {
    color: grey;
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <Container>
      <Logo>
        <Image />
      </Logo>
      <h1>about</h1>
      <p>
        I'm Yuxiang Dai, currently an Engineering Science Student at the
        University of Toronto majoring in Robotics Engineering where I have
        studied various topics including software development, machine learning,
        natural language processing, systems control and computer vision. In
        software development, my main areas of expertise are Full Stack Web
        Development and Mobile App Development. In my free time, I enjoy
        participating in hackathons and extracurriculars.
      </p>
      <StyledLink to="/projects/">Go to my projects</StyledLink>
    </Container>
  </Layout>
)

export default IndexPage
