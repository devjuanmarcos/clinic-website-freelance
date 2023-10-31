import styles from "./styles.module.css";
import React from "react";

import SimpleButton from "components/Buttons/Simple";

export default function MainBanner({ type }) {
  const [filteredId, filteredBanner, background, revertPosition] = type;
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
              <h1>{banner.title}</h1>
              <p>{banner.paragraph}</p>
              <SimpleButton
                children={"Get Started"}
                primaryColor={filteredId.primaryColor}
                secundaryColor={filteredId.secundaryColor}
              />
            </div>
            <div className={styles.infos}>
              <div className={styles.imageBox}>
                <img
                  className={styles.image}
                  src={banner.image}
                  alt=''
                />
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
