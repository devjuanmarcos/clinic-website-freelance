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
  const [wppLink, setWppLink] = useState("https://wa.me/+5524993188312");

  const handleClick = () => {
    if (link) {
      // Abre o link em uma nova aba
      window.open(link, "_blank");
    } else {
      // Abre o link do WhatsApp em uma nova aba
      window.open(wppLink, "_blank");
    }
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
