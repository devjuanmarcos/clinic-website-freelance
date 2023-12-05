import styles from "./styles.module.css";
import React from "react";
import data from "assets/json/data.json";

import { NavLink } from "react-router-dom";
import { isDisabled } from "@testing-library/user-event/dist/utils";

export const MenuLink = ({ children, to, fontWeight, color }) => {
  return (
    <NavLink
      to={to}
      end
    >
      <h4
        style={{ fontWeight: `${fontWeight}`, color: color }}
        className={styles.itemH4}
      >
        {children}
      </h4>
    </NavLink>
  );
};

export const MenuMain = () => {
  const pageIdMain = "menuMain";
  const filteredData = data.find((menu) => menu.id === pageIdMain);

  if (!filteredData) {
    return null;
  }

  const { items } = filteredData;

  return (
    <nav
      className={styles.menu}
      style={{ position: "relative", zIndex: "5" }}
    >
      {items.map((item) => (
        <MenuLink
          className={styles.item}
          key={item.id}
          to={item.anchor}
        >
          {item.name}
        </MenuLink>
      ))}
    </nav>
  );
};

export default function Menu({ type }) {
  const [filteredId, filteredBanner, background, revertPosition, anchor] = type;
  return (
    <section style={{ width: "100%", position: "fixed", zIndex: "2" }}>
      <MenuMain />
      {filteredBanner.map((banner) => (
        <nav
          className={styles.menu}
          style={{ backgroundColor: "var(--branco)" }}
        >
          {banner.itens.map((item) => (
            <span
              key={item.id}
              color={"var(--preto)"}
            >
              <a
                href={item.anchor}
                className={styles.itemH4}
                style={{ color: "var(--preto)" }}
              >
                {" "}
                {item.name}
              </a>
            </span>
          ))}
        </nav>
      ))}
    </section>
  );
}
