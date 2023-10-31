import styles from "./styles.module.css";
import React from "react";

import data from "assets/json/data.json";
import SimpleButton from "components/Buttons/Simple";

export default function ImageWithText({
  revertPosition,
  background,
  id,
  type,
}) {
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
          <div
            className={styles.content}
            style={revertPosition ? { flexDirection: "row-reverse" } : {}}
          >
            <div className={styles.title}>
              <h2>{banner.title}</h2>
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
