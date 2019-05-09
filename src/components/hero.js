import React from 'react';
import styled from '@emotion/styled';
import { Link, graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const ImageBackground = styled(BackgroundImage)`
  background-size: cover;
  height: 30vh;
`;

const TextBox = styled('div')`
  display: flex;
  background-image: linear-gradiend(to top, #ddbbffdd 2rem, #ddbbff00);
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  padding: 2rem;
  width: 100%;

  h1 {
    text-shadow: 1px 1px 3px #eeddff66;
    font-size: 2.25rem;
  }

  p,
  a {
    color: #222;
    margin-top: 0;
  }

  a {
    margin-top: 0.5rem;
  }
`;

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "hero-bg.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <ImageBackground Tag="section" fluid={image.sharp.fluid}>
      <TextBox>
        <h1>My test gatsby blog</h1>
        <p>
          I feel so cool when build this. <Link to="/about">About me</Link>
        </p>
      </TextBox>
    </ImageBackground>
  );
};
export default Hero;
