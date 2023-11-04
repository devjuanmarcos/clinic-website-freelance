import Example from "components/Cards/Carousel/OneAnimated";
import styles from "./styles.module.css";
import React, { useState } from "react";

export default function ImageApresentationBanner({ type }) {
  const [filteredId, filteredBanner, background, revertPosition, anchor] = type;
  const banner = Array.isArray(filteredBanner)
    ? filteredBanner.map((banner) => banner)
    : [];

  // Use flatMap para extrair a propriedade 'image' de cada objeto 'imageItem'
  const images = banner.flatMap((bannerItem) =>
    Array.isArray(bannerItem.items)
      ? bannerItem.items.map((imageItem) => imageItem.image)
      : []
  );
  console.log(images);
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
            <Example images={images} />
          </div>
        </section>
      ))}
    </>
  );
}
