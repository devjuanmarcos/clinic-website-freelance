import React, { useState } from "react";
import styles from "./styles.module.css";

export default function SimpleButton({
  link,
  children,
  primaryColor,
  secundaryColor,
  terciaryColor,
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
          ? {
              backgroundColor: terciaryColor,
              boxShadow: `0px 0px 12px -4px ${secundaryColor}`,
            }
          : {
              backgroundColor: secundaryColor,
              boxShadow: `0px 0px 12px -4px ${secundaryColor}`,
            }
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
