import styles from "./styles.module.css";
import React from "react";

import data from "assets/json/data.json";

export default function ThreeMiniBanners({ background, id, type }) {
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
          <div className={styles.content}>
            <div className={styles.title}>
              <h2>{banner.title}</h2>
              <p>{banner.subtitle}</p>
            </div>

            {banner.itens.map((item, id) => (
              <div
                className={styles.infos}
                key={id}
              >
                <div
                  className={styles.miniBanner}
                  style={id % 2 !== 0 ? { flexDirection: "row-reverse" } : {}}
                >
                  <div className={styles.imageBox}>
                    <img
                      className={styles.image}
                      src={item.image}
                      alt=''
                    />
                  </div>
                  <div className={styles.textBox}>
                    <h3> {item.title} </h3>
                    <p>{item.paragraph}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
