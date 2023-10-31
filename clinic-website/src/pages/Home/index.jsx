import styles from "./styles.module.css";
import React from "react";

import data from "assets/json/data.json";

import MainBanner from "components/Banners/Main";
import ThreeMiniBanners from "components/Banners/ThreeMini";
import ImageWithText from "components/Banners/ImageWithText";
import TitleWithButtons from "components/Banners/TitleWithButtons";

export default function Home({ pageId }) {
  const filteredId = data.find((data) => data.id === pageId);
  if (!filteredId) {
    return null;
  }
  const { banners, ...filteredWithoutBanners } = filteredId;

  const filteredBanner = (type, background, revertPosition) => [
    filteredWithoutBanners,
    filteredId.banners.filter((banner) => banner.type === type),
    background,
    revertPosition,
  ];

  return (
    <section className={styles.main}>
      {/* fill in the type (data.json - banners type), background (rgba or false) and revertPosition (true or false) */}

      <MainBanner type={filteredBanner("main", false, false)} />

      <ThreeMiniBanners type={filteredBanner("center", false, false)} />

      <ImageWithText type={filteredBanner("info1", false, true)} />

      <TitleWithButtons type={filteredBanner("info2", false, false)} />

      <ImageWithText type={filteredBanner("info3", false, true)} />
    </section>
  );
}
