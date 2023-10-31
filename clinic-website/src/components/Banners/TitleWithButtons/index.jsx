import styles from "./styles.module.css";
import React from "react";

import data from "assets/json/data.json";
import SimpleButton from "components/Buttons/Simple";

export default function TitleWithButtons({ type }) {
  const [filteredId, filteredBanner, background, revertPosition, anchor] = type;
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
          id={anchor}
        >
          <div className={styles.content}>
            <div className={styles.title}>
              <p>{banner.topText}</p>
              <h2>{banner.title}</h2>
              <div className={styles.buttonBox}>
                <SimpleButton
                  children={"Get Started"}
                  primaryColor={filteredId.primaryColor}
                  secundaryColor={filteredId.secundaryColor}
                />
                <SimpleButton
                  children={"Get Started"}
                  primaryColor={filteredId.primaryColor}
                  secundaryColor={filteredId.secundaryColor}
                />
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
