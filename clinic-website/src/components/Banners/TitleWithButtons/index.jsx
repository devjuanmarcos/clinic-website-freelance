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
                {banner.button.map((button) => (
                  <SimpleButton
                    children={button.children}
                    primaryColor={filteredId.primaryColor}
                    secundaryColor={filteredId.secundaryColor}
                    terciaryColor={filteredId.terciaryColor}
                    link={button.link}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
