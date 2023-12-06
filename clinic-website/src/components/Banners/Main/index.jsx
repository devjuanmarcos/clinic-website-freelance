import styles from "./styles.module.css";
import React from "react";
import SimpleButton from "components/Buttons/Simple";

export default function MainBanner({ type }) {
  const [filteredId, filteredBanner, background, revertPosition, anchor] = type;
  return (
    <>
      {filteredBanner.map((banner) => (
        <section
          style={
            !background && banner.background
              ? {
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${banner.background})`,
                  backgroundSize: "cover",
                }
              : background
              ? { backgroundColor: background }
              : undefined
          }
          className={styles.main}
          id={anchor}
        >
          <div
            className={styles.content}
            style={revertPosition ? { flexDirection: "row-reverse" } : {}}
          >
            <div className={styles.title}>
              <h1
                style={
                  background || banner.background
                    ? { color: "var(--branco)" }
                    : undefined
                }
              >
                {banner.title}
              </h1>
              <p
                style={
                  background || banner.background
                    ? { color: "var(--branco)" }
                    : undefined
                }
              >
                {banner.paragraph}
              </p>
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
              <div className={styles.imageBox}>
                <img
                  // style={{
                  //   boxShadow: `0px 0px 90px -12px ${filteredId.terciaryColor}`,
                  // }}
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
