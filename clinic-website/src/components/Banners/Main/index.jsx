import styles from "./styles.module.css";
import React from "react";

import data from "assets/json/data.json";

export default function MainBanner({ id, type }) {
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
        <section>
          <h1>{banner.title}</h1>
        </section>
      ))}
    </>
  );
}
