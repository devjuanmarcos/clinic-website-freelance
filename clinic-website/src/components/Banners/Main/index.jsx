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
              <h1>{banner.title}</h1>
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
