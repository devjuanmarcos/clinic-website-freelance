import React from "react";

import styles from "./styles.module.css";
import IconComponent from "components/Icons/IconComponent";

const IconCardTitle = ({ title, paragraph }) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        <IconComponent
          iconName={"BsFillBalloonHeartFill"}
          color={"var(--clinic-primaryColor)"}
          size={32}
        />
      </div>
      <div className={styles.text}>
        <h3>{title}</h3>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default function IconWithTitleBanner({ type }) {
  const [filteredId, filteredBanner, background, revertPosition, anchor] = type;

  return (
    <>
      {filteredBanner.map((banner) => (
        <section className={styles.main}>
          <h2>{banner.title}</h2>
          <p>{banner.subtitle}</p>
          <div className={styles.content}>
            {banner.items.map((item) => (
              <IconCardTitle
                title={item.title}
                paragraph={item.paragraph}
              />
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
