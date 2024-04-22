import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import  CloseIcon from "../../components/icons/CloseIcon";
import  LocationIcon from "../../components/icons/LocationIcon";
import  StarIcon  from "../../components/icons/StarIcon";
import Tabs from "./Tabs/Tabs";
import {
  Backdrop,
  CLoseBtn,
  Content,
  HeadInfo,
  ModalDescr,
  PicsList,
  Window,
} from "./Modal.styled";
import {
  LocationWrap,
  Price,
  RatingLocationWrap,
  RatingWrap,
  Title,
} from "../../components/AdvertCard/AdvertCard.styled";

const Modal = ({
  card,
  closeModal,
  activeTab,
  setActiveTab,
  clickToReviews,
}) => {
  const tabsRef = useRef();
  useEffect(() => {
    const handleESCClose = (e) => {
      if (e.code === "Escape") {
        closeModal();
        document.body.style.overflow = "";
      }
    };

    window.addEventListener("keydown", handleESCClose);

    return () => window.removeEventListener("keydown", handleESCClose);
  }, [closeModal]);

  useEffect(() => {
    clickToReviews &&
      tabsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        duration: 1000,
      });
  }, [clickToReviews]);

  const handleBackdropClose = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      closeModal();
      document.body.style.overflow = "visible";
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClose}>
      <Window>
        <CLoseBtn
          type="button"
          aria-label="Close modal"
          onClick={() => {
            closeModal();
            document.body.style.overflow = "";
          }}
        >
          <CloseIcon width={20} height={20} />
        </CLoseBtn>

        <Content>
          <HeadInfo>
            <Title>{card.name}</Title>

            <RatingLocationWrap id="rating-wrap">
              <RatingWrap>
                <StarIcon
                  width={20}
                  height={20}
                  fillColor={"var(--accent-orange)"}
                />
                <p>{`${card.rating}(${card.reviews.length} Reviews)`}</p>
              </RatingWrap>

              <LocationWrap>
                <LocationIcon width={20} height={20} />
                <p>{card.location.split(",").reverse().join(", ")}</p>
              </LocationWrap>
            </RatingLocationWrap>

            <Price>€{card.price.toFixed(2)}</Price>
          </HeadInfo>

          <PicsList>
            {card.gallery.length > 0 &&
              card.gallery.map((link, i) => (
                <li key={`${card._id}/${i}`}>
                  <img src={link} alt={card.name} />
                </li>
              ))}
          </PicsList>

          <ModalDescr>{card.description}</ModalDescr>

          <div ref={tabsRef}>
            <Tabs
              card={card}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>
        </Content>
      </Window>
    </Backdrop>,
    document.getElementById("modal-root")
  );
};

export default Modal;
