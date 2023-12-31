import styles from "./styles.module.css";
import React from "react";

export default function ThreeMiniBanners({ type }) {
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

            {banner.items.map((item, id) => (
              <div
                className={styles.miniBanner}
                key={id}
                style={id % 2 !== 0 ? { flexDirection: "row-reverse" } : {}}
              >
                <div className={styles.imageBox}>
                  <img
                    // style={{
                    //   boxShadow: `0px 0px 90px -12px ${filteredId.boxShadowColor}`,
                    // }}
                    className={styles.image}
                    src={item.image}
                    alt=''
                  />
                </div>
                <div className={styles.textBox}>
                  <h3> {item.title} </h3>
                  <p>{item.paragraph}</p>
                  {item.anchor ? (
                    <a
                      key={item.id}
                      href={item.anchor}
                    >
                      Saiba mais sobre
                    </a>
                  ) : undefined}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
