import styles from "./styles.module.css";
import React from "react";

import data from "assets/json/data.json";
import MainBanner from "components/Banners/Main";

export default function Error404({ pageId }) {
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
      <MainBanner type={filteredBanner("main", false, true, false)} />
    </section>
  );
}
