import styles from "./styles.module.css";
import { ContainerMenuClosed, ContainerMenuVisible } from "./styles.jsx";
import React from "react";
import { MenuLink } from "components/Menu";
import { useState } from "react";

export default function MenuMobile() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <>
      <ContainerMenuClosed
        className={styles.container}
        style={menuIsVisible ? { display: "none" } : { display: "flex" }}
        onClick={() => setMenuIsVisible(true)}
      >
        <h1 style={{ color: "var(--branco)" }}>VILLA AMOR</h1>
      </ContainerMenuClosed>

      <ContainerMenuVisible
        isVisible={menuIsVisible}
        style={
          menuIsVisible ? { display: "flex", gap: "20px" } : { display: "none" }
        }
        onClick={() => setMenuIsVisible(false)}
      >
        <MenuLink
          to={"/"}
          fontWeight={900}
        >
          Início
        </MenuLink>
        <MenuLink to={"nutricionist"}>Nutricionista</MenuLink>
        <MenuLink to={"psychologist"}>Psicólogo</MenuLink>
        <MenuLink to={"speechTherapist"}>Fonodiólogo</MenuLink>
      </ContainerMenuVisible>
    </>
  );
}
