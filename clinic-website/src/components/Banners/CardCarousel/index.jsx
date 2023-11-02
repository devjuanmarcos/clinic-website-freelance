import styles from "./styles.module.css";
import React from "react";

export default function CardCarouselBanner({ type }) {
  const [filteredId, filteredBanner, background, revertPosition, anchor] = type;
  console.log(filteredId);
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
              <h2>{banner.title}</h2>
              <p>{banner.subtitle}</p>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
