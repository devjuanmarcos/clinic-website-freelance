import Example from "components/Cards/Carousel/OneAnimated";
import styles from "./styles.module.css";

import React from "react";

export default function ImageApresentationBanner({ type }) {
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
          <Example />
        </section>
      ))}
    </>
  );
}
