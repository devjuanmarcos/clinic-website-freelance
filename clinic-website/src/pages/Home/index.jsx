import MainBanner from "components/Banners/Main";
import styles from "./styles.module.css";

import React from "react";
import ThreeMiniBanners from "components/Banners/ThreeMini";
import ImageWithText from "components/Banners/ImageWithText";
import TitleWithButtons from "components/Banners/TitleWithButtons";

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
      <ImageWithText
        revertPosition={true}
        id={pageId}
        type={"main"}
      />
      <TitleWithButtons
        id={pageId}
        type={"info2"}
      />
      <ImageWithText
        id={pageId}
        type={"main"}
      />
    </section>
  );
}
