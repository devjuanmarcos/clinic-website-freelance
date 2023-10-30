import MainBanner from "components/Banners/Main";
import styles from "./styles.module.css";

import React from "react";
import IconComponent from "components/Icons/IconComponent";
import ThreeMiniBanners from "components/Banners/ThreeMini";

export default function Home() {
  const pageId = "home";

  return (
    <section className={styles.main}>
      <MainBanner
        id={pageId}
        type={"main"}
      />
      <ThreeMiniBanners
        id={pageId}
        type={"center"}
      />
      <MainBanner
        id={pageId}
        type={"main"}
      />
      <MainBanner
        id={pageId}
        type={"main"}
      />
      <MainBanner
        id={pageId}
        type={"main"}
      />
    </section>
  );
}
