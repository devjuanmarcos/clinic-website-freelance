import React, { useState } from "react";
import { IconContext } from "react-icons";
import * as ReactIconsAi from "react-icons/ai";
import * as ReactIconsSi from "react-icons/si";
import * as ReactIconsBs from "react-icons/bs";

const IconComponent = ({ iconName, color, size, link }) => {
  const [wppLink, setWppLink] = useState();

  // Tente acessar o ícone usando ReactIcons[iconName]
  const Icon =
    ReactIconsAi[iconName] || ReactIconsSi[iconName] || ReactIconsBs[iconName];

  if (!Icon) {
    return null; // Retorna null se o ícone não for encontrado
  }

  const handleClick = () => {
    if (link) {
      // Abre o link em uma nova aba
      window.open(link, "_blank");
    }
  };
  return (
    <div onClick={handleClick}>
      <IconContext.Provider value={{ color, size }}>
        <Icon />
      </IconContext.Provider>
    </div>
  );
};

export default IconComponent;
