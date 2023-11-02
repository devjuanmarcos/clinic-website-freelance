import styles from "./styles.module.css";
import React from "react";

export default function Menu({ type }) {
  const [filteredId, filteredBanner, background, revertPosition, anchor] = type;
  return (
    <>
      {filteredBanner.map((banner) => (
        <nav className={styles.menu}>
          {banner.itens.map((item) => (
            <span className={styles.item}>
              <a
                key={item.id}
                href={item.anchor}
              >
                {item.name}
              </a>
            </span>
          ))}
        </nav>
      ))}
    </>
  );
}
