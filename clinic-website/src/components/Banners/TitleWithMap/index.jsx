import styles from "./styles.module.css";
import React from "react";

export default function TitleWithMapBanner({ type }) {
  // eslint-disable-next-line
  const [filteredId, filteredBanner, background, revertPosition, anchor] = type;
  // const link = filteredBanner.filter((banner) => banner.link);
  // const handleClick = () => {
  //   if (link) {
  //     // Abre o link em uma nova aba
  //     window.open(link, "_blank");
  //   }
  // };
  return (
    <>
      {filteredBanner.map((banner) => (
        <section
          style={
            !background && banner.background
              ? {
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${banner.background})`,
                  backgroundSize: "cover",
                  margin: "96px 0",
                }
              : background
              ? { backgroundColor: background }
              : undefined
          }
          className={styles.main}
          id={anchor}
        >
          <div className={styles.content}>
            <div className={styles.title}>
              {banner.topText ? (
                <p
                  style={
                    banner.background || background
                      ? { color: "var(--branco)" }
                      : null
                  }
                >
                  {banner.topText}
                </p>
              ) : undefined}
              <h2
                style={
                  banner.background || background
                    ? { color: "var(--branco)" }
                    : null
                }
              >
                {banner.title}
              </h2>
              {banner.paragraph ? (
                <p
                  style={
                    banner.background || background
                      ? { color: "var(--branco)" }
                      : null
                  }
                >
                  {banner.paragraph}
                </p>
              ) : undefined}
              {banner.botText ? (
                <p
                  style={
                    banner.background || background
                      ? { color: "var(--branco)" }
                      : null
                  }
                >
                  {banner.botText}
                </p>
              ) : undefined}
              <div
                className={styles.imageBox}
                // onClick={handleClick}
              >
                <img
                  src={banner.image}
                  alt='none'
                />
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
