import styled from "styled-components";
import mediaquery from "styled-media-query";

export const MainWrapper = styled.main`
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr 1fr;

  ${mediaquery.lessThan("medium")`
      grid-template-columns: 1fr;
      height:auto;
  `}
`;

export const BannerShow = styled.div`
  width: 100%;
  height: 100%;
  border-width: 1px;
  overflow: hidden;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: fill;
  ${mediaquery.lessThan("medium")`
     display:none;
  `}
`;

export const ShowContent = styled.div`
  height: 100vh;
  padding: 30px;
  overflow: hidden;

  ${mediaquery.lessThan("medium")`
     height:auto;
     overflow: none;
  `}
`;

export const Title = styled.h2`
  text-align: left;
  font-size: 48px;
  width: 90%;
  margin-bottom: 50px;
  font-weight: bolder;
`;
export const Description = styled.div`
  font-weight: 100;
  text-align: justify;
  width: 90%;
  font-size: 18px;
  line-height: 22px;
`;