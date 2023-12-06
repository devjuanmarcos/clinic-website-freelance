import styles from "./styles.module.css";
import React from "react";

import data from "assets/json/data.json";
// eslint-disable-next-line
import background from "assets/images/circulos.svg";

import MainBanner from "components/Banners/Main";
import ThreeMiniBanners from "components/Banners/ThreeMini";
import ImageWithText from "components/Banners/ImageWithText";
import TitleWithButtons from "components/Banners/TitleWithButtons";
import Menu from "components/Menu";
import CardCarouselBanner from "components/Banners/CardCarousel";
// eslint-disable-next-line
import ImageApresentationBanner from "components/Banners/ImagesApresentation";

export default function Home({ pageId }) {
  const filteredId = data.find((data) => data.id === pageId);
  if (!filteredId) {
    return null;
  }

  const { banners, ...filteredWithoutBanners } = filteredId;

  const filteredBanner = (type, background, revertPosition, anchor) => [
    filteredWithoutBanners,
    filteredId.banners.filter((banner) => banner.type === type),
    background,
    revertPosition,
    anchor,
  ];

  return (
    <section
      // style={
      //   background
      //     ? {
      //         backgroundImage: `url(${background})`,
      //         backgroundSize: "cover",
      //       }
      //     : null
      // }
      className={styles.main}
    >
      {/* fill in the type (data.json - banners type), background (rgba or false), revertPosition (true or false) and anchor */}

      <Menu type={filteredBanner("menu")} />

      <MainBanner type={filteredBanner("main", false, false, "anchorHome")} />

      {/* <ImageApresentationBanner type={filteredBanner("example")} /> */}

      <ThreeMiniBanners
        type={filteredBanner("center", false, false, "anchorCenter")}
      />

      <ImageWithText
        type={filteredBanner("info1", "rgb(45 61 54)", false, "anchorInfo1")}
      />

      {/* <ImageWithText
        type={filteredBanner("info3", false, true, "anchorInfo3")}
      /> z*/}

      <CardCarouselBanner
        type={filteredBanner("cardComent", false, false, false)}
      />

      <TitleWithButtons
        type={filteredBanner("info2", "rgb(228 112 41)", false, "anchorInfo2")}
      />
    </section>
  );
}
