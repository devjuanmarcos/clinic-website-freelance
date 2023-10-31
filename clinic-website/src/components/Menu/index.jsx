import styles from "./styles.module.css";
import React from "react";

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.routes}>
        <li>
          <a href='#anchorHome'>Seção 1</a>
        </li>
        <li>
          <a href='#anchorCenter'>Seção 2</a>
        </li>
        <li>
          <a href='#anchorInfo1'>Seção 3</a>
        </li>
        <li>
          <a href='#anchorInfo2'>Seção 1</a>
        </li>
        <li>
          <a href='#anchorInfo3'>Seção 3</a>
        </li>
      </ul>
    </nav>
  );
}
