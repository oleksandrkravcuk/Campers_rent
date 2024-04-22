import styled from "styled-components";
import HeroVan from "../../assets/pictures/photo5.jpg";

export const HeroSection = styled.section`
  max-width: 100vw;
`;

export const ImgWrap = styled.div`
  width: 100%;
  height: 600px;
  background: var(--hero-gradient), url(${HeroVan}) no-repeat center/cover;
  padding-top: 150px;

  @media screen and (min-width: 768px) {
    padding-top: 250px;
  }

  @media screen and (min-width: 1440px) {
    height: 900px;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 14px;
  line-height: 1.9;
  max-width: 100%;
  color: var(--white);

  @media screen and (min-width: 768px) {
    max-width: 800px;
    font-size: 24px;
  }
  @media screen and (min-width: 1440px) {
  font-size: 34px;
  line-height: 1.9;
  max-width: 100%;
  color: var(--white);
  }
`;
