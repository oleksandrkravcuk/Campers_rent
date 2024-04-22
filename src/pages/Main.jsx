import MainContainer from "../layouts/MainContainer";
import Hero from "../components/Hero/Hero";
import PicturesSection from "../components/PicturesSection/PicturesSection";
import { MainWrapper } from "../components/ToggleThemeBtn/ToggleThemeBtn.styled";


const Main = () => {
  return (
    <MainWrapper>
      <MainContainer>
      </MainContainer>
      <Hero />
      <PicturesSection />
    </MainWrapper>
  );
};

export default Main;
