import styles from "./styles.module.css";
import React from "react";

import SimpleButton from "components/Buttons/Simple";

export default function ImageWithText({ type }) {
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
          <div
            className={styles.content}
            style={revertPosition ? { flexDirection: "row-reverse" } : {}}
          >
            <div className={styles.title}>
              <h2>{banner.title}</h2>
              <p>{banner.paragraph}</p>
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
            <div className={styles.infos}>
              <div
                className={styles.imageBox}
                style={revertPosition ? { justifyContent: "flex-start" } : {}}
              >
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
