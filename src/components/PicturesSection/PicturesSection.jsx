import MainContainer from "../../layouts/MainContainer";
import CamperS from "../../assets/pictures/photo1.jpg";
import CamperF from "../../assets/pictures/photo2.jpg";
import CamperM from "../../assets/pictures/photo3.jpg";
import CamperC from "../../assets/pictures/photo4.jpg";
import CamperCC from "../../assets/pictures/photo6.jpg";
import CamperD from "../../assets/pictures/photo7.jpg";
import {
  PictureSection,
  SectionWrap,
  PicturePositionWrap,
  TextBlock,
} from "./PicturesSection.styled";

const PicturesSection = () => {
  return (
    <PictureSection>
      <MainContainer>
        <SectionWrap>
          <div>
            <img
              src={CamperM}
              alt="campervan"
              width={300}
              height={500}
            />

            <PicturePositionWrap>
              <img
                src={CamperC}
                alt="campervan"
                width={300}
                height={500}
              />
              <img
                src={CamperF}
                alt="campervan"
                width={300}
                height={500}
              />
            </PicturePositionWrap>
            <img
                src={CamperCC}
                alt="campervan"
                width={300}
                height={500}
              />
              <img
                src={CamperD}
                alt="campervan"
                width={300}
                height={500}
              />
          </div>

          <TextBlock>
            <div>
              <h2>Mobile Homes: Your Portable Abode for New Journeys and Adventures</h2>

              <p>
              Camping allows you to enjoy nature and feel close to it, relaxing under the open sky.
You can indulge in a variety of activities such as hiking trails, kayaking, fishing, etc., which are available at camping sites.
Camping lets you escape from the hustle and bustle of city life and find peace and inner harmony.
You can gather family and friends together for unforgettable moments in nature during camping.
Camping promotes a healthy lifestyle as you can spend more time outdoors and engage in physical activities.
It's a budget-friendly option for recreation compared to hotels or resorts, as you can save on accommodation and food.
You can try various camping methods, such as tent camping, staying in a camper van, or RV camping.
              </p>
              <p id="additional-info">
              Camping allows you to enjoy delicious food cooked over a campfire and spend time by the campfire with your loved ones.
You can enjoy the starry sky and night landscapes, which are unique during camping.
Camping gives you the opportunity to discover new places, explore nature, and create unforgettable memories that will last a lifetime.
              </p>
              <PicturePositionWrap>
              <img
              src={CamperS}
              alt="campervan"
              width={300}
              height={500}
            />
              </PicturePositionWrap>
            </div>
          </TextBlock>
        </SectionWrap>
      </MainContainer>
    </PictureSection>
  );
};

export default PicturesSection;
