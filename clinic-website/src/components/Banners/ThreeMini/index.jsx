import styles from "./styles.module.css";
import React from "react";

import data from "assets/json/data.json";

export default function ThreeMiniBanners({ background, id, type }) {
  const filteredId = data.find((data) => data.id === id);
  if (!filteredId) {
    return null;
  }

  const filteredBanner = filteredId.banners.filter(
    (banner) => banner.type === type
  );

  return (
    <>
      {filteredBanner.map((banner) => (
        <section
          style={
            background
              ? {
                  backgroundColor: background,
                }
              : null
          }
          className={styles.main}
        >
          <div className={styles.content}>
            <div className={styles.title}>
              <h2>{banner.title}</h2>
              <p>{banner.subtitle}</p>
            </div>
            <div className={styles.infos}>
              <div className={styles.miniBanner}></div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
