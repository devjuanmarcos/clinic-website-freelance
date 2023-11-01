import React, { useState } from "react";
import styles from "./styles.module.css";

export default function SimpleButton({
  link,
  children,
  primaryColor,
  secundaryColor,
}) {
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    window.location.href = link;
  };
  return (
    <button
      className={`${styles.button} ${hovered ? "" : styles.hoverOut}  `}
      style={
        hovered
          ? { backgroundColor: secundaryColor }
          : { backgroundColor: primaryColor }
      }
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
      onClick={handleClick}
    >
      {children ? children : "Conferir"}
    </button>
  );
}
