import styles from "./styles.module.css";
import React from "react";

import SimpleButton from "components/Buttons/Simple";

export default function TitleWithButtons({ type }) {
  // eslint-disable-next-line
  const [filteredId, filteredBanner, background, revertPosition, anchor] = type;
  return (
    <>
      {filteredBanner.map((banner) => (
        <section
          style={
            banner.background
              ? {
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${banner.background})`,
                  backgroundSize: "cover",
                  margin: "96px 0",
                }
              : null
          }
          className={styles.main}
          id={anchor}
        >
          <div className={styles.content}>
            <div className={styles.title}>
              {banner.topText ? (
                <p
                  style={banner.background ? { color: "var(--branco)" } : null}
                >
                  {banner.topText}
                </p>
              ) : undefined}
              <h2 style={banner.background ? { color: "var(--branco)" } : null}>
                {banner.title}
              </h2>
              {banner.paragraph ? (
                <p
                  style={banner.background ? { color: "var(--branco)" } : null}
                >
                  {banner.paragraph}
                </p>
              ) : undefined}
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
