import MainContainer from "../../layouts/MainContainer";
import { HeroTitle, HeroSection, ImgWrap } from "./Hero.styled";
import 'animate.css';

const Hero = () => {
  return (
    <HeroSection>
      <ImgWrap >
        <MainContainer className="animate__animated animate__backInDown animate__slower">
          <div>
            <HeroTitle className="animate__animated animate__backInDown animate__slower">
            Discover the freedom of mobile living with our range of stylish and functional homes on wheels.
            </HeroTitle>
            <HeroTitle className="animate__animated animate__backInLeft animate__slower">
            Explore endless possibilities as you embark on new journeys and adventures with the convenience of a mobile dwelling.
            </HeroTitle>
            <HeroTitle className="animate__animated animate__backInRight animate__slower">
            Find your perfect home on wheels and start living life on the move today
            </HeroTitle>
          </div>
        </MainContainer>
      </ImgWrap>
    </HeroSection>
  );
};

export default Hero;
