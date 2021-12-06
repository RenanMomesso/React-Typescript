import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  ${media.greaterThan("medium")`
  display: flex;
  justify-content:flex-start;
  align-items:center;
  margin:auto;
`}
`;

export const Description = styled.div`
  text-align: center;
  ${media.greaterThan("medium")`
    text-align:justify;
`}
`;

export const Title = styled.h2`
  text-align: center;
  margin-top: 10px;
  width: 100%;
`;



export const ImageEpisode = styled.img`
  width: 40%;
  height: 30%;

  ${media.lessThan("medium")`
  width: 100%;
  `}
`;
