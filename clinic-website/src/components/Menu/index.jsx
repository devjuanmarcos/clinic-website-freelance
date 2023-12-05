import styles from "./styles.module.css";
import React from "react";
import data from "assets/json/data.json";

import { NavLink } from "react-router-dom";
import IconComponent from "components/Icons/IconComponent";

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
    <div className={`${styles.menu} ${styles.menuMain}`}>
      <div className={styles.imageBox}>
        <NavLink
          to={"/"}
          end
        >
          <img
            className={styles.image}
            src={filteredData.image}
            alt={filteredData.imageName}
          />
        </NavLink>
      </div>

      <nav style={{ flexDirection: "row", display: "flex" }}>
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
      <div className={styles.icons}>
        <IconComponent
          iconName={"SiWhatsapp"}
          color={"var(--branco)"}
          link={"https://wa.me/+5524993188312"}
        />
        <IconComponent
          iconName={"SiInstagram"}
          color={"var(--branco)"}
          link={"https://www.instagram.com/clinicavillaamor/"}
        />
      </div>
    </div>
  );
};

export const SubMenu = ({ type }) => {
  // eslint-disable-next-line
  const [filteredId, filteredBanner, background, revertPosition, anchor] = type;

  return (
    <>
      {filteredBanner.map((banner) => (
        <nav
          className={styles.menu}
          style={{ backgroundColor: "var(--branco)", height: "40px" }}
        >
          {banner.items.map((item) => (
            <span
              key={item.id}
              color={"var(--preto)"}
            >
              <a
                href={item.anchor}
                className={styles.itemH4}
                style={{ color: "var(--preto)" }}
              >
                {item.name}
              </a>
            </span>
          ))}
        </nav>
      ))}
    </>
  );
};

export default function Menu({ type }) {
  return (
    <section style={{ width: "100%", position: "fixed", zIndex: "2" }}>
      <MenuMain />
      <SubMenu type={type} />
    </section>
  );
}
