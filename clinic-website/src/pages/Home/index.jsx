import MainBanner from "components/Banners/Main";
import styles from "./styles.module.css";

import React from "react";
import IconComponent from "components/Icons/IconComponent";

export default function Home() {
  const pageId = "home";

  return (
    <section className={styles.main}>
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
