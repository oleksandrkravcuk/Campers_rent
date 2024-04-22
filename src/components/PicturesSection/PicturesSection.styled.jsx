import styled from "styled-components";

export const PictureSection = styled.section`
  padding: 30px 0;
`;

export const SectionWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  img {
    width: 100%;
    object-fit: cover;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;

    img {
      width: 400px;
    }
  }

  @media screen and (min-width: 1440px) {
    gap: 25px;

    img {
      width: 700px;
      height: 700px;
      border-radius: 100px;
    }
  }
`;

export const PicturePositionWrap = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 30px;
    margin: 25px 0;

    img {
      width: 635px;
      height: 450px;
      border-radius: 60px;
    }
  }
`;

export const TextBlock = styled.div`
@media screen and (min-width: 768px) {
  left: -500px;
  width: 400px;
  div {
    position: sticky;
    z-index: 4;
    top: 110px;
    left: 400px;
  }
}

@media screen and (min-width: 1440px) {
  position: relative;
  z-index: 4;
  left: -600px;
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 18px;
  line-height: 1.5;
  text-align: justify;

  & p:not(:last-child) {
    margin-bottom: 25px;
  }

  h2 {
    text-align: center;
  }

  div {
    position: sticky;
    z-index: 4;
    top: 110px;
    left: 400px;
  }
}
`
