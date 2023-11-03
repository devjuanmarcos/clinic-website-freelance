import styles from "./styles.module.css";
import React from "react";

import data from "assets/json/data.json";

import MainBanner from "components/Banners/Main";
import ThreeMiniBanners from "components/Banners/ThreeMini";
import ImageWithText from "components/Banners/ImageWithText";
import TitleWithButtons from "components/Banners/TitleWithButtons";
import Menu from "components/Menu";
import CardCarouselBanner from "components/Banners/CardCarousel";
import Example from "components/Cards/Carousel/OneAnimated/";

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
    <section className={styles.main}>
      {/* fill in the type (data.json - banners type), background (rgba or false), revertPosition (true or false) and anchor */}

      <Menu type={filteredBanner("menu")} />

      <MainBanner type={filteredBanner("main", false, false, "anchorHome")} />

      <ThreeMiniBanners
        type={filteredBanner("center", false, false, "anchorCenter")}
      />

      <ImageWithText
        type={filteredBanner("info1", false, true, "anchorInfo1")}
      />

      <TitleWithButtons
        type={filteredBanner("info2", false, false, "anchorInfo2")}
      />

      <ImageWithText
        type={filteredBanner("info3", false, true, "anchorInfo3")}
      />

      <Example type={filteredBanner("example")} />

      <CardCarouselBanner
        type={filteredBanner("cardComent", false, false, false)}
      />
    </section>
  );
}
